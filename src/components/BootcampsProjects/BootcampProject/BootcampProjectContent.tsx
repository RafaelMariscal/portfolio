'use client'

import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useSelectedProject } from '@/contexts/SelectedProjectContext/hook'
import {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useState,
  useEffect,
} from 'react'
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
  const [screenDimentions, setScreenDimentions] = useState(window.innerWidth)

  const { projectSelected } = useSelectedProject()
  const isSelected = name === projectSelected || screenDimentions < 768

  useEffect(() => {
    function handleScreenResize() {
      setScreenDimentions(window.innerWidth)
    }
    window.addEventListener('resize', handleScreenResize)
    return () => window.removeEventListener('resize', handleScreenResize)
  }, [])

  return (
    <div
      className={twMerge(
        'md:invisible md:h-0 md:w-0',
        clsx({
          'flex flex-col justify-between bg-gray-100 md:visible md:h-[9rem] md:w-auto':
            isSelected === true,
        }),
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
    </div>
  )
}
