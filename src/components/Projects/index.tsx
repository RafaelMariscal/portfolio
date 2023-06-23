import JackePlanner from '@/assets/projects/jp-project.png'
import Project from './Project'
import Link from 'next/link'
import javascript from '@/assets/icons/techs/JAVASCRIPT.svg'
import html from '@/assets/icons/techs/HTML.svg'
import css from '@/assets/icons/techs/CSS.svg'
import typescript from '@/assets/icons/techs/TYPESCRIPT.svg'
import react from '@/assets/icons/techs/REACT.svg'
import radix from '@/assets/icons/techs/RADIX.svg'
import router from '@/assets/icons/techs/ROUTER.svg'
import tailwind from '@/assets/icons/techs/TAILWIND.svg'
import firebase from '@/assets/icons/techs/FIREBASE.svg'
import { StaticImageData } from 'next/image'

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
    </div>
  )
}
