'use client'
import { useSelectedProject } from '@/contexts/SelectedProjectContext/hook'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BootcampProjectContentDescriptionProps {
  description: string
  name?: string
  children?: ReactNode
  className?: string
}
export default function BootcampProjectContentDescription({
  description,
  name,
  children,
  className,
}: BootcampProjectContentDescriptionProps) {
  const { projectSelected } = useSelectedProject()
  const isSelected = name === projectSelected

  return (
    <p
      className={twMerge(
        'mx-3 my-2 w-[27rem] text-justify font-bold',
        'leading-none text-cyan-500 drop-shadow-sm',
        'transition-opacity duration-[625ms]',
        clsx({
          'md:opacity-100': isSelected === true,
          'md:invisible md:h-0 md:opacity-0': isSelected === false,
        }),
        'max-phones:mx-0 max-phones:w-full max-phones:px-3',
        className,
      )}
    >
      {description}
      {children}
    </p>
  )
}
