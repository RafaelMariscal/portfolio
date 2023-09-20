import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type NavigationContentProps = ComponentProps<'nav'>

export default function NavigationContent({
  className,
  ...props
}: NavigationContentProps) {
  return <nav {...props} className={twMerge(className)} />
}
