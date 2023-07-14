'use client'

import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useSelectedProject } from '@/contexts/SelectedProjectContext/hook'
import { ReactNode } from 'react'
import { ProjectsType } from '@/contexts/SelectedProjectContext'

interface BootcampProjectContentProps {
  children: ReactNode
  name?: ProjectsType
  className?: string
}
export default function BootcampProjectContent({
  name,
  children,
  className,
}: BootcampProjectContentProps) {
  const { projectSelected } = useSelectedProject()
  const isSelected = name === projectSelected
  return (
    <div
      className={twMerge(
        clsx({
          'flex h-[8.75rem] flex-col justify-between bg-gray-100':
            isSelected === true,
          'invisible h-0 w-0': isSelected === false,
        }),
        className,
      )}
    >
      {children}
    </div>
  )
}
