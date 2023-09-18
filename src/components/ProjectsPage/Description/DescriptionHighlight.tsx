import { ComponentProps } from 'react'

type DescriptionHighlightProps = ComponentProps<'strong'>

export default function DescriptionHighlight({
  className,
  ...props
}: DescriptionHighlightProps) {
  return <strong {...props} />
}
