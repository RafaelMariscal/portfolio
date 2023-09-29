import FormInput from '../../FormComponents/FormInput'
import FormButton from '../../FormComponents/FormButton'
import FormSelect from '../../FormComponents/FormSelect'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { normalizeChassisNumber, normalizeNumber } from '@/utils/mask'
import { years } from '@/utils/yearsGenerator'
import { companyRelatedOptions } from '@/utils/mocks/selectOptionsMock'

const today = new Date()

const VehicleFormSchema = z
  .object({
    brand: z
      .string({ required_error: ' ' })
      .max(30, { message: 'max 30 chars.' })
      .nonempty({ message: ' ' }),
    model: z
      .string({ required_error: ' ' })
      .max(30, { message: 'max 30 chars.' })
      .nonempty({ message: ' ' }),
    renavam: z
      .string({ required_error: ' ' })
      .regex(/^[0-9]*$/, { message: '0-9' })
      .min(9, { message: 'min 9 num.' })
      .max(11, { message: 'max 11 chars.' })
      .nonempty({ message: ' ' }),
    chassis: z
      .string({ required_error: ' ' })
      .toUpperCase()
      .max(20, { message: 'Max 20 chars.' })
      .regex(
        /^[a-zA-Z0-9]{2}\s?[a-zA-Z0-9]{7}\s?[a-zA-Z0-9]{1}\s?[a-zA-Z0-9]{7}$/,
        { message: ' ' },
      )
      .nonempty({ message: ' ' })
      .transform((value) => value.replace(/\s/g, '')),
    yearFab: z
      .string({ required_error: ' ' })
      .nonempty({ message: ' ' })
      .refine(
        (year) =>
          Number(year) >= 1990 && Number(year) <= today.getFullYear() + 1,
        { message: ' ' },
      ),
    yearModel: z.string({ required_error: ' ' }).nonempty({ message: ' ' }),
    companyRelated: z
      .string({ required_error: ' ' })
      .max(100, {
        message: 'Max 100 chars.',
      })
      .nonempty({ message: ' ' }),
  })
  .refine(
    (data) => {
      const testDates =
        Number(data.yearFab) === Number(data.yearModel) ||
        Number(data.yearFab) + 1 === Number(data.yearModel)
      return testDates
    },
    {
      message: 'Invalid Dates',
      path: ['customError'],
    },
  )

type CustomErrorType = {
  customError?: string
}

type VehicleFormData = z.infer<typeof VehicleFormSchema> & CustomErrorType

interface VehicleFormPorps {
  isVerified: boolean
  setSubmitted: (state: boolean) => void
}

export default function VehicleForm({
  isVerified,
  setSubmitted,
}: VehicleFormPorps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<VehicleFormData>({
    resolver: zodResolver(VehicleFormSchema),
  })

  const yearFabValue = watch('yearFab')
  const yearModelValue = watch('yearModel')
  const companyRelatedValue = watch('companyRelated')
  const chassisValue = watch('chassis')
  const renavamValue = watch('renavam')

  useEffect(() => {
    setValue('yearModel', yearFabValue)
    setValue('chassis', normalizeChassisNumber(chassisValue))
    setValue('renavam', normalizeNumber(renavamValue))
  }, [setValue, yearFabValue, chassisValue, renavamValue])

  async function handleRegisterVehicle(data: VehicleFormData) {
    setSubmitted(true)
    console.log('vehicle registration complete', { data })
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegisterVehicle)}
      className="
        flex flex-col gap-3 pt-6
        text-sm font-semibold text-[#151D68] [&_span]:text-end
      "
    >
      <FormInput
        fieldName="brand"
        fieldTitle="Marca:"
        placeholder="Mercedez Benz"
        maxLength={115}
        isVerified={isVerified}
        register={register}
        errorMessage={errors.brand?.message}
        className={{
          label: 'w-[7rem]',
          input: 'w-full max-w-[25rem]',
        }}
      />

      <FormInput
        fieldName="model"
        fieldTitle="Modelo:"
        placeholder="Sprinter"
        maxLength={60}
        isVerified={isVerified}
        register={register}
        errorMessage={errors.model?.message}
        className={{
          label: 'w-[7rem]',
          input: 'w-full max-w-[25rem]',
        }}
      />

      <FormInput
        fieldName="renavam"
        fieldTitle="Renavam:"
        placeholder="00000000000"
        maxLength={11}
        isVerified={isVerified}
        register={register}
        errorMessage={errors.renavam?.message}
        className={{
          label: 'w-[7rem]',
          input: 'w-full max-w-[8rem]',
        }}
      />

      <FormInput
        fieldName="chassis"
        fieldTitle="Chassi:"
        placeholder="XX YYYYYYY X YYYYYYY"
        maxLength={20}
        isVerified={isVerified}
        register={register}
        errorMessage={errors.chassis?.message}
        className={{
          label: 'w-[7rem]',
          input: 'max-w-[12.75rem] uppercase',
        }}
      />

      <div className="flex gap-2">
        <FormSelect
          inputName="yearFab"
          label="Ano Fab:"
          selectPlaceholder="Ano"
          options={years}
          setValue={setValue}
          value={yearFabValue}
          disabled={!isVerified}
          className={{
            label: 'min-w-[7rem]',
            trigger: 'min-w-[5rem] max-w-[5rem]',
            content: 'max-h-[8.25rem] w-[5rem] overflow-y-auto',
          }}
          error={errors.yearFab || errors?.customError}
        />

        <FormSelect
          inputName="yearModel"
          label="Ano Mod:"
          selectPlaceholder="Ano"
          options={[
            yearFabValue || today.getFullYear(),
            Number(yearFabValue) + 1 || today.getFullYear() + 1,
          ]}
          setValue={setValue}
          value={yearModelValue}
          disabled={!isVerified || yearFabValue === undefined}
          className={{
            label: 'w-[4.5rem]',
            trigger: 'min-w-[5rem] max-w-[5rem]',
            content: 'max-h-[8.25rem] w-[5rem] overflow-y-auto',
          }}
          error={errors.yearModel || errors?.customError}
        />
      </div>

      <FormSelect
        inputName="companyRelated"
        label="Empresa:"
        options={companyRelatedOptions}
        setValue={setValue}
        value={companyRelatedValue}
        disabled={!isVerified}
        className={{
          label: 'w-full max-w-[7rem]',
          trigger: 'max-w-[21.25rem]',
          content: 'w-[21.25rem]',
        }}
        error={errors.companyRelated}
      />

      <FormButton disabled={!isVerified} title={'Cadastrar'} className="mt-3" />
    </form>
  )
}
