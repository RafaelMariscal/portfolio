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
        text-xs font-semibold flex items-center justify-between w-fit gap-[0.375rem]
        hover:text-cyan-400 transition-all duration-100 tracking-wider
        [&_*]:hover:fill-cyan-400 [&_*]:transition-all [&_*]:duration-100
      "
      {...props}
    >
      {children}
      {text}
    </Link>
  )
}
