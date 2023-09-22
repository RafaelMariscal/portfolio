import Image from 'next/image'
import RdImageSrc from '@/assets/projects/rd-inspection/rd-project.png'
import Navigation from './components/Navigation'
import RdProjectDescription from './components/RdProjectDescription'
import MainFeatures from './components/MainFeatures'
import RdProjectBriefing from './components/RdProjectBriefing'
import JackedPlannerProject from '@/components/Projects/JackedPlannerProject'
import SectionTitle from '@/components/Basic/SectionTitle'
import Highlight from '@/components/Basic/Highlight'
// import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'

export default function RdInspectionsPage() {
  return (
    <>
      <Navigation />
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
          <MainFeatures />
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
        <JackedPlannerProject />
      </main>
    </>
  )
}
