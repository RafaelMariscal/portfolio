import BootcampsProjects from '@/components/BootcampsProjects'
import Hero from '@/components/Hero'
import MainSkills from '@/components/MainSkills'
import Navigation from '@/components/Navigation/HomeNavigation'
import JackedPlannerProject from '@/components/Projects/JackedPlannerProject'
import Projects from '@/components/Projects/ProjectCompose'
import RdInspectionProject from '@/components/Projects/RdInspectionProject'
import InboxWebsiteProject from '@/components/Projects/InboxWebsiteProject'
import QuickBriefing from '@/components/QuickBriefing'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl px-3" id="top">
          <Hero />
          <QuickBriefing />
          <MainSkills />
        </div>
        <Projects.Root>
          <RdInspectionProject />
          <JackedPlannerProject />
          <InboxWebsiteProject />
        </Projects.Root>
        <BootcampsProjects />
      </main>
    </>
  )
}
