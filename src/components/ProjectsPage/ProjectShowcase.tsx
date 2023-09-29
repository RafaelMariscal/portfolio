import Highlight from '@/components/Basic/Highlight'
import SectionTitle from '@/components/Basic/SectionTitle'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ProjectShowcaseProps = ComponentProps<'div'>

export default function ProjectShowcase({
  className,
  ...props
}: ProjectShowcaseProps) {
  return (
    <section
      id="componentsShowcase"
      className="
        mx-auto w-full max-w-screen-article pt-14
        max-tablets:px-3
        max-md:max-w-lg
      "
    >
      <SectionTitle className="leading-none">
        Components<Highlight className="block">Showcase</Highlight>
      </SectionTitle>

      <div
        {...props}
        className={twMerge(
          'relative mt-4 w-full max-w-screen-article overflow-hidden rounded-lg ',
          'bg-dot-pattern px-6 pb-6 pt-4 before:absolute before:inset-0',
          'before:-z-10 before:bg-gray-100',
          className,
        )}
      />
    </section>
  )
}
