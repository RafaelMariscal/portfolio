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
    <Link
      className="
        flex w-fit items-center justify-between gap-[0.375rem] text-xs font-semibold
        tracking-wider transition-all duration-100 hover:text-cyan-400
        [&_*]:transition-all [&_*]:duration-100 [&_*]:hover:fill-cyan-400
      "
      {...props}
    >
      {children}
      {text}
    </Link>
  )
}
