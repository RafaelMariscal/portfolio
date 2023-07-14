import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type customClassName = {
  box: string
  img: string
}

type classNameProps = string | customClassName

interface BootcampProjectContentCompanyIconProps {
  icon: StaticImageData
  link: string
  className?: classNameProps
}

export default function BootcampProjectContentCompanyIcon({
  icon,
  link,
  className,
}: BootcampProjectContentCompanyIconProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className={twMerge(
        'grid h-6 w-6 place-items-center bg-cyan-600 shadow-md',
        'outline-none hover:bg-cyan-500 focus:bg-cyan-500',
        typeof className === 'object' && className.box,
      )}
    >
      <Image
        src={icon}
        alt="company related icon"
        quality={100}
        className={twMerge(
          'select-none drop-shadow-custom-text',
          typeof className === 'object' ? className.img : className,
        )}
      />
    </Link>
  )
}
