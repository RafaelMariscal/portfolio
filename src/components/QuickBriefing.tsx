import NavLink from './Navigation/NavLink'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function QuickBriefing({ lang }: { lang: Locale }) {
  const { homeBriefing } = getDictionaryServerOnly(lang)
  const { link, ...paragraphs } = homeBriefing
  const paragraphsKeys = Object.keys(paragraphs) as (keyof typeof paragraphs)[]

  return (
    <article
      id="briefing"
      className="
        mb-16 flex w-full max-w-[30.625rem] flex-col gap-4 pt-8
        font-semibold text-gray-200 drop-shadow-custom-text
        
        max-md:mx-auto max-md:mb-12 max-md:pt-8 max-tablets-xs:max-w-md
        
        max-phones:px-4 max-phones:pt-2  
        
        [&_strong]:font-semibold [&_strong]:text-cyan-400
        [&_strong]:underline [&_strong]:underline-offset-2
        "
    >
      {paragraphsKeys.map((key) => {
        const currParagraph = paragraphs[key]
        return (
          <p key={key}>
            {currParagraph.map((text, index) => {
              if (index % 2) {
                return <strong key={text + index}>{text}</strong>
              } else {
                return text
              }
            })}
          </p>
        )
      })}

      <NavLink
        href="#experience"
        title={link}
        scroll
        className="mt-2 text-gray-200 underline underline-offset-2 max-tablets:focus:text-gray-200"
      />
    </article>
  )
}
