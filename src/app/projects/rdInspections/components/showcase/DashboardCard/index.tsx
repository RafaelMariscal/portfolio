import clsx from 'clsx'
import { HTMLProps, ReactNode } from 'react'

interface DashboardCardProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export default function DashboardCard({
  className,
  children,
  ...props
}: DashboardCardProps) {
  return (
    <div
      className={clsx(
        'h-full w-full overflow-hidden rounded-xl bg-light',
        'bg-opacity-70 shadow-custom-md backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
