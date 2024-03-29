import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionRootProps = ComponentProps<'section'>

export default function DescriptionRoot({
  className,
  ...props
}: DescriptionRootProps) {
  return (
    <section
      {...props}
      className={twMerge(
        'px-3 pt-14 font-semibold text-gray-200',
        '[&_strong]:font-semibold [&_strong]:tracking-wide [&_strong]:text-cyan-400',
        className,
      )}
    />
  )
}
