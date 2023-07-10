import { HTMLProps, ReactNode } from 'react'

interface ExperienceRootProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export default function ExperienceRoot({
  children,
  ...rest
}: ExperienceRootProps) {
  return <div {...rest}>{children}</div>
}
