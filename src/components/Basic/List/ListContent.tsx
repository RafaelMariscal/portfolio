import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ListContentProps = ComponentProps<'ul'>

export default function ListContent({ className, ...props }: ListContentProps) {
  return (
    <ul
      {...props}
      className={twMerge('font-medium text-gray-100', className)}
    />
  )
}
