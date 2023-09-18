import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionParagraphProps = ComponentProps<'p'>

export default function DescriptionParagraph({
  className,
  ...props
}: DescriptionParagraphProps) {
  return (
    <p
      {...props}
      className={twMerge(
        'max-w-screen-tablets-sm text-xl leading-tight',
        className,
      )}
    />
  )
}
