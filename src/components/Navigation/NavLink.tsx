'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps extends LinkProps {
  title: string
  newTab?: boolean
  copy?: boolean
  className?: string
  children?: ReactNode
}

export default function NavLink({
  title,
  href,
  className,
  children,
  newTab = false,
  copy = false,
  scroll = false,
  ...rest
}: NavLinkProps) {
  const path = usePathname()
  const routeSelected = path === href

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (newTab) return undefined
    if (copy) {
      e.preventDefault()
      return navigator.clipboard.writeText(title)
    } else if (scroll) {
      e.preventDefault()
      const targetId = href.toString().replace(/.*#/, '')
      const section = document.getElementById(targetId)
      section?.scrollIntoView({
        behavior: 'smooth',
      })
    }
    return undefined
  }

  return (
    <Link
      {...rest}
      href={href}
      target={newTab ? '_blank' : undefined}
      onClick={handleClick}
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
