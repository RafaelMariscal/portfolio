import FormInput from '../../FormComponents/FormInput'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Info } from '@phosphor-icons/react'
import clsx from 'clsx'

const PlateVerifierFormSchema = z.object({
  plate: z
    .string({ invalid_type_error: 'Placa inválida' })
    .toUpperCase()
    .max(7, { message: 'max 7 chars' })
    .nonempty({ message: 'Placa inválida' })
    .regex(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/, {
      message: 'Placa inválida',
    }),
})

type PlateVerifierFormData = z.infer<typeof PlateVerifierFormSchema>

interface VehiclePlateVerifierProps {
  isVerified: boolean
  setIsVerified: (check: boolean) => void
}

export default function VehiclePlateVerifier({
  isVerified,
  setIsVerified,
}: VehiclePlateVerifierProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PlateVerifierFormData>({
    resolver: zodResolver(PlateVerifierFormSchema),
  })
  const plateValue = watch('plate')
  const errorMessage = errors.plate?.message

  function handlePlateCheck() {
    console.log(plateValue)

    /* here we'll test if the Vehicle Plate exists at Detram */

    setIsVerified(true)
    return null
  }

  return (
    <form
      onSubmit={handleSubmit(handlePlateCheck)}
      className="
        flex items-center gap-4
        text-sm font-semibold text-blue-700 [&_span]:text-end
      "
    >
      <FormInput
        fieldName="plate"
        fieldTitle="Placa:"
        placeholder="BRA0A37"
        maxLength={7}
        required
        register={register}
        readOnly={isVerified}
        errorMessage={errorMessage !== undefined ? '' : undefined}
        className={{
          label: 'w-28',
          input: clsx('w-[6.25rem] uppercase', {
            'bg-light': isVerified === false,
            'bg-blue-steel-100 text-center': isVerified === true,
          }),
        }}
      />

      {!isVerified ? (
        <button
          className="
          shadow-custom-sm relative h-8 w-20 rounded-[6px] bg-blue-700
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
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500">
          <Check weight="bold" />
        </div>
      )}
    </form>
  )
}
