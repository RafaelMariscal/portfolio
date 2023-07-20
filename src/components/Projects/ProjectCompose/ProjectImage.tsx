import Image, { StaticImageData } from 'next/image'
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
  priority = false,
  className,
}: ProjectImageProps) {
  return (
    <div className="flex h-[80vh] overflow-hidden bg-gray-300 shadow-custom-project max-tablets:h-[50vh]">
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={100}
        className={twMerge(
          'object-cover transition-all duration-300 hover:scale-[1.03]',
          className,
        )}
      />
    </div>
  )
}
