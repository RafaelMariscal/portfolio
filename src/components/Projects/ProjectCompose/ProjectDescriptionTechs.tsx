import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectDescriptionTechsProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}
export default function ProjectDescriptionTechs({
  children,
  className,
  ...rest
}: ProjectDescriptionTechsProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'w-full max-w-max max-tablets-sm:max-w-none',
        'max-tablets-sm:flex max-tablets-sm:justify-between',
        'max-tablets-sm:gap-9 max-tablets-xs:gap-6',
        'max-phones:flex-col max-phones:gap-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
