import FilePdf from '@/assets/icons/FilePdf'
import { Experience } from './ExperienceCompose'
import NavLink from '../Navigation/NavLink'

export default function Experiences() {
  return (
    <div
      id="experience"
      className="
        flex w-full max-w-screen-xl justify-between gap-12 px-3 py-10 max-tablets-sm:flex-col
        max-md:max-w-[30.625rem]
      "
    >
      <div className="max flex w-full max-w-sm flex-col gap-4">
        <h2 className="text-2xl font-bold underline underline-offset-4 drop-shadow-custom-text">
          Main Experiences
        </h2>
        <Experience.Root>
          <Experience.Content text="Rd Inspections - Freelance" />
          <Experience.Description className="flex items-center justify-between gap-4">
            <span>Design and Full-stack Project</span>
            <span className="w-full max-w-max">2023 - Present</span>
          </Experience.Description>
        </Experience.Root>
        <Experience.Root>
          <Experience.Content text="Software Developer" />
          <Experience.Description className="flex items-center justify-between gap-4">
            <span>Inbox - Refeições Coletivas</span>
            <span className="w-full max-w-max">2020 - Present</span>
          </Experience.Description>
        </Experience.Root>
        <Experience.Root>
          <Experience.Content text="Jacked Planner - Freelance" />
          <Experience.Description className="flex items-center justify-between gap-4">
            <span>Design and Full-stack Project</span>
            <span className="w-full max-w-max">2022 - 2023</span>
          </Experience.Description>
        </Experience.Root>
        <Experience.Root>
          <Experience.Content text="Project Manager" />
          <Experience.Description className="flex items-center justify-between gap-4">
            <span>Inbox - Refeições Coletivas</span>
            <span className="w-full max-w-max">2018 - 2020</span>
          </Experience.Description>
        </Experience.Root>

        <Experience.Root>
          <Experience.Content text="Operations Manager" />
          <Experience.Description className="flex items-center justify-between gap-4">
            <span className="w-full max-w-max truncate">
              Qualittè Alimentação e Serviços
            </span>
            <span className="w-full max-w-max">2013 - 2017</span>
          </Experience.Description>
        </Experience.Root>
      </div>

      <div className="flex w-full max-w-[37.5rem] flex-col gap-4 max-tablets-sm:max-w-full">
        <h2 className="text-2xl font-bold underline underline-offset-4 drop-shadow-custom-text">
          Bootcamps and Papers
        </h2>
        <Experience.Root>
          <Experience.Content text="Rocketseat Ignite NodeJs Bootcamp" />
          <Experience.Description>
            <p className="">
              +100 hours web development focusing on Back-end using plain
              Node.js to develop RESTful APIs, but also Fastify and NestJs - In
              Progress.
            </p>
            <Experience.Footer className="mt-1 transition-all">
              <p>
                HTTP, REST, Fastify, NestJS, Docker, JWT, DDD, Clean
                Architecture and more.
              </p>
            </Experience.Footer>
          </Experience.Description>
        </Experience.Root>
        <Experience.Root>
          <Experience.Content text="Rocketseat Ignite ReactJs Bootcamp" />
          <Experience.Description>
            <p className="">
              +100 hours of Front-End web development, but also applying some
              Back-end tools into the development process.
            </p>
            <Experience.Footer className="mt-1 transition-all">
              <p>
                Typescript, React, NextJs, Jest, GraphQL, Radix, Tailwind,
                StripeAPI and more.
              </p>
            </Experience.Footer>
          </Experience.Description>
        </Experience.Root>
        <Experience.Root>
          <Experience.Content text="Net Profit increased by +25% by using OKR Framework" />
          <Experience.Description>
            <p className="">
              Graduation Thesis based on the OKR framework implementation, which
              resulted in the project&#39;s net profit increasing by +25% -
              written in pt-BR.
            </p>

            <Experience.Footer>
              <NavLink
                href="/pdf/Objectives_and_Key_Results_Framework_Implementation_Case_Study.pdf"
                title="OKR Framework Case Study"
                className="
                  flex items-center gap-1 text-cyan-400 [&_*]:duration-100
                  [&_*]:hover:fill-cyan-500 [&_*]:focus:fill-cyan-500
                "
                newTab
              >
                <FilePdf className="scale-75" />
              </NavLink>
            </Experience.Footer>
          </Experience.Description>
        </Experience.Root>
      </div>
    </div>
  )
}
