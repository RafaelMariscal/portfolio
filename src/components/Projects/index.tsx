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
        link="https://www.rdinspecoesveiculares.com.br/"
        priority
      />
      <ProjectCompose.Content>
        <ProjectCompose.Title title="RD Inspections - CRM" />
        <ProjectCompose.Description>
          <ProjectCompose.Text
            text="CRM developed for an Online Vehicle Inspection Company that provides
            technical reports. The reason behind this project is to unify two
            services, Inspection Meetings Manager and Client Pictures
            Geolocation Provider. So, we developed a REST API in order to
            resolve this problem, and also a modern dashboard for UI/UX matters."
          />
          <ProjectCompose.Techs className="max-w-[16rem]">
            <div>
              <ProjectCompose.TechsTitle title="Techs used:" />
              <ProjectCompose.TechsList
                techsList={rdInspecTechs}
                className="max-phones:max-w-[18rem]"
              />
            </div>
            <ProjectCompose.Links>
              <NavLink
                href="https://www.rdinspecoesveiculares.com.br/"
                title={`Access RD Inspections`}
                newTab
                className="min-w-max"
              />
            </ProjectCompose.Links>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>

      <ProjectCompose.Image
        src={JackePlanner}
        alt="Jacked Plnner. A gym sass where the clients can create a user profile,
         manange their training plans and also take notes during the training sessions"
        link="https://jackedplannerreact.web.app/"
      />
      <ProjectCompose.Content>
        <ProjectCompose.Title title="Jacked Planner" />
        <ProjectCompose.Description>
          <ProjectCompose.Text
            text="Open Source Sass created for Gyms, where their customers can create,
            access, and manage their training plans, as well as define their
            daily exercises and schedule for the week. Also, the customer is
            able to take notes for each training day, having both quantitative
            and qualitative training valuation."
          />
          <ProjectCompose.Techs>
            <div>
              <ProjectCompose.TechsTitle title="Techs used:" />
              <ProjectCompose.TechsList techsList={jackedPlannerTechs} />
            </div>
            <ProjectCompose.Links>
              <NavLink
                href="https://jackedplannerreact.web.app/"
                title={`Access Jacked Planner`}
                newTab
                className="min-w-max"
              />
              <NavLink
                href="https://github.com/RafaelMariscal/JackedPlanner-ReactJs"
                title="Github Repository"
                newTab
                className="flex min-w-max items-center gap-1"
              />
            </ProjectCompose.Links>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>
    </ProjectCompose.Root>
  )
}
