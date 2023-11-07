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

export default function RdInspectionsPage() {
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
        <RdProjectDescription />

        <article className="flex w-full flex-col items-center">
          <RdProjectBriefing />
          <RdMainFeatures />
          <RdProjectShowcase />
        </article>
        <SectionTitle
          id="nextProject"
          className="
            mb-6 w-full max-w-screen-article px-3 pt-14
            max-md:max-w-screen-tablets-xs
          "
        >
          Next<Highlight className="ml-1">Project</Highlight>
        </SectionTitle>
        <JackedPlannerProject />
      </main>
    </>
  )
}