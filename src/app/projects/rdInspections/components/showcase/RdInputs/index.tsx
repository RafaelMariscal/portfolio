'use client'

import { useState } from 'react'
import { SpinnerGap } from '@phosphor-icons/react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const userLoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Email inválido' })
    .min(3, { message: 'Deve conter ao menos 3 caracteres' })
    .max(45, { message: 'Máximo de 45 caracteres' }),
  password: z
    .string()
    .min(6, { message: 'Ao menos 6 caracteres' })
    .max(45, { message: 'Máximo de 45 caracteres' }),
})

export type UserLoginFormData = z.infer<typeof userLoginFormSchema>

export default function RdInputs() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    register,
    clearErrors,
    resetField,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(userLoginFormSchema),
  })

  async function handleFormSubmit(data: UserLoginFormData) {
    setIsLoading(true)
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
      clearErrors()
      resetField('email')
      resetField('password')
      setTimeout(() => {
        reset()
      }, 1500)
    }, 1500)
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleFormSubmit(data)
      })}
      className="max-w-xs bg-gray-100 pb-2 pt-4"
      noValidate
    >
      <div className="mb-4 flex flex-col gap-6">
        <Input
          title="Usuário"
          maxLength={45}
          tabIndex={1}
          required
          disabled={isLoading}
          inputname="email"
          register={register}
          errorMessage={errors.email?.message}
        />
        <Input
          title="Password"
          type="password"
          maxLength={45}
          tabIndex={2}
          required
          disabled={isLoading}
          inputname="password"
          register={register}
          errorMessage={errors.password?.message}
        />
      </div>

      <button
        tabIndex={30}
        type="submit"
        disabled={isLoading}
        className="
          shadow-custom-md flex w-full items-center justify-center rounded-lg bg-[#151d68] 
          py-3 text-xs font-semibold text-light outline-none 
          transition-all duration-75 
          hover:bg-blue-800 focus:scale-[100.5%]
          focus:bg-blue-800
          active:bg-blue-600 
          disabled:cursor-not-allowed disabled:opacity-50
        "
      >
        {isLoading && (
          <SpinnerGap weight="regular" size={28} color="#fff">
            <animate
              attributeName="opacity"
              values="0.5;0.9;0.5"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1.50s"
              from="0 0 0"
              to="360 0 0"
              repeatCount="indefinite"
            ></animateTransform>
          </SpinnerGap>
        )}
        {isSubmitSuccessful && !isLoading ? 'Ok!' : isLoading ? null : 'Login'}
      </button>
    </form>
  )
}
