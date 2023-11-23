import Image from 'next/image'
import JpImageSrc from '@/assets/projects/jackedPlanner/jp-project.png'
import JpNavigation from './components/JpNavigation'
import JpProjectDescription from './components/JpProjectDescription'
import JpProjectBriefing from './components/JpProjectBriefing'
import SectionTitle from '@/components/Basic/SectionTitle'
import Highlight from '@/components/Basic/Highlight'
import JpDesignProcess from './components/JpDesignProcess'
import JpSoftwareDevelopment from './components/JpSoftwareDevelopment'
import InboxWebsiteProject from '@/components/Projects/IbWebsiteProject'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function JackedPlannerPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang as Locale
  const {
    jpProjectPage: {
      nextProject: { sectionTitle },
    },
  } = getDictionaryServerOnly(lang)

  return (
    <>
      <JpNavigation />
      <main className="flex w-full flex-col items-center justify-center">
        <h1 className="invisible h-0 w-0">Jacked Planner project page</h1>
        <Image
          src={JpImageSrc}
          alt="Jacked Planner software promo image."
          quality={100}
          className="z-10 h-full max-h-screen w-full select-none object-cover"
          placeholder="blur"
        />
        <JpProjectDescription lang={lang} />

        <article className="flex w-full flex-col items-center">
          <JpProjectBriefing lang={lang} />
          <JpDesignProcess lang={lang} />
          <JpSoftwareDevelopment lang={lang} />
        </article>
        <SectionTitle
          id="nextProject"
          className="
            mb-6 w-full max-w-screen-article px-3 pt-14
            max-md:max-w-screen-tablets-xs
          "
        >
          {sectionTitle.map((text, index) => {
            if (index % 2) {
              return (
                <Highlight key={text + index} className="ml-1">
                  {text}
                </Highlight>
              )
            } else {
              return text
            }
          })}
        </SectionTitle>
        <InboxWebsiteProject lang={lang} />
      </main>
    </>
  )
}
