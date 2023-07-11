import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectDescriptionTextProps extends HTMLProps<HTMLDivElement> {
  text: string
  children?: ReactNode
}
export default function ProjectDescriptionText({
  text,
  children,
  ...rest
}: ProjectDescriptionTextProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'max-w-4xl text-justify font-medium drop-shadow-custom-text',
        rest.className,
      )}
    >
      <p>{text}</p>
      {children}
    </div>
  )
}
