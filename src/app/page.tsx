import BootcampsProjects from '@/components/BootcampsProjects'
import Hero from '@/components/Hero'
import MainSkills from '@/components/MainSkills'
import Navigation from '@/components/Navigation/HomeNavigation'
import Projects from '@/components/Projects'
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
        <Projects />
        <BootcampsProjects />
      </main>
    </>
  )
}
