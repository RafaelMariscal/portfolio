'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps extends LinkProps {
  title: string
  newTab?: boolean
  className?: string
  children?: ReactNode
}

export default function NavLink({
  title,
  href,
  newTab = false,
  className,
  children,
  ...rest
}: NavLinkProps) {
  const path = usePathname()
  const routeSelected = path === href

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.toString().replace(/.*#/, '')
    const section = document.getElementById(targetId)
    section?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Link
      {...rest}
      href={href}
      target={newTab ? '_blank' : undefined}
      onClick={!newTab ? handleScroll : undefined}
      className={twMerge(
        clsx(
          'font-semibold leading-none transition-all',
          'select-none, outline-none',
          {
            'text-cyan-400': routeSelected === true,
            'text-gray-300 hover:text-cyan-500 focus:text-cyan-500':
              routeSelected === false,
          },
        ),
        className,
      )}
    >
      {children}
      {title}
    </Link>
  )
}
