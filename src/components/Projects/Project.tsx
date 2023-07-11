import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import NavLink from '../Navigation/NavLink'

interface ProjectProps {
  title: string
  src: StaticImageData
  alt: string
  link: string
  techList: StaticImageData[]
  children: ReactNode
  repo?: string
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
            w-fit text-2xl font-bold leading-none tracking-wider 
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
                'max-w-[16rem]': techShrink === true,
              })}
            >
              {techList.map((tech) => (
                <>
                  <Image
                    src={tech}
                    alt={''}
                    className="drop-shadow-custom-text"
                  />
                </>
              ))}
            </div>
            <div
              className="
                mt-2 flex items-center gap-4
              "
            >
              <NavLink
                href={link}
                title={`Access ${title}`}
                className="text-sm text-cyan-400 underline underline-offset-2"
                newTab
              />
              {repo && (
                <NavLink
                  href={repo}
                  title="Github"
                  className="text-sm text-cyan-400 underline underline-offset-2"
                  newTab
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
