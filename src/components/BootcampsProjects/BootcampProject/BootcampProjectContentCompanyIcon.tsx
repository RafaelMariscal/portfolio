import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'

type customClassName = {
  box: string
  img: string
}

type classNameProps = string | customClassName

interface BootcampProjectContentCompanyIconProps {
  icon: StaticImageData
  className?: classNameProps
}

export default function BootcampProjectContentCompanyIcon({
  icon,
  className,
}: BootcampProjectContentCompanyIconProps) {
  return (
    <div
      className={twMerge(
        'grid h-6 w-6 place-items-center bg-cyan-600 shadow-md',
        typeof className === 'object' && className.box,
      )}
    >
      <Image
        src={icon}
        alt="company related icon"
        quality={100}
        className={twMerge(
          'drop-shadow-custom-text',
          typeof className === 'object' ? className.img : className,
        )}
      />
    </div>
  )
}
