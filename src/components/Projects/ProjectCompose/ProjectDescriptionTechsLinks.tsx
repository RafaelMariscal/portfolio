import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectDescriptionTechsLinksProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}
export default function ProjectDescriptionTechsLinks({
  children,
  ...rest
}: ProjectDescriptionTechsLinksProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'mt-4 flex flex-row gap-3',
        'text-sm underline underline-offset-2 [&_*]:text-cyan-400',
        'max-phones:flex-col',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
