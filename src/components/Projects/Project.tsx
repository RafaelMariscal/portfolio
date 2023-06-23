import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ProjectProps {
  title: string
  src: StaticImageData
  alt: string
  link: string
  repo: string
  techList: StaticImageData[]
  children: ReactNode
  className?: string
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
}: ProjectProps) {
  return (
    <>
      <div className="flex h-[80vh] overflow-hidden shadow-custom-project">
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
      <div className="mx-auto mt-6 w-full max-w-7xl px-3">
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
            <div className="flex flex-wrap items-center gap-2">
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
                font-semibold text-cyan-400 underline underline-offset-2
                drop-shadow-custom-text
              "
            >
              <Link
                href={link}
                className="transition-all duration-100 hover:text-cyan-500"
              >
                Access {title}
              </Link>
              <Link
                href={repo}
                className="transition-all duration-100 hover:text-cyan-500"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
