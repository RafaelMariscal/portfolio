import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectDescriptionTechsProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}
export default function ProjectDescriptionTechs({
  children,
  ...rest
}: ProjectDescriptionTechsProps) {
  return (
    <div {...rest} className={twMerge('w-full max-w-max', rest.className)}>
      {children}
    </div>
  )
}
