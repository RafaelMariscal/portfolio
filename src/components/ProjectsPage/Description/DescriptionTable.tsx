import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionTableProps = ComponentProps<'div'>

export default function DescriptionTable({
  className,
  ...props
}: DescriptionTableProps) {
  return <div {...props} className={twMerge('mt-4 flex gap-12', className)} />
}
