import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const printParagraphs = (p: string[][], isFirst?: boolean) => {
  return p.map((list, i) => {
    return (
      <Paragraph
        key={'text' + list[0] + i}
        className={twMerge('mt-4', clsx({ 'mt-6': i === 0 && isFirst }))}
      >
        {list.map((text, index) => {
          return index % 2 ? (
            <Highlight key={text + index}>{text}</Highlight>
          ) : (
            text
          )
        })}
      </Paragraph>
    )
  })
}
