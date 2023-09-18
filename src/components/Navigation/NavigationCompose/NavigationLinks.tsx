import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type NavigationLinksProps = ComponentProps<'ul'>

export default function NavigationLinks({
  className,
  ...props
}: NavigationLinksProps) {
  return (
    <ul
      {...props}
      className={twMerge('flex h-full items-end gap-8 px-8', className)}
    />
  )
}
