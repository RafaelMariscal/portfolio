'use client'

import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { useSelectedProject } from '@/contexts/SelectedProjectContext/hook'
import { ProjectsType } from '@/contexts/SelectedProjectContext'

interface BootcampProjectImageProps {
  name: ProjectsType
  src: StaticImageData
  alt: string
  className?: string
}
export default function BootcampProjectImage({
  name,
  src,
  alt,
  className,
}: BootcampProjectImageProps) {
  const { projectSelected } = useSelectedProject()

  const isSelected = name === projectSelected

  const classNameIfNotSelected = `h-full ${className}`

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={twMerge(
          clsx({
            'absolute right-0 h-8 w-[37.125%] overflow-hidden':
              isSelected === true,
            'invisible h-0 w-0': isSelected === false,
          }),
        )}
      >
        <Link
          href={''}
          target="_blank"
          className={clsx(
            '-z-10 flex h-40 w-full -translate-y-[6rem] rotate-[-20deg]',
            'items-center justify-center bg-cyan-400 outline-none',
            'text-sm font-bold text-cyan-700 underline',
            'hover:bg-cyan-500 hover:text-cyan-800',
            'focus:bg-cyan-500 focus:text-cyan-800',
          )}
        >
          <span className="mr-3 translate-y-[2rem] rotate-[20deg]">
            Access this Project
          </span>
        </Link>
      </div>
      <Image
        src={src}
        alt={alt}
        className={twMerge(
          'object-cover',
          clsx(isSelected === false && classNameIfNotSelected),
        )}
        quality={100}
      />
    </div>
  )
}
