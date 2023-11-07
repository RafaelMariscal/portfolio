import clsx from 'clsx'
import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputRootProps {
  children: ReactNode
  errorMessage: FieldError | undefined
  className?: string
}

export default function InputRoot({
  children,
  errorMessage,
  className,
}: InputRootProps) {
  return (
    <div
      className={twMerge(
        'relative h-14 w-full border border-[#ebf6f3] bg-gray-100',
        'text-[#062e24] shadow-lg shadow-dark/20',
        'valid:[&_>input]:bg-[#ebf6f3]/30 focus:[&_>input]:bg-[#ebf6f3]/30',
        className,
        clsx(errorMessage && 'border-terracotta-500'),
      )}
    >
      {children}
    </div>
  )
}
