import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type HighlightProps = ComponentProps<'span'>

export default function Highlight({ className, ...props }: HighlightProps) {
  return <span {...props} className={twMerge('text-cyan-400', className)} />
}
