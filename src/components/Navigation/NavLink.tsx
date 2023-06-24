'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent, ReactNode } from 'react'

interface NavLinkProps {
  title: string
  href: string
  newTab?: boolean
  className?: string
  children?: ReactNode
}

export default function NavLink({
  title,
  href,
  newTab,
  className,
  children,
}: NavLinkProps) {
  const path = usePathname()
  const routeSelected = path === href

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace(/.*#/, '')
    const section = document.getElementById(targetId)
    section?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <li>
      {newTab ? (
        <Link href={href} legacyBehavior prefetch>
          <a
            className={clsx(
              'select-none font-semibold leading-none outline-none transition-all',
              {
                'text-cyan-400': routeSelected === true,
                'text-gray-300 hover:text-cyan-500 focus:text-cyan-500':
                  routeSelected === false,
              },
              className,
            )}
            target="_blank"
            href={href}
            rel="noreferrer"
          >
            {children}
            {title}
          </a>
        </Link>
      ) : (
        <Link href={href} onClick={handleScroll}>
          <button
            className={clsx(
              'select-none font-semibold leading-none outline-none transition-all',
              'text-gray-300 hover:text-cyan-500 focus:text-cyan-500',
              className,
            )}
          >
            {children}
            {title}
          </button>
        </Link>
      )}
    </li>
  )
}
