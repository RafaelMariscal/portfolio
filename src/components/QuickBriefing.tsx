import Link from 'next/link'

export default function QuickBriefing() {
  return (
    <article
      className="
        mb-16 mt-8 flex w-full max-w-[30.625rem] flex-col gap-4 
        self-start font-semibold text-gray-200 drop-shadow-custom-text
        [&_strong]:font-semibold [&_strong]:underline [&_strong]:underline-offset-2
      "
    >
      <p>
        Web Developer with +2 years of experience in projects End-2-End, working
        also in leadership positions. I&#39;m also one of those gym rats and a
        BBQ enthusiast.
      </p>
      <p>
        During my career, I&#39;ve been enrolled with projects in
        <strong> Javascript</strong>, using <strong>React</strong>,{' '}
        <strong>Next</strong>, <strong>Node</strong> and <strong>Nest</strong>.
        In these projects, I had the opportunity to participate from the
        client&#39;s briefing to the final sprint delivery.
      </p>
      <p>
        About my academics, I&#39;m an Engineer from University of
        Fortaleza(UNIFOR - Brazil) and currently, I&#39;m going to my second
        graduation, Systems Analysis and Development.
      </p>

      <Link
        href={''}
        className="
          w-fit underline underline-offset-2 transition-all duration-100 
          hover:text-cyan-400
        "
      >
        Learn more about me
      </Link>
    </article>
  )
}
