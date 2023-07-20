import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectRootProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export default function ProjectRoot({ children, ...rest }: ProjectRootProps) {
  return (
    <div
      {...rest}
      id="projects"
      className={twMerge(
        'flex w-11/12 flex-col items-center',
        'min-w-[1256px] max-w-[1600px]',
        'max-[1256px]:w-full max-[1256px]:min-w-0',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
