'use client'

import {
  SelectedProjectContext,
  ProjectsType,
} from '@/contexts/SelectedProjectContext'
import { ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface BootcampProjectRootProps {
  children: ReactNode
  className?: string
}
export default function BootcampProjectRoot({
  children,
  className,
}: BootcampProjectRootProps) {
  const [projectSelected, setProjectSelected] =
    useState<ProjectsType>('nextBlog')
  return (
    <div
      className={twMerge(
        'flex min-w-[46rem] gap-3 max-tablets-sm:gap-5 max-md:min-w-0',
        'max-md:flex-col max-md:items-center',
        className,
      )}
    >
      <SelectedProjectContext.Provider
        value={{ projectSelected, setProjectSelected }}
      >
        {children}
      </SelectedProjectContext.Provider>
    </div>
  )
}
