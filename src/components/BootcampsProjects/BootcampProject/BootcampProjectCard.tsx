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

  const finalWidthClass = isSelected
    ? 'h-full max-h-[30rem]  w-[28.75rem] max-md:w-full max-md:max-w-[28.75rem]'
    : 'md:h-[30rem] w-20 max-md:w-full max-md:max-w-[28.75rem]'

  return (
    <button
      onClick={() => setProjectSelected(name)}
      onMouseEnter={() => setProjectSelected(name)}
      onFocus={() => setProjectSelected(name)}
      className={twMerge(
        'overflow-hidden border border-cyan-600 shadow-custom-project',
        'cursor-default outline-none transition-[width] duration-300',
        finalWidthClass,
        className,
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
