import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionTableItemContentProps = ComponentProps<'span'>

export default function DescriptionTableItemContent({
  className,
  ...props
}: DescriptionTableItemContentProps) {
  return (
    <span {...props} className={twMerge('text-sm text-gray-100', className)} />
  )
}
