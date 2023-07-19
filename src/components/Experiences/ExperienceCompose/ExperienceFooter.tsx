import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ExperienceFooterProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export default function ExperienceFooter({
  children,
  ...rest
}: ExperienceFooterProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'text-sm font-semibold text-cyan-400 [&_*]:fill-cyan-400',
        'drop-shadow-custom-text',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
