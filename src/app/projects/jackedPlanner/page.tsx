import Image from 'next/image'
import JpImageSrc from '@/assets/projects/jackedPlanner/jp-project.png'
import Navigation from './components/Navigation'
import JpProjectDescription from './components/JpProjectDescription'
import JpProjectBriefing from './components/JpProjectBriefing'
import SectionTitle from '@/components/Basic/SectionTitle'
import Highlight from '@/components/Basic/Highlight'
import InboxWebsiteProject from '@/components/Projects/InboxWebsiteProject'
import DesignProcess from './components/DesignProcess'

export default function JackedPlannerPage() {
  return (
    <>
      <Navigation />
      <main className="flex w-full flex-col items-center justify-center">
        <h1 className="invisible h-0 w-0">Jacked Planner project page</h1>
        <Image
          src={JpImageSrc}
          alt="Jacked Planner software promo image."
          quality={100}
          className="z-10 h-full max-h-screen w-full select-none object-cover"
          placeholder="blur"
        />
        <JpProjectDescription />

        <article className="flex w-full flex-col items-center">
          <JpProjectBriefing />
          <DesignProcess />
        </article>
        <SectionTitle
          id="nextProject"
          className="mb-6 w-full max-w-screen-article pt-14"
        >
          Next<Highlight className="ml-1">Project</Highlight>
        </SectionTitle>
        <InboxWebsiteProject />
      </main>
    </>
  )
}
