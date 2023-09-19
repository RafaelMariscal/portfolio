import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SeparatorProps = ComponentProps<'div'>

export default function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      {...props}
      className={twMerge('flex h-3 w-full max-w-[8.5rem] items-end', className)}
    >
      <hr className="h-[.125rem] w-14 bg-gray-100" />
    </div>
  )
}
