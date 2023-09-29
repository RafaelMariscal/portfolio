import FormButton from '../FormComponents/FormButton'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../FormComponents/FormInput'
import { Info } from '@phosphor-icons/react'
import { normalizeCnpjNumber } from '@/utils/mask'

const ClientFormSchema = z
  .object({
    cnpj: z.string().max(18),
    companyName: z.string().max(100),
  })
  .refine((data) => data.cnpj !== '' || data.companyName !== '', {
    message: 'Ao menos um campo precisa ser preenchido.',
    path: ['customError'],
  })
  .refine(
    (data) =>
      data.cnpj === '' ||
      /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-[0-9]{2}$/.test(data.cnpj),
    {
      message: 'CNPJ inválido.',
      path: ['cnpj'],
    },
  )

interface CustomError {
  customError?: string
}

type ClientFormData = z.infer<typeof ClientFormSchema> & CustomError

export default function ClientResearchForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(ClientFormSchema),
  })
  console.log(errors)
  const cnpjValue = watch('cnpj')

  useEffect(() => {
    setValue('cnpj', normalizeCnpjNumber(cnpjValue))
  }, [cnpjValue, setValue])

  function handleSearchClient(data: ClientFormData) {
    return console.log('search client form submitted', { data })
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchClient)}
      className="
        flex h-[calc(100%-3.125rem)] w-full flex-col justify-between
        text-sm font-semibold text-[#151D68] [&_span]:text-end
      "
    >
      <div className="flex animate-showContent flex-col gap-3">
        <FormInput
          fieldName="cnpj"
          fieldTitle="CNPJ:"
          placeholder="00.000.000/0000-00"
          maxLength={18}
          register={register}
          className={{
            label: 'w-[4.5rem]',
            input:
              'w-[10.625rem] bg-light tracking-normal placeholder:text-center',
          }}
          errorMessage={errors.cnpj?.message}
        />

        <FormInput
          fieldName="companyName"
          fieldTitle="Nome:"
          placeholder="Nome Fantasia"
          maxLength={100}
          register={register}
          className={{
            label: 'w-[4.5rem]',
            input: 'w-full bg-light tracking-normal',
          }}
        />
      </div>
      <div className="relative">
        {errors.customError?.message ? (
          <div
            className="
              absolute -top-[1.125rem] left-0 
              flex cursor-default items-center gap-[0.125rem]
            "
          >
            <Info color="#E73325" size={14} />
            <span className="text-xs text-red-500">
              {errors.customError?.message}
            </span>
          </div>
        ) : null}
        <FormButton title="Buscar" className="mt-4" />
      </div>
    </form>
  )
}
