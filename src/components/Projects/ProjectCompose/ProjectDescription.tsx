import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectDescriptionProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}
export default function ProjectDescription({
  children,
  ...rest
}: ProjectDescriptionProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'mt-2 flex justify-between gap-6',
        'max-tablets-sm:flex-col',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
