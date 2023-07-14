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
  return (
    <div className={twMerge('flex items-center gap-3', className)}>
      <SelectedProjectContext.Provider
        value={{ projectSelected, setProjectSelected }}
      >
        {children}
      </SelectedProjectContext.Provider>
    </div>
  )
}
