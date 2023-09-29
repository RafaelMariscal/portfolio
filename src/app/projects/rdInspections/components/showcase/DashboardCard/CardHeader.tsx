import { HTMLProps, ReactNode } from 'react'

interface CardHeaderProps extends HTMLProps<HTMLDivElement> {
  title: string
  sideTitle?: string
  children?: ReactNode
}

export default function CardHeader({
  title,
  sideTitle,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <header
      className="flex w-full flex-col items-center justify-between"
      {...props}
    >
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex w-full items-center gap-2">
          <h3 className="w-fit py-4 font-bold leading-none text-blue-700">
            {title}
          </h3>
          {sideTitle ? (
            <h3 className="h-fit w-fit rounded-full bg-blue-700 px-2 py-[.125rem] text-sm font-medium text-light">
              {sideTitle}
            </h3>
          ) : null}
        </div>
        {children}
      </div>
      <hr className="h-[.15625rem] w-full bg-gradient-to-r from-transparent from-5% via-blue-steel-500 to-transparent to-95%" />
    </header>
  )
}
