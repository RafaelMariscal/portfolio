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
        'flex flex-col items-center',
        'max-w-screen-[1600px] w-11/12 min-w-[1256px]',
        'max-[1256px]:w-full max-[1256px]:min-w-0',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
