import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ListItemProps = ComponentProps<'li'>

export default function ListItem({ className, ...props }: ListItemProps) {
  return (
    <li
      {...props}
      className={twMerge(
        'relative ml-7',
        'before:absolute before:-left-4 before:top-[.6em]',
        'before:h-1 before:w-1 before:rounded-full before:bg-current',
        className,
      )}
    />
  )
}
