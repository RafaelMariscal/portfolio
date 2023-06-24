import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import CustomLink from '../CustomLink'

interface ProjectProps {
  title: string
  src: StaticImageData
  alt: string
  link: string
  repo: string
  techList: StaticImageData[]
  children: ReactNode
  className?: string
  techShrink?: boolean
}

export default function Project({
  title,
  src,
  alt,
  link,
  repo,
  techList,
  children,
  className,
  techShrink = false,
}: ProjectProps) {
  return (
    <>
      <div className="flex h-[80vh] overflow-hidden bg-gray-300 shadow-custom-project">
        <Image
          src={src}
          alt={alt}
          quality={100}
          className={clsx(
            'object-cover transition-all duration-300 hover:scale-[1.03]',
            className,
          )}
        />
      </div>
      <div className="mx-auto mb-12 mt-6 w-full max-w-7xl px-3">
        <h2
          className="
            w-fit text-2xl font-semibold leading-none 
            underline underline-offset-4 drop-shadow-custom-text
          "
        >
          {title}
        </h2>
        <div className="mt-2 flex justify-between gap-6">
          {children}
          <div className="w-full max-w-max">
            <h3
              className="
                mb-1 text-sm font-semibold tracking-wide underline underline-offset-2 drop-shadow-custom-text
              "
            >
              Main Techs:
            </h3>
            <div
              className={clsx('flex flex-wrap items-center gap-2', {
                'max-w-[18rem]': techShrink === true,
              })}
            >
              {techList.map((tech) => (
                <>
                  <Image
                    src={tech}
                    alt=""
                    className="drop-shadow-custom-text"
                  />
                </>
              ))}
            </div>
            <div
              className="
                mt-2 flex items-center justify-between gap-4 text-sm
              "
            >
              <CustomLink
                href={link}
                text={`Access ${title}`}
                legacyBehavior
                className="
                  text-[0.875rem] tracking-normal text-cyan-400 underline 
                  underline-offset-2 hover:text-cyan-500
                "
              />
              <CustomLink
                href={repo}
                text={`Github`}
                legacyBehavior
                className="
                  text-[0.875rem] tracking-normal text-cyan-400 underline 
                  underline-offset-2 hover:text-cyan-500
                "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
