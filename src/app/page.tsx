import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import QuickBriefing from '@/components/QuickBriefing'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cyan-800 text-gray-100">
      <div role="container" className="w-full max-w-[1060px] px-3">
        <Navigation />

        <Hero />

        <QuickBriefing />
      </div>
    </main>
  )
}
