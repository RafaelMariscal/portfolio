import Navigation from './components/Navigation'
import Image from 'next/image'
import RdImageSrc from '@/assets/projects/rd-inspection/rd-project.png'
import RdFlowchartSrc from '@/assets/projects/rd-inspection/rd-front-end-flowchart.png'
import RdProjectBriefing from './components/RdProjectBriefing'
import RdProjectDescription from './components/RdProjectDescription'
import MainFeatures from './components/MainFeatures'
import JackedPlannerProject from '@/components/Projects/JackedPlannerProject'
import SectionTitle from '@/components/Basic/SectionTitle'
import Highlight from '@/components/Basic/Highlight'
import RdComponentsShowcase from './components/RdComponentsShowcase'

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
          className="z-10 h-full max-h-screen w-full object-cover"
          placeholder="blur"
        />
        <RdProjectDescription />
        <article className="w-full py-10">
          <div className="grid w-full place-items-center">
            <RdProjectBriefing />
            <Image
              src={RdFlowchartSrc}
              alt=""
              className="absolute -z-10 h-auto w-screen max-w-screen-2xl opacity-30"
            />
          </div>
          <MainFeatures />
        </article>
        <RdComponentsShowcase />

        <SectionTitle className="mb-6 w-full max-w-screen-article">
          Next<Highlight className="ml-1">Project</Highlight>
        </SectionTitle>
        <JackedPlannerProject />
      </main>
    </>
  )
}
