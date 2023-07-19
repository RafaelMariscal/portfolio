import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ToastMessageActionProps {
  children: ReactNode
  trigger: () => void
  className?: string
}

export default function ToastMessageAction({
  children,
  trigger,
  className,
}: ToastMessageActionProps) {
  return (
    <button
      onClick={trigger}
      className={twMerge(
        'rounded-full bg-cyan-700 shadow-custom-project outline-none',
        'absolute right-0 top-0 -translate-y-1/2 translate-x-1/2',
        "duration-200 [&_*]:transition-['background']",
        'hover:bg-cyan-400 [&_*]:hover:fill-cyan-700',
        'focus:bg-cyan-400 [&_*]:focus:fill-cyan-700',
        className,
      )}
    >
      {children}
    </button>
  )
}
