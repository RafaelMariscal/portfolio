import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionTableItemHeaderProps = ComponentProps<'span'>

export default function DescriptionTableItemHeader({
  className,
  ...props
}: DescriptionTableItemHeaderProps) {
  return (
    <span
      {...props}
      className={twMerge(
        'text-sm text-gray-200',
        'max-tablets-xs:text-lg',
        className,
      )}
    >
      {props.children}:
    </span>
  )
}
