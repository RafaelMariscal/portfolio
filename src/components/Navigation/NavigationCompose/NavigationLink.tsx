import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type NavigationLinkProps = ComponentProps<'li'>

export default function NavigationLink({
  className,
  ...props
}: NavigationLinkProps) {
  return <li {...props} className={twMerge('leading-none', className)} />
}
