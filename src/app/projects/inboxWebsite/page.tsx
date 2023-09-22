import Image from 'next/image'
import Navigation from './components/Navigation'
import IbWebsiteSrc from '@/assets/projects/inboxWebsite/ib-project.png'
import SectionTitle from '@/components/Basic/SectionTitle'
import Highlight from '@/components/Basic/Highlight'
import RdInspectionProject from '@/components/Projects/RdInspectionProject'
import IbProjectDescription from './components/IbProjectDescription'
import IbProjectBriefing from './components/IbProjectBriefing'
import DesignProcess from './components/DesignProcess'
import SoftwareDevelopment from './components/SoftwareDevelopment'
// import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'

export default function RdInspectionsPage() {
  return (
    <>
      <Navigation />
      <main className="flex w-full flex-col items-center justify-center">
        <h1 className="invisible h-0 w-0">Jacked Planner project page</h1>
        <Image
          src={IbWebsiteSrc}
          alt="Jacked Planner software promo image."
          quality={100}
          className="z-10 h-full max-h-screen w-full select-none object-cover object-top"
          placeholder="blur"
        />
        <IbProjectDescription />

        <article className="flex w-full flex-col items-center">
          <IbProjectBriefing />
          <DesignProcess />
          <SoftwareDevelopment />
          {/* <ProjectShowcase>
            <div className="h-10 max-w-screen-sm bg-cyan-700" />
            <div className="mt-4 h-5 w-24 bg-cyan-700" />
            <div className="mt-4 h-56 max-w-xs bg-cyan-700" />
          </ProjectShowcase> */}
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
        <RdInspectionProject />
      </main>
    </>
  )
}
