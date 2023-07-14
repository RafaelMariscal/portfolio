import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BootcampProjectContentDescriptionProps {
  description: string
  children?: ReactNode
  className?: string
}
export default function BootcampProjectContentDescription({
  description,
  children,
  className,
}: BootcampProjectContentDescriptionProps) {
  return (
    <p
      className={twMerge(
        'mt-2 w-full max-w-[23.75rem] text-justify font-bold',
        'leading-none text-cyan-500 drop-shadow-sm',
        className,
      )}
    >
      {description}
      {children}
    </p>
  )
}
