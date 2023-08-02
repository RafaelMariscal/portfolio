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
import nestjs from '@/assets/icons/techs/NEST.svg'
import nodejs from '@/assets/icons/techs/NODE.svg'
import mongoDB from '@/assets/icons/techs/MONGO.svg'
import prisma from '@/assets/icons/techs/PRISMA.svg'
import docker from '@/assets/icons/techs/DOCKER.svg'
import aws from '@/assets/icons/techs/AWS.svg'
import { StaticImageData } from 'next/image'
import { ProjectCompose } from './ProjectCompose'
import NavLink from '../Navigation/NavLink'

const rdInspecTechs: StaticImageData[] = [
  html,
  css,
  javascript,
  typescript,
  react,
  nextjs,
  radix,
  tailwind,
  nodejs,
  nestjs,
  prisma,
  docker,
  mongoDB,
  aws,
]

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
    <ProjectCompose.Root>
      <ProjectCompose.Image
        src={RDProject}
        alt="CRM developed for an Online Vehicle Inspection Company that provides technical reports"
        link="/projects/rdInspections"
        priority
      />
      <ProjectCompose.Content>
        <ProjectCompose.Title title="RD Inspections - CRM" />
        <ProjectCompose.Description>
          <ProjectCompose.Text>
            <p
              className="
                max-w-4xl text-justify font-medium drop-shadow-custom-text 
                max-md:text-start 
                [&_strong]:font-semibold [&_strong]:text-cyan-400
              "
            >
              CRM developed for an online vehicle inspection company that
              provides technical reports. The reason behind this project is to
              unify two services, <strong>Inspection Meetings Manager</strong>{' '}
              and <strong>Vehicle&#39;s Pictures Geolocation Provider</strong>.
              Therefore, we developed a <strong>REST API</strong> in order to
              resolve this problem, and also a modern dashboard to improve
              UI/UX.
            </p>
            <ProjectCompose.Links>
              <NavLink
                href={'projects/rdInspections'}
                newTab
                title="Learn more about RD Inspections"
              />
              <NavLink
                href="https://www.rdinspecoesveiculares.com.br/"
                title={`Access RD Inspections`}
                newTab
              />
            </ProjectCompose.Links>
          </ProjectCompose.Text>
          <ProjectCompose.Techs className="max-w-[16rem]">
            <div>
              <ProjectCompose.TechsTitle title="Techs used in this project:" />
              <ProjectCompose.TechsList
                techsList={rdInspecTechs}
                className="max-phones:max-w-[18rem]"
              />
            </div>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>

      <ProjectCompose.Image
        src={JackePlanner}
        alt="Jacked Plnner. A gym sass where the clients can create a user profile,
         manange their training plans and also take notes during the training sessions"
        link="projects/jackedPlanner"
      />
      <ProjectCompose.Content>
        <ProjectCompose.Title title="Jacked Planner" />
        <ProjectCompose.Description>
          <ProjectCompose.Text>
            <p
              className="
                max-w-4xl text-justify font-medium drop-shadow-custom-text 
                max-md:text-start 
                [&_strong]:font-semibold [&_strong]:text-cyan-400
              "
            >
              Open Source Sass created for Gyms, where{' '}
              <strong>
                customers can create, access, and manage their training plans
              </strong>
              , choosing their daily exercises and it schedule. Also, users are
              able to <strong>take notes for each training day</strong>, having
              both quantitative and qualitative training valuation.
            </p>
            <p className="mt-1 text-xs leading-snug">
              **All payments methods present in this project are unavailable.
            </p>
            <ProjectCompose.Links>
              <NavLink
                href={'projects/jackedPlanner'}
                newTab
                title="Learn more about Jacked Planner"
              />
              <NavLink
                href="https://jackedplannerreact.web.app/"
                title={`Access Jacked Planner`}
                newTab
                className="min-w-max"
              />
            </ProjectCompose.Links>
          </ProjectCompose.Text>
          <ProjectCompose.Techs>
            <div>
              <ProjectCompose.TechsTitle title="Techs used in this project:" />
              <ProjectCompose.TechsList techsList={jackedPlannerTechs} />
            </div>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>
    </ProjectCompose.Root>
  )
}
