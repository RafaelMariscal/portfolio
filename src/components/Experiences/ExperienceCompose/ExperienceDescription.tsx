import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ExperienceDescriptionProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export default function ExperienceDescription({
  children,
  ...rest
}: ExperienceDescriptionProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'font-semibold text-gray-300 drop-shadow-custom-text',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
