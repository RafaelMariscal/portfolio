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
        'mx-3 w-fit text-justify font-bold',
        'leading-none text-cyan-500 drop-shadow-sm',
        'transition-opacity duration-700',
        clsx({
          'opacity-100': isSelected === true,
          'invisible h-0 opacity-0': isSelected === false,
        }),
        className,
      )}
    >
      {description}
      {children}
    </p>
  )
}
