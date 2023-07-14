'use client'

import { ProjectsType } from '@/contexts/SelectedProjectContext'
import { useSelectedProject } from '@/contexts/SelectedProjectContext/hook'
import { ReactNode, Children, isValidElement, cloneElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface BootcampProjectCardProps {
  name: ProjectsType
  children: ReactNode
  className?: string
}
export default function BootcampProjectCard({
  name,
  children,
  className,
}: BootcampProjectCardProps) {
  const { projectSelected, setProjectSelected } = useSelectedProject()

  const isSelected = name === projectSelected

  const finalWidthClass = isSelected ? 'w-[28.75rem]' : 'w-20'

  return (
    <button
      onClick={() => setProjectSelected(name)}
      onMouseEnter={() => setProjectSelected(name)}
      onFocus={() => setProjectSelected(name)}
      className={twMerge(
        'h-[30rem] overflow-hidden border border-cyan-600 shadow-custom-project',
        'cursor-normal outline-none transition-[width]',
        className,
        finalWidthClass,
      )}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null
        return cloneElement(child, {
          ...child.props,
          name,
        })
      })}
    </button>
  )
}
