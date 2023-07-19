import Image from 'next/image'
import { ImgHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SkillProps extends ImgHTMLAttributes<HTMLImageElement> {
  skillName: string
  children?: ReactNode
}

export default function Skill({
  skillName,
  children,
  className,
  ...props
}: SkillProps) {
  return (
    <div
      className={twMerge(
        'flex items-center gap-[0.375rem] font-semibold drop-shadow-custom-text',
        'cursor-default transition-all hover:scale-110',
        'w-[7.5rem]',
        className,
      )}
    >
      {props.src && props.alt ? (
        <>
          <Image src={props.src} alt={props.alt} quality={100} />
        </>
      ) : null}

      {skillName}
    </div>
  )
}
