import FilePdf from '@/assets/icons/FilePdf'
import { Experience } from './Experience'
import Link from 'next/link'

export default function Experiences() {
  return (
    <div
      id="experience"
      className="flex w-full max-w-7xl justify-between gap-12 px-3 py-10"
    >
      <div className="flex w-full max-w-sm flex-col gap-4">
        <h2 className="text-2xl font-bold underline underline-offset-4">
          Experiences
        </h2>
        <Experience.Root>
          <Experience.Content text="Software Developer - Full stack" />
          <Experience.Description className="flex items-center justify-between">
            <span>Freelancer Developer</span>
            <span>2022 - Present</span>
          </Experience.Description>
        </Experience.Root>

        <Experience.Root>
          <Experience.Content text="Project Manager" />
          <Experience.Description className="flex items-center justify-between">
            <span>Inbox - Refeições Coletivas</span>
            <span>2018 - Present</span>
          </Experience.Description>
        </Experience.Root>

        <Experience.Root>
          <Experience.Content text="Operations Manager - Full stack" />
          <Experience.Description className="flex items-center justify-between">
            <span>Qualittè Alimentação e Serviços</span>
            <span>2013 - 2017</span>
          </Experience.Description>
        </Experience.Root>
      </div>
      <div className="flex w-full max-w-[37.5rem] flex-col gap-4">
        <h2 className="text-2xl font-bold underline underline-offset-4">
          Papers and Bootcamps
        </h2>
        <Experience.Root>
          <Experience.Content text="Net Profit increased by +25% by using Agile Methodology(OKRs)" />
          <Experience.Description>
            <p className="text-justify">
              Graduation Thesis based on the OKR framework implementation, which
              resulted in the project&#39;s net profit increasing by +25% -
              written in pt-BR.
            </p>

            <Experience.Footer>
              <Link
                href={
                  '/pdf/Objectives_and_Key_Results_Framework_Implementation_Case_Study.pdf'
                }
                target="_blank"
                className="
                  flex items-center gap-1 outline-none
                  [&_*]:duration-100 
                  [&_*]:hover:fill-cyan-500 [&_*]:hover:text-cyan-500
                  [&_*]:focus:fill-cyan-500 [&_*]:focus:text-cyan-500
                "
              >
                <FilePdf className="scale-75" />
                <span>OKR Framework Case Study</span>
              </Link>
            </Experience.Footer>
          </Experience.Description>
        </Experience.Root>

        <Experience.Root>
          <Experience.Content text="Rocketseat - Ignite Bootcamp" />
          <Experience.Description>
            <p className="text-justify">
              +100 hours web development focusing on Front-End, but also
              applying some Back-end tools into the development process. Techs
              used:
            </p>
            <Experience.Footer className="mt-1 transition-all">
              <p>
                Techs used: Typescript, React, NextJs, Jest, GraphQL, Radix,
                Tailwind and more.
              </p>
            </Experience.Footer>
          </Experience.Description>
        </Experience.Root>
      </div>
    </div>
  )
}
