import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps extends LinkProps {
  children?: ReactNode
  text: string
}

export default function CustomLink({
  children,
  text,
  ...props
}: CustomLinkProps) {
  return (
    <Link className="text-xs font-semibold" {...props}>
      {children}
      {text}
    </Link>
  )
}
