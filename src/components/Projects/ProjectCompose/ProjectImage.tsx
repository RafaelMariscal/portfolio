import NavLink from '@/components/Navigation/NavLink'
import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

interface ProjectImageProps {
  src: StaticImageData
  alt: string
  link: string
  priority?: boolean
  className?: string
}

export default function ProjectImage({
  src,
  alt,
  link,
  className,
}: ProjectImageProps) {
  return (
    <div
      className={twMerge(
        'relative flex h-[80vh] max-h-fit w-full select-none overflow-hidden bg-cyan-700 shadow-custom-project max-tablets:h-[50vh]',
      )}
    >
      <NavLink
        href={link}
        title=""
        newTab
        className="w-full hover:scale-[1.03] focus:scale-[1.03]"
      >
        <Image
          src={src}
          alt={alt}
          quality={100}
          className={twMerge(
            'z-10 h-full w-full object-cover transition-all duration-300',
            className,
          )}
          placeholder="blur"
        />
      </NavLink>
    </div>
  )
}
