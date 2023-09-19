import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TitleProps = ComponentProps<'h3'>

export default function Title({ className, ...props }: TitleProps) {
  return (
    <h3
      {...props}
      className={twMerge('text-2xl font-semibold text-gray-100', className)}
    />
  )
}
