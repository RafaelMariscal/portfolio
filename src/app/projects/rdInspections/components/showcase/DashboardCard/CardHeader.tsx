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
          <h3 className="w-fit py-4 text-sm font-bold leading-none text-[#151d68]">
            {title}
          </h3>
          {sideTitle ? (
            <h3 className="h-fit w-fit rounded-full bg-[#151d68] px-2 py-[.125rem] text-sm font-medium text-light">
              {sideTitle}
            </h3>
          ) : null}
        </div>
        {children}
      </div>
      <hr className="via-blue-steel-500 h-[.15625rem] w-full bg-gradient-to-r from-transparent from-5% to-transparent to-95%" />
    </header>
  )
}
