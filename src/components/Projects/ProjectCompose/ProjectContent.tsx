import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectContentProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}
export default function ProjectContent({
  children,
  ...rest
}: ProjectContentProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'mx-auto mb-12 mt-6 w-full max-w-7xl px-3',
        'max-md:max-w-lg',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
