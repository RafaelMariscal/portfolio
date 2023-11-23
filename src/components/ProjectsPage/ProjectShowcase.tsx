import Highlight from '@/components/Basic/Highlight'
import SectionTitle from '@/components/Basic/SectionTitle'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

type ProjectShowcaseProps = ComponentProps<'div'> & {
  lang: Locale
}

export default function ProjectShowcase({
  lang,
  className,
  ...props
}: ProjectShowcaseProps) {
  const {
    rdProjectPage: {
      compShowcase: { sectionTitle },
    },
  } = getDictionaryServerOnly(lang)
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
        {sectionTitle.map((text, index) => {
          if (index % 2) {
            return (
              <Highlight key={text + index} className="block">
                {text}
              </Highlight>
            )
          } else {
            return text
          }
        })}
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
