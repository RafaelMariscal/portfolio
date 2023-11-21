import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import NavLink from '@/components/Navigation/NavLink'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'
import { printParagraphs } from '@/utils/printParagraphs'

function IbSoftwareDevelopment({ lang }: { lang: Locale }) {
  const {
    ibProjectPage: {
      softwareDevelopment: { sectionTitle, p7, ...rest },
    },
  } = getDictionaryServerOnly(lang)

  const paragraphsKeys = Object.keys(rest) as (keyof typeof rest)[]
  const paragraphs = paragraphsKeys.map((key) => rest[key])

  return (
    <section id="softwareDevelopment" className="pt-14">
      <div
        className="          
          mx-auto w-full max-w-screen-article
          max-tablets:px-3 max-md:max-w-lg
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

        {printParagraphs(paragraphs, true)}

        <Paragraph className="mt-4">
          {p7.map((text, index) => {
            if (index % 2) {
              return (
                <NavLink
                  key={text + index}
                  href="https://www.mclaren.com/racing/formula-1/"
                  title={text}
                  newTab
                  className="font-medium text-cyan-400 underline underline-offset-2"
                />
              )
            } else {
              return text
            }
          })}
        </Paragraph>
      </div>
    </section>
  )
}
export default IbSoftwareDevelopment
