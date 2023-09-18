import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type NavigationRootProps = ComponentProps<'header'>

export default function NavigationRoot({
  className,
  ...props
}: NavigationRootProps) {
  return (
    <header
      {...props}
      className={twMerge(
        'flex w-full max-w-7xl gap-3 px-3 py-6 drop-shadow-custom-text',
        'max-md:hidden',
        className,
      )}
    />
  )
}
