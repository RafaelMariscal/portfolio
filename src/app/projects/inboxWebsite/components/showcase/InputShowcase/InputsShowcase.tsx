'use client'

import { z } from 'zod'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SERVICES from '@/utils/mocks/servicesMock'

export const quoteFormSchema = z.object({
  name: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  serviceModel: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
})
export type QuoteFormData = z.infer<typeof quoteFormSchema>

export default function InputsShowcase() {
  const {
    register,
    setValue,
    watch,
    formState: { isSubmitSuccessful, errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  })

  const serviceModelValue = watch('serviceModel')

  return (
    <form className="flex w-full max-w-xs flex-col gap-3">
      <Input.Root errorMessage={errors.name}>
        <Input.Input<QuoteFormData>
          inputName="name"
          register={register}
          readOnly={isSubmitSuccessful}
        />
        <Input.Container>
          <Input.Label>Nome</Input.Label>
        </Input.Container>
        {errors?.name && (
          <Input.ErrorMessage errorMessage={errors?.name.message} />
        )}
      </Input.Root>
      <Input.Select<QuoteFormData>
        name="serviceModel"
        placeholder="Modal de Serviço"
        value={serviceModelValue}
        setValue={setValue}
        errorMessage={errors?.serviceModel?.message}
        options={SERVICES}
        disabled={isSubmitSuccessful}
      />
    </form>
  )
}
