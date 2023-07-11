import Image, { StaticImageData } from 'next/image'
import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectDescriptionTechsListProps extends HTMLProps<HTMLDivElement> {
  techsList: StaticImageData[]
}
export default function ProjectDescriptionTechsList({
  techsList,
  ...rest
}: ProjectDescriptionTechsListProps) {
  return (
    <div
      {...rest}
      className={twMerge('flex flex-wrap items-center gap-2', rest.className)}
    >
      {techsList.map((tech) => (
        <>
          <Image
            src={tech}
            alt={''}
            quality={100}
            className="drop-shadow-custom-text"
          />
        </>
      ))}
    </div>
  )
}
