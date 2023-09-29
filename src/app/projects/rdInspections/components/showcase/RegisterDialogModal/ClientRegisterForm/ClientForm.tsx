import FormInput from '../../FormComponents/FormInput'
import FormButton from '../../FormComponents/FormButton'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  normalizeCepNumber,
  normalizeLetters,
  normalizeNumber,
} from '@/utils/mask'

const ClientFormSchema = z.object({
  corporateName: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .max(100, {
      message: 'Max 100 chars',
    }),
  companyName: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .max(100, {
      message: 'Max 100 chars',
    }),
  legalNature: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .max(100, {
      message: 'Max 100 chars',
    }),
  companySize: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .max(30, { message: 'Max 30 chars' }),
  address: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .max(100, {
      message: 'Max 100 chars',
    }),
  number: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .regex(/[0-9]$/, { message: 'Num.' })
    .max(10, {
      message: 'Maior número possível: 9999999999',
    }),
  city: z.string({ required_error: ' ' }).nonempty({ message: ' ' }).max(100, {
    message: 'Max 100 chars',
  }),
  state: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .max(2, {
      message: 'Max 2 chars',
    })
    .toUpperCase(),
  zipCode: z
    .string({ required_error: ' ' })
    .nonempty({ message: ' ' })
    .max(9)
    .regex(/([0-9]{5})-([0-9]{3})$/, { message: 'CEP inv.' }),
})

type ClientFormData = z.infer<typeof ClientFormSchema>

interface ClientFormPorps {
  isVerified: boolean
  setSubmitted: (state: boolean) => void
}

export default function ClientForm({
  isVerified,
  setSubmitted,
}: ClientFormPorps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(ClientFormSchema),
  })

  const zipCodeValue = watch('zipCode')
  const numberValue = watch('number')
  const stateValue = watch('state')

  useEffect(() => {
    setValue('zipCode', normalizeCepNumber(zipCodeValue))
    setValue('number', normalizeNumber(numberValue))
    setValue('state', normalizeLetters(stateValue))
  }, [setValue, zipCodeValue, numberValue, stateValue])

  async function handleCreateClient(data: ClientFormData) {
    setSubmitted(true)
    console.log('client created', { data })
  }
  return (
    <form
      onSubmit={handleSubmit(handleCreateClient)}
      className="
        flex flex-col gap-3 pt-6
        text-sm font-semibold text-[#151D68] [&_span]:text-end
      "
    >
      <FormInput
        fieldName="corporateName"
        fieldTitle="Razão Social:"
        isVerified={isVerified}
        register={register}
        maxLength={100}
        errorMessage={errors.corporateName?.message}
        className={{
          label: 'w-[7rem]',
          input: 'w-full',
        }}
      />

      <FormInput
        fieldName="companyName"
        fieldTitle="Nome Fantasia:"
        isVerified={isVerified}
        register={register}
        maxLength={100}
        errorMessage={errors.companyName?.message}
        className={{
          label: 'w-[7rem]',
          input: 'w-full',
        }}
      />

      <div className="flex gap-2">
        <FormInput
          fieldName="legalNature"
          fieldTitle="Nat. Jurídica:"
          isVerified={isVerified}
          register={register}
          maxLength={100}
          errorMessage={errors.legalNature?.message}
          className={{
            root: 'w-full',
            label: 'w-[7rem]',
            input: 'w-full',
          }}
        />
        <FormInput
          fieldName="companySize"
          fieldTitle="Porte:"
          isVerified={isVerified}
          register={register}
          maxLength={30}
          errorMessage={errors.companySize?.message}
          className={{
            input: 'w-32',
          }}
        />
      </div>

      <div className="flex gap-2">
        <FormInput
          fieldName="address"
          fieldTitle="Endereço:"
          isVerified={isVerified}
          register={register}
          maxLength={100}
          errorMessage={errors.address?.message}
          className={{
            root: 'w-full',
            label: 'w-[7rem]',
            input: 'w-full',
          }}
        />
        <FormInput
          fieldName="number"
          fieldTitle="Nº:"
          isVerified={isVerified}
          register={register}
          maxLength={10}
          errorMessage={errors.number?.message}
          className={{
            input: 'w-20',
          }}
        />
      </div>

      <div className="flex w-full gap-2">
        <FormInput
          fieldName="city"
          fieldTitle="Cidade:"
          isVerified={isVerified}
          register={register}
          maxLength={100}
          errorMessage={errors.city?.message}
          className={{
            label: 'w-[7rem]',
            input: 'w-full',
          }}
        />
        <FormInput
          fieldName="state"
          fieldTitle="UF:"
          isVerified={isVerified}
          register={register}
          maxLength={2}
          errorMessage={errors.state?.message}
          className={{
            input: 'w-12 uppercase',
          }}
        />
        <FormInput
          fieldName="zipCode"
          fieldTitle="CEP:"
          isVerified={isVerified}
          register={register}
          className={{
            input: 'w-[6.25rem]',
          }}
          maxLength={9}
          errorMessage={errors.zipCode?.message}
        />
      </div>
      <FormButton disabled={!isVerified} title={'Cadastrar'} className="mt-3" />
    </form>
  )
}
