'use client'

import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { useSelectedProject } from '@/contexts/SelectedProjectContext/hook'
import { ProjectsType } from '@/contexts/SelectedProjectContext'
import { useEffect, useState } from 'react'

interface BootcampProjectImageProps {
  src: StaticImageData
  alt: string
  accessLink: string
  name?: ProjectsType
  className?: string
}
export default function BootcampProjectImage({
  src,
  alt,
  accessLink,
  name,
  className,
}: BootcampProjectImageProps) {
  const [screenDimentions, setScreenDimentions] = useState(50000)

  const { projectSelected } = useSelectedProject()

  useEffect(() => {
    function handleScreenResize() {
      setScreenDimentions(window.innerWidth)
    }
    window.addEventListener('resize', handleScreenResize)
    return () => window.removeEventListener('resize', handleScreenResize)
  }, [])

  const isSelected = name === projectSelected || screenDimentions < 768

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
          'max-md:visible max-md:absolute max-md:right-0',
          'max-md:h-8 max-md:w-[37.125%] max-md:overflow-hidden',
        )}
      >
        <Link
          href={accessLink}
          target="_blank"
          className={clsx(
            '-z-10 flex h-40 w-full -translate-y-[6rem] rotate-[-20deg]',
            'items-center justify-center bg-cyan-400 outline-none',
            'text-sm font-bold text-cyan-700 underline',
            'transition-colors duration-200',
            'hover:bg-cyan-500 hover:text-cyan-800',
            'focus:bg-cyan-500 focus:text-cyan-800',
          )}
        >
          <span className="mr-3 translate-y-[2rem] rotate-[20deg] select-none whitespace-nowrap">
            Access here
          </span>
        </Link>
      </div>

      <Image
        src={src}
        alt={alt}
        quality={100}
        className={twMerge(
          'select-none object-cover',
          clsx(isSelected === false && classNameIfNotSelected),
        )}
      />
    </div>
  )
}
