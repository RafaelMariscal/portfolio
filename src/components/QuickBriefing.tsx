import NavLink from './Navigation/NavLink'

export default function QuickBriefing() {
  return (
    <article
      id="briefing"
      className="
        mb-16 flex w-full max-w-[30.625rem] flex-col gap-4 pt-8
        font-semibold text-gray-200 drop-shadow-custom-text
        
        max-md:mx-auto max-md:mb-12 max-md:pt-8 max-tablets-xs:max-w-md
        
        max-phones:px-4 max-phones:pt-2  
        
        [&_strong]:font-semibold [&_strong]:text-cyan-400
        [&_strong]:underline [&_strong]:underline-offset-2
        "
    >
      <p>
        Software Developer with <strong>+3 years of experience</strong> in
        projects End-2-End, also working in leadership positions. In addition to
        that, I&#39;m a bbq enthusiast and passionate about gym and sports in
        general.
      </p>
      <p>
        During my career, I&#39;ve been enrolled with projects using
        <strong> Javascript</strong>, <strong>Typescript</strong>,{' '}
        <strong>React</strong>, <strong>Next</strong>, <strong>Node.js</strong>{' '}
        and <strong>NestJs</strong>.
      </p>
      <p>
        In these projects, I had the opportunity to participate from the
        client&#39;s briefing to the final sprint.
      </p>
      <p>
        About academics, I&#39;m an <strong>Engineer</strong> and a{' '}
        <strong>System Analyst and Developer</strong> - 2024.
      </p>
      <NavLink
        href="#experience"
        title="Learn more about my experiences"
        scroll
        className="mt-2 text-gray-200 underline underline-offset-2 max-tablets:focus:text-gray-200"
      />
    </article>
  )
}
