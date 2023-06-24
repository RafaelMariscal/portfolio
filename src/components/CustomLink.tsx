'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps extends LinkProps {
  text: string
  className?: string
  cv?: boolean
  children?: ReactNode
}

export default function CustomLink({
  children,
  text,
  className,
  cv = false,
  legacyBehavior = false,
  ...props
}: CustomLinkProps) {
  function handleClick() {
    if (cv) {
      console.log('cv download')
    }
    navigator.clipboard.writeText(text)
  }
  return (
    <>
      {legacyBehavior ? (
        <Link legacyBehavior {...props}>
          <a
            className={clsx(
              'flex w-fit items-center justify-between gap-[0.375rem] text-xs font-semibold',
              'tracking-wider transition-all duration-100 hover:text-cyan-400',
              '[&_*]:transition-all [&_*]:duration-100 [&_*]:hover:fill-cyan-400',
              'outline-none focus:text-cyan-400 [&_*]:focus:fill-cyan-400',
              className,
            )}
            target="_blank"
            rel="noreferrer"
          >
            {children}
            {text}
          </a>
        </Link>
      ) : (
        <button
          className={clsx(
            'flex w-fit items-center justify-between gap-[0.375rem] text-xs font-semibold',
            'tracking-wider transition-all duration-100 hover:text-cyan-400',
            '[&_*]:transition-all [&_*]:duration-100 [&_*]:hover:fill-cyan-400',
            'outline-none focus:text-cyan-400 [&_*]:focus:fill-cyan-400',
            className,
          )}
          onClick={handleClick}
        >
          {children}
          {text}
        </button>
      )}
    </>
  )
}
