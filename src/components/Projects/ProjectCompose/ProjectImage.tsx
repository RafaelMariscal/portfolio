'use client'

import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProjectImageProps {
  src: StaticImageData
  alt: string
  priority?: boolean
  className?: string
}

export default function ProjectImage({
  src,
  alt,
  className,
}: ProjectImageProps) {
  const [isLoadComplete, setIsLoadComplete] = useState(false)
  return (
    <div
      className={twMerge(
        'relative flex h-[80vh] w-full overflow-hidden bg-cyan-700 shadow-custom-project max-tablets:h-[50vh]',
      )}
    >
      <div
        className={clsx(
          'before:absolute before:inset-0 before:-translate-x-full',
          'before:-z-0 before:animate-[shimmer_1.5s_infinite]',
          'before:bg-gradient-to-r before:from-transparent before:via-white/20',
          isLoadComplete && 'hidden',
        )}
      />
      <Image
        src={src}
        alt={alt}
        quality={100}
        className={twMerge(
          'z-10 w-full object-cover transition-all duration-300 hover:scale-[1.03]',
          className,
        )}
        onLoadingComplete={(image) => {
          setIsLoadComplete(true)
        }}
      />
    </div>
  )
}
