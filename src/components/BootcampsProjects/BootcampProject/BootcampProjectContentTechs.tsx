import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface BootcampProjectContentTechsProps {
  techsList: StaticImageData[]
  children?: ReactNode
  className?: string
}
export default function BootcampProjectContentTechs({
  techsList,
  children,
  className,
}: BootcampProjectContentTechsProps) {
  return (
    <div
      className={twMerge(
        'relative h-8 w-[65%] overflow-hidden bg-cyan-600 px-3',
        'before:absolute before:bottom-0 before:right-0 ',
        'before:h-10 before:w-8 before:translate-x-1/2',
        'before:rotate-[-20deg] before:bg-gray-100',
        className,
      )}
    >
      <div className="flex h-full items-center justify-between pr-4 ">
        {techsList.map((tech) => (
          <>
            <Image
              src={tech}
              alt={''}
              quality={100}
              className="h-[1.15rem] w-[1.15rem] select-none drop-shadow-custom-text phones:h-5 phones:w-5"
            />
          </>
        ))}
      </div>
      {children}
    </div>
  )
}
