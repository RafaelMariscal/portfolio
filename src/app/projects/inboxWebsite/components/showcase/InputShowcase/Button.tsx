'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonRootProps = ComponentProps<'button'> & {
  variant: 'light' | 'eden' | 'stroke' | 'danger'
}

export default function Button({
  variant,
  children,
  className,
  ...rest
}: ButtonRootProps) {
  return (
    <button
      {...rest}
      data-variant={variant}
      className={twMerge(
        'relative inline-block h-9 select-none bg-[#b3c126] shadow-md shadow-dark/20 outline-none',
        'before:block before:h-2 before:w-2 before:bg-[#b3c126]',
        'before:absolute before:left-0 before:top-0 ',
        'before:origin-top-left before:-rotate-45 before:scale-0',
        'before:transition-all before:duration-150 before:hover:scale-100',
        'after:block after:h-2 after:w-2 after:bg-[#b3c126] ',
        'after:absolute after:bottom-0 after:right-0 ',
        'after:origin-bottom-right after:rotate-45 after:scale-0',
        'after:transition-all after:duration-150 after:hover:scale-100',
        '[&_div]:hover:-translate-y-[.375rem] [&_div]:hover:translate-x-[.375rem]',
        '[&_div]:hover:bg-[#0f5e46] [&_div]:hover:text-[#f6e68f]',
        '[&_div]:focus:bg-[#0f5e46] [&_div]:focus:text-[#f6e68f]',
        '[&_*]:hover:fill-[#f6e68f] [&_*]:focus:fill-[#f6e68f]',
        '[&_*]:hover:border-[#b3c126] [&_*]:focus:border-[#b3c126]',
        'data-[variant=danger]:bg-[#fdc5b3]',
        'data-[variant=danger]:before:bg-[#fdc5b3]',
        'data-[variant=danger]:after:bg-[#fdc5b3]',
        'data-[variant=danger]:[&_div]:hover:bg-[#de3700]',
        'data-[variant=danger]:[&_div]:hover:text-light',
        'data-[variant=danger]:[&_div]:focus:text-light',
        'data-[variant=danger]:[&_*]:hover:border-[#f97d54]',
        'data-[variant=danger]:[&_*]:focus:border-[#f97d54]',
        className,
      )}
    >
      <div
        data-variant={variant}
        className={twMerge(
          'flex items-center justify-center gap-2',
          'h-9 px-4 font-semibold leading-none tracking-wide',
          'relative z-10 transition-all duration-150',
          'data-[variant=eden]:bg-[#0f5e46] data-[variant=eden]:text-[#f6e68f]',
          'data-[variant=light]:bg-[#ebf6f3] data-[variant=light]:text-[#0f5e46]',
          'data-[variant=stroke]:bg-[#0f5e46] data-[variant=stroke]:text-[#ebf6f3]',
          'data-[variant=stroke]:border data-[variant=stroke]:border-[#ebf6f3]',
          'data-[variant=danger]:bg-[#de3700] data-[variant=danger]:text-light',
          'data-[variant=danger]:border data-[variant=danger]:border-light',
        )}
      >
        {children}
      </div>
    </button>
  )
}
