import Highlight from '@/components/Basic/Highlight'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image from 'next/image'
import IbLogoSrc from '@/assets/projects/inboxWebsite/ib-logo.svg'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'
import { printParagraphs } from '@/utils/printParagraphs'

function IbDesignProcess({ lang }: { lang: Locale }) {
  const {
    ibProjectPage: {
      designProcess: {
        sectionTitle,
        article: { p1, p2, p3, p4 },
      },
    },
  } = getDictionaryServerOnly(lang)

  const paragraphs = [p1, p2, p3, p4]

  return (
    <section id="designProcess" className="pt-14">
      <div
        className="
          mx-auto w-full max-w-screen-article
          max-tablets:px-3 max-md:max-w-lg
        "
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
        <Image
          src={IbLogoSrc}
          alt="Inbox Logo"
          quality={100}
          className="
            float-left mr-4 mt-6 h-auto w-full max-w-[250px]
            max-md:hidden
          "
        />
        {printParagraphs(paragraphs, true)}
      </div>
    </section>
  )
}
export default IbDesignProcess
