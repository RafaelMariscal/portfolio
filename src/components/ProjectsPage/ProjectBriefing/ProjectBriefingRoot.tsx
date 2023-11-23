import Highlight from '@/components/Basic/Highlight'
import SectionTitle from '@/components/Basic/SectionTitle'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

type ProjectBriefingRootProps = ComponentProps<'section'> & {
  lang: Locale
}

export default function ProjectBriefingRoot({
  lang,
  className,
  children,
  ...props
}: ProjectBriefingRootProps) {
  const {
    rdProjectPage: {
      briefing: { sectionTitle },
    },
  } = getDictionaryServerOnly(lang)
  return (
    <section
      {...props}
      className={twMerge(
        'w-full max-w-4xl border border-cyan-700 bg-cyan-800/70 px-6 py-4 ',
        'shadow-md shadow-dark/40 backdrop-blur-sm',
        'max-md:max-w-lg',
        'max-tablets-xs:max-w-none max-tablets-xs:border-0 max-tablets-xs:px-3 max-tablets-xs:shadow-none',
        className,
      )}
    >
      <SectionTitle className="max-phones:leading-none">
        {sectionTitle.map((text, index) => {
          if (index % 2) {
            return (
              <Highlight
                key={text + index}
                className="block phones:ml-1 phones:inline"
              >
                {text}
              </Highlight>
            )
          } else {
            return text
          }
        })}
      </SectionTitle>
      <div
        className="
          mt-6 flex gap-1
        "
      >
        <div
          className="
            flex h-3 w-full max-w-[8.5rem] items-end
            max-tablets-sm:max-w-[6rem]
            max-md:hidden
          "
        >
          <hr className="h-[.125rem] w-14 bg-gray-100" />
        </div>
        {children}
      </div>
    </section>
  )
}
