import FormButton from '../FormComponents/FormButton'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Info } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { normalizeNumber } from '@/utils/mask'
import FormInput from '../FormComponents/FormInput'

const VehicleFormSchema = z
  .object({
    plate: z.string().max(7, { message: 'max 7 chars' }),
    renavam: z
      .string()
      .max(11, { message: 'max 11 chars' })
      .regex(/^[0-9]*$/, { message: '0-9' }),
    brand: z.string().max(30, { message: 'max 30 chars' }),
    model: z.string().max(30, { message: 'max 30 chars' }),
  })
  .refine(
    (data) =>
      data.plate !== '' ||
      data.renavam !== '' ||
      data.brand !== '' ||
      data.model !== '',
    {
      message: 'Ao menos um campo precisa ser preenchido.',
      path: ['customError'],
    },
  )
  .refine((data) => /^[0-9]{11}$/.test(data.renavam) || data.renavam === '', {
    message: 'min 11 chars',
    path: ['renavam'],
  })
  .refine(
    (data) =>
      /[a-zA-Z]{3}[\d]{1}[a-zA-Z0-9]{1}[\d]{2}$/.test(data.plate) ||
      data.plate === '',
    {
      message: 'placa inválida',
      path: ['plate'],
    },
  )

// /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/

interface CustomError {
  customError?: string
}

type VehicleFormData = z.infer<typeof VehicleFormSchema> & CustomError

export default function VehicleSearchForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<VehicleFormData>({
    resolver: zodResolver(VehicleFormSchema),
  })
  const renavamValue = watch('renavam')

  useEffect(() => {
    setValue('renavam', normalizeNumber(renavamValue))
  }, [renavamValue, setValue])

  function handleSearchVehicle(data: VehicleFormData) {
    return console.log('search vehicle form submitted', { data })
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchVehicle)}
      className="
        flex h-[calc(100%-3.125rem)] w-full flex-col
        justify-between text-sm font-semibold text-blue-700
        [&_span]:text-end
      "
    >
      <div className="flex animate-showContent flex-col gap-3 ">
        <div className="flex items-center gap-3">
          <FormInput
            fieldName="plate"
            fieldTitle="Placa:"
            placeholder="BRA0A37"
            maxLength={7}
            register={register}
            errorMessage={errors.plate?.message}
            className={{
              label: 'w-[4.5rem]',
              input: 'w-full bg-light uppercase',
            }}
          />

          <FormInput
            fieldName="renavam"
            fieldTitle="Renavam:"
            placeholder="00000000000"
            maxLength={11}
            register={register}
            errorMessage={errors.renavam?.message}
            className={{
              label: 'tracking-tight',
              input: 'w-full bg-light',
            }}
          />
        </div>

        <div className="flex items-center">
          <FormInput
            fieldName="brand"
            fieldTitle="Marca:"
            placeholder="Toyta"
            maxLength={30}
            register={register}
            errorMessage={errors.brand?.message}
            className={{
              label: 'w-[4.5rem]',
              input: 'w-full bg-light',
            }}
          />

          <FormInput
            fieldName="model"
            fieldTitle="Modelo:"
            placeholder="Hilux"
            maxLength={30}
            register={register}
            errorMessage={errors.brand?.message}
            className={{
              label: 'w-[4.5rem]',
              input: 'w-full bg-light',
            }}
          />
        </div>
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
        <FormButton title="Buscar" />
      </div>
    </form>
  )
}
