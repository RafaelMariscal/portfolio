import Image from 'next/image'
import RdImageSrc from '@/assets/projects/rd-inspection/rd-project.png'
import RdNavigation from './components/RdNavigation'
import RdProjectDescription from './components/RdProjectDescription'
import RdMainFeatures from './components/RdMainFeatures'
import RdProjectBriefing from './components/RdProjectBriefing'
import JackedPlannerProject from '@/components/Projects/JackedPlannerProject'
import SectionTitle from '@/components/Basic/SectionTitle'
import Highlight from '@/components/Basic/Highlight'
import RdProjectShowcase from './components/RdProjectShowcase'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function RdInspectionsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const lang = params.lang as Locale
  const {
    rdProjectPage: {
      nextProject: { sectionTitle },
    },
  } = getDictionaryServerOnly(lang)
  return (
    <>
      <RdNavigation />
      <main className="flex w-full flex-col items-center justify-center">
        <h1 className="invisible h-0 w-0">RD Inspections project page</h1>
        <Image
          src={RdImageSrc}
          alt="Rd inspections software promo image."
          quality={100}
          className="z-10 h-full max-h-screen w-full select-none object-cover"
          placeholder="blur"
        />
        <RdProjectDescription lang={lang} />

        <article className="flex w-full flex-col items-center">
          <RdProjectBriefing lang={lang} />
          <RdMainFeatures lang={lang} />
          <RdProjectShowcase lang={lang} />
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
              return <Highlight key={text + index}>{text}</Highlight>
            } else {
              return text
            }
          })}
        </SectionTitle>
        <JackedPlannerProject lang={lang} />
      </main>
    </>
  )
}
