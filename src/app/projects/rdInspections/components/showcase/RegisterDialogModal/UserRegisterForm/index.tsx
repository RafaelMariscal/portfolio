import FormInput from '../../FormComponents/FormInput'
import FormButton from '../../FormComponents/FormButton'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Info } from '@phosphor-icons/react'

const UserRegisterFormSchema = z
  .object({
    name: z
      .string({ required_error: ' ' })
      .min(3, { message: 'min 3 chars.' })
      .max(60, { message: 'max 60 chars.' })
      .nonempty({ message: ' ' }),
    email: z
      .string()
      .email({ message: 'Email inválido' })
      .min(3, { message: 'Deve conter ao menos 3 caracteres' })
      .max(45, { message: 'Máximo de 45 caracteres' }),
    password: z
      .string({ required_error: ' ' })
      .max(20, { message: 'max 20 chars.' })
      .min(8, { message: ' ' })
      .nonempty({ message: ' ' })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?@#$%^&*:;]).{8,20}$/, {
        message: 'regex',
      }),
    confirmPassword: z
      .string({ required_error: ' ' })
      .max(20, { message: 'max 20 chars.' })
      .min(8, { message: ' ' })
      .nonempty({ message: ' ' })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?@#$%^&*:;]).{8,20}$/, {
        message: 'regex',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Campo Senha não e Confirmar Senha devem ser iguais.',
    path: ['customError'],
  })

type CustomErrorType = {
  customError?: string
}

type UserRegisterFormData = z.infer<typeof UserRegisterFormSchema> &
  CustomErrorType

interface UserRegisterFormProps {
  setSubmitted: (state: boolean) => void
}

export default function UserRegisterForm({
  setSubmitted,
}: UserRegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormData>({
    resolver: zodResolver(UserRegisterFormSchema),
  })

  async function handleReportRegister(data: UserRegisterFormData) {
    setSubmitted(true)
    console.log('Report registration complete', { data })
  }

  return (
    <form onSubmit={handleSubmit(handleReportRegister)}>
      <div
        className="
          flex max-w-sm flex-col gap-3
          text-sm font-semibold text-[#151D68] max-phones:max-w-none max-phones:gap-2
          [&_span]:text-end
        "
      >
        <FormInput
          fieldName="name"
          fieldTitle="Nome:"
          maxLength={60}
          register={register}
          errorMessage={errors.name?.message}
          isVerified
          className={{
            label: 'w-[7rem]',
            input: 'w-full',
          }}
        />
        <FormInput
          fieldName="email"
          fieldTitle="Email:"
          maxLength={60}
          register={register}
          errorMessage={errors.email?.message}
          className={{
            label: 'w-[7rem]',
            input: 'w-full',
          }}
        />
        <FormInput
          fieldName="password"
          fieldTitle="Senha:"
          maxLength={60}
          register={register}
          className={{
            label: 'w-[7rem]',
            input: 'w-full',
          }}
          errorMessage={
            errors.password?.message === 'regex'
              ? ' '
              : errors.password?.message
          }
          type="password"
        />
        <FormInput
          fieldName="confirmPassword"
          fieldTitle="Confirmar Senha:"
          maxLength={60}
          register={register}
          errorMessage={
            errors.password?.message === 'regex'
              ? ' '
              : errors.password?.message
          }
          className={{
            label: 'w-[7rem]',
            input: 'w-full',
          }}
          type="password"
        />
      </div>

      <div className="mt-3">
        {errors.password?.message ? (
          <div className="flex items-start">
            <div className="flex items-center gap-[.125rem]">
              <Info size={14} weight="bold" className="[&_*]:fill-red-500" />
              <span className="text-[.625rem] font-semibold text-red-500">
                Password deve conter:
              </span>
            </div>
            <ul className="ml-4 text-[.625rem] font-semibold text-red-500">
              <li>- Ao menos um caractere maiúsculo.[ A-Z ]</li>
              <li>- Ao menos um caractere minúsculo.[ a-z ]</li>
              <li>- Ao menos um número.[ 0-9 ]</li>
              <li>- Ao menos um simbolo.[ {`!?@#$%^&*:;`} ]</li>
              <li>- Possuir de 8 à 20 caracteres.</li>
            </ul>
          </div>
        ) : errors.customError?.message ? (
          <div className="flex items-center gap-[.125rem]">
            <Info size={14} weight="bold" className="[&_*]:fill-red-500" />
            <span className="text-[.625rem] font-semibold text-red-500">
              {errors.customError?.message}
            </span>
          </div>
        ) : null}
        <FormButton title={'Cadastrar'} className="mt-3" />
      </div>
    </form>
  )
}
