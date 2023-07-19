import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ToastMessageRootProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export default function ToastMessageRoot({
  children,
  className,
  ...rest
}: ToastMessageRootProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'fixed -right-[50%] top-4 translate-x-1 bg-cyan-400 px-3 py-1',
        'border border-cyan-700 border-opacity-50 shadow-custom-project',

        className,
      )}
    >
      {children}
    </div>
  )
}
