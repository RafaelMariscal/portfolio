import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cyan-800">
      <div role="container" className="w-full max-w-[1060px] px-3">
        <Navigation />

        <Hero />

        <article
          className="
            w-full max-w-[30.625rem] text-gray-200 font-semibold self-start flex flex-col gap-4
            [&_strong]:font-semibold [&_strong]:underline [&_strong]:underline-offset-2
          "
        >
          <p>
            Web Developer with +3 years of experience in projects End-2-End,
            working also in leadership positions. I&#39;m also one of those gym
            rats and a BBQ enthusiast.
          </p>
          <p>
            During my career, I&#39;ve been enrolled with projects in
            <strong> Javascript</strong>, using <strong>React</strong>,{' '}
            <strong>Next</strong>, <strong>Node</strong> and{' '}
            <strong>Nest</strong>. In these projects, I had the opportunity to
            participate from the client&#39;s briefing to the final sprint
            delivery.
          </p>
          <p>
            About my academics, I&#39;m an Engineer from University of
            Fortaleza(UNIFOR - Brazil) and currently, I&#39;m going to my second
            graduation, Systems Analysis and Development.
          </p>

          <Link
            href={''}
            className="underline underline-offset-2 hover:text-cyan-400 transition-all duration-100 w-fit"
          >
            Learn more about me
          </Link>
        </article>
      </div>
    </main>
  )
}
