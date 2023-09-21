import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionTableItemProps = ComponentProps<'div'>

export default function DescriptionTableItem({
  className,
  ...props
}: DescriptionTableItemProps) {
  return (
    <div
      {...props}
      className={twMerge('grid w-fit grid-cols-1 grid-rows-2', className)}
    />
  )
}
