'use client'

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps extends LinkProps {
  text: string
  className?: string
  copy?: boolean
  children?: ReactNode
}

export default function CustomLink({
  children,
  text,
  className,
  copy = false,
  ...props
}: CustomLinkProps) {
  function handleClick() {
    if (copy) {
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <>
      {copy ? (
        <button
          className={clsx(
            'flex w-fit items-center justify-between gap-[0.375rem] text-xs font-semibold',
            'tracking-wider transition-all duration-100 hover:text-cyan-400',
            '[&_*]:transition-all [&_*]:duration-100 [&_*]:hover:fill-cyan-400',
            'outline-none focus:text-cyan-400 [&_*]:focus:fill-cyan-400',
            'drop-shadow-custom-text',
            className,
          )}
          onClick={handleClick}
        >
          {children}
          {text}
        </button>
      ) : (
        <Link {...props} legacyBehavior>
          <a
            className={clsx(
              'flex w-fit items-center justify-between gap-[0.375rem]',
              'text-xs font-semibold transition-all duration-100',
              'outline-none drop-shadow-custom-text',
              'hover:text-cyan-400 focus:text-cyan-400',
              '[&_*]:transition-all [&_*]:duration-100 ',
              '[&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-400',
              className,
            )}
            target="_blank"
          >
            {children}
            {text}
          </a>
        </Link>
      )}
    </>
  )
}
