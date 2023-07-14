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
    useState<ProjectsType>('waiterApp')
  console.log(projectSelected)
  return (
    <div className={twMerge('flex gap-3', className)}>
      <SelectedProjectContext.Provider
        value={{ projectSelected, setProjectSelected }}
      >
        {children}
      </SelectedProjectContext.Provider>
    </div>
  )
}
