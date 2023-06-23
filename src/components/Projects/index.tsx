import Project from './Project'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

import JackePlanner from '@/assets/projects/jp-project.png'
import RDProject from '@/assets/projects/rd-project.png'

import javascript from '@/assets/icons/techs/JAVASCRIPT.svg'
import html from '@/assets/icons/techs/HTML.svg'
import css from '@/assets/icons/techs/CSS.svg'
import typescript from '@/assets/icons/techs/TYPESCRIPT.svg'
import react from '@/assets/icons/techs/REACT.svg'
import radix from '@/assets/icons/techs/RADIX.svg'
import router from '@/assets/icons/techs/ROUTER.svg'
import tailwind from '@/assets/icons/techs/TAILWIND.svg'
import firebase from '@/assets/icons/techs/FIREBASE.svg'
import nextjs from '@/assets/icons/techs/NEXT.svg'
import nodejs from '@/assets/icons/techs/NODE.svg'
import prisma from '@/assets/icons/techs/PRISMA.svg'
import aws from '@/assets/icons/techs/AWS.svg'

const jackedPlannerTechs: StaticImageData[] = [
  html,
  css,
  javascript,
  typescript,
  react,
  radix,
  router,
  tailwind,
  firebase,
]

const rdInspecTechs: StaticImageData[] = [
  javascript,
  typescript,
  react,
  nextjs,
  radix,
  tailwind,
  nodejs,
  prisma,
  aws,
  html,
  css,
]

export default function Projects() {
  return (
    <div
      className="
        max-w-screen-[1600px] flex w-11/12 min-w-[1256px] flex-col items-center justify-center
        max-[1256px]:w-full max-[1256px]:min-w-0
      "
    >
      <Project
        title="Jacked Planner"
        src={JackePlanner}
        alt="Jacked Plnner. A gym sass where the clients can create a user profile, manange their training plans and also take notes during the training sessions"
        link=""
        repo=""
        techList={jackedPlannerTechs}
      >
        <div className="max-w-4xl font-medium drop-shadow-custom-text [&_span]:text-cyan-400">
          <p>
            A product created for Gyms, where their customers can now access,
            create, and manage their training plans, as well as define their
            daily exercises and schedule for the week. Also, the customer is
            able to take notes for each training day.
          </p>
          <p className="mt-4 text-xs">
            The first version of this app was built using{' '}
            <span>plain and pure Javascript</span>, <span>HTML</span> and{' '}
            <span>CSS</span>. Follow the link bellow, to access this version:
          </p>
          <Link
            href={''}
            className="text-xs text-cyan-400 underline underline-offset-2 transition-all duration-100 hover:text-cyan-500"
          >
            Jacked Planner using plain and pure JS
          </Link>
          {' | '}
          <Link
            href={''}
            className="text-xs text-cyan-400 underline underline-offset-2 transition-all duration-100 hover:text-cyan-500"
          >
            Github
          </Link>
        </div>
      </Project>

      <Project
        title="RD Inspections - CRM"
        src={RDProject}
        alt="Jacked Plnner. A gym sass where the clients can create a user profile, manange their training plans and also take notes during the training sessions"
        link=""
        repo=""
        techList={rdInspecTechs}
        techShrink
      >
        <div className="max-w-4xl font-medium drop-shadow-custom-text [&_span]:text-cyan-400">
          <p>
            CRM developed for an Online Vehicle Inspection Company that provides
            technical reports. The reason behind this project is to unify two
            services, Inspection Meetings Manager and Client Pictures
            Geolocation Provider. So, we developed a REST API in order to
            resolve this problem, and also a modern dashboard for UI/UX matters.
          </p>
        </div>
      </Project>
    </div>
  )
}
