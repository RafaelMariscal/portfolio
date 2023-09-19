import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ProjectBriefingContentProps = ComponentProps<'div'>

export default function ProjectBriefingContent({
  className,
  ...props
}: ProjectBriefingContentProps) {
  return (
    <div {...props} className={twMerge('flex flex-col gap-3', className)} />
  )
}
