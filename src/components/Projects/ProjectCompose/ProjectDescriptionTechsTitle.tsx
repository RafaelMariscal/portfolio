import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectDescriptionTechsTitleProps extends HTMLProps<HTMLDivElement> {
  title: string
}
export default function ProjectDescriptionTechsTitle({
  title,
  ...rest
}: ProjectDescriptionTechsTitleProps) {
  return (
    <h3
      {...rest}
      className={twMerge(
        'mb-1 text-sm font-semibold tracking-wide',
        'underline underline-offset-2 drop-shadow-custom-text',
        rest.className,
      )}
    >
      {title}
    </h3>
  )
}
