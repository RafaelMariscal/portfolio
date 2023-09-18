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
        I&#39;m a Software Developer with{' '}
        <strong>over three years of experience</strong> working on End-2-End
        projects, including leadership positions. Outside of work, I have a
        strong passion about barbecue, fitness and sports in general.
      </p>
      <p>
        In my career, I&#39;ve been involved with projects using
        <strong> Javascript</strong>, <strong>Typescript</strong>,{' '}
        <strong>React</strong>, <strong>Next</strong>, <strong>Node.js</strong>{' '}
        and <strong>NestJs</strong>. In these projects, I had the opportunity to
        contribute from the initial client briefing to the final sprint.
      </p>
      <p>
        In terms of my academic background, I hold a degree in{' '}
        <strong>Engineering</strong> and I&#39;m currently pursuing my second
        degree in <strong>System Analysis and Development</strong> - 2024.
      </p>
      <NavLink
        href="#experience"
        title="About my experiences"
        scroll
        className="mt-2 text-gray-200 underline underline-offset-2 max-tablets:focus:text-gray-200"
      />
    </article>
  )
}
