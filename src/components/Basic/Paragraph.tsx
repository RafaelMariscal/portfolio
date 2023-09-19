import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ParagraphProps = ComponentProps<'p'>

export default function Paragraph({ className, ...props }: ParagraphProps) {
  return (
    <p
      {...props}
      className={twMerge(
        'font-medium leading-tight tracking-[0.015rem] text-gray-200',
        className,
      )}
    />
  )
}
