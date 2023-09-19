import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionTitleProps = ComponentProps<'h2'>

export default function SectionTitle({
  className,
  ...props
}: SectionTitleProps) {
  return (
    <h2
      {...props}
      className={twMerge(
        'text-[2.5rem] font-bold uppercase tracking-wide text-gray-100',
        '[&_span]:text-cyan-500',
        className,
      )}
    />
  )
}
