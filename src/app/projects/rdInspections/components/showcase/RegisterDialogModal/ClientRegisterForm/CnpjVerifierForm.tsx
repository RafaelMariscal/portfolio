import { useEffect } from 'react'
import { Check, Info } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { normalizeCnpjNumber } from '@/utils/mask'
import clsx from 'clsx'
import FormInput from '../../FormComponents/FormInput'

const CnpjVerifierFormSchema = z.object({
  cnpj: z
    .string()
    .regex(/^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-[0-9]{2}$/, {
      message: 'CNPJ inválido',
    }),
})

type CnpjVerifierFormData = z.infer<typeof CnpjVerifierFormSchema>

interface CnpjVerifierFormProps {
  isVerified: boolean
  setIsVerified: (state: boolean) => void
}

export default function CnpjVerifierForm({
  isVerified,
  setIsVerified,
}: CnpjVerifierFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CnpjVerifierFormData>({
    resolver: zodResolver(CnpjVerifierFormSchema),
  })

  const cnpjValue = watch('cnpj')
  const errorMessage = errors.cnpj?.message

  function handleCnpjCheck() {
    console.log(cnpjValue)

    /* here we'll test if the CPNJ exists at Receita Federal */

    setIsVerified(true)
    return null
  }

  useEffect(() => {
    setValue('cnpj', normalizeCnpjNumber(cnpjValue))
  }, [cnpjValue, setValue])

  return (
    <form
      onSubmit={handleSubmit(handleCnpjCheck)}
      className="
        flex items-center gap-4
        text-sm font-semibold text-[#151D68] [&_span]:text-end
      "
    >
      <FormInput
        fieldName="cnpj"
        fieldTitle="CNPJ:"
        placeholder="00.000.000/0000-00"
        maxLength={18}
        required
        register={register}
        readOnly={isVerified}
        errorMessage={errorMessage !== undefined ? '' : undefined}
        className={{
          label: 'w-28',
          input: clsx('w-[10.625rem]', {
            'bg-light': isVerified === false,
            'bg-blue-400/30 text-center': isVerified === true,
          }),
        }}
      />

      {!isVerified ? (
        <button
          className="
          shadow-custom-sm relative h-8 w-20 rounded-[6px] bg-[#151D68]
          font-medium text-light outline-none transition-all duration-75
          hover:bg-blue-600 focus:bg-blue-600 
        "
        >
          <span className="tracking-wide">Check</span>
          {errorMessage ? (
            <div
              className="
                absolute -top-[1.125rem] right-0 flex cursor-default items-center
                gap-[0.125rem]
              "
            >
              <Info color="#E73325" size={12} />
              <span className="text-[10px] text-red-500">{errorMessage}</span>
            </div>
          ) : null}
        </button>
      ) : (
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2637dd]">
          <Check weight="bold" color="#fff" />
        </div>
      )}
    </form>
  )
}
