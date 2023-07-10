import CustomLink from './CustomLink'

export default function QuickBriefing() {
  return (
    <article
      id="briefing"
      className="
        mb-16 mt-8 flex w-full max-w-[30.625rem] flex-col gap-4 
        self-start font-semibold text-gray-200 drop-shadow-custom-text
        [&_strong]:font-semibold [&_strong]:text-cyan-400
        [&_strong]:underline [&_strong]:underline-offset-2
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

      <CustomLink
        text="Learn more about me"
        href={'/about'}
        className="text-[1rem] underline underline-offset-2"
      />
    </article>
  )
}
