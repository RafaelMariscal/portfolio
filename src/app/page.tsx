import Experiences from '@/components/Experiences'
import Hero from '@/components/Hero'
import MainSkills from '@/components/MainSkills'
import Projects from '@/components/Projects'
import QuickBriefing from '@/components/QuickBriefing'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div role="container" className="w-full max-w-7xl px-3" id="top">
        <Hero />
        <QuickBriefing />
        <MainSkills />
      </div>
      <Projects />
      <Experiences />
    </main>
  )
}
