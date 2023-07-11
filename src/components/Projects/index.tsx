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
import { StaticImageData } from 'next/image'
import { ProjectCompose } from './ProjectCompose'
import NavLink from '../Navigation/NavLink'

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
    <ProjectCompose.Root>
      <ProjectCompose.Image
        src={JackePlanner}
        alt="Jacked Plnner. A gym sass where the clients can create a user profile,
         manange their training plans and also take notes during the training sessions"
      />
      <ProjectCompose.Content>
        <ProjectCompose.Title title="Jacked Planner" />
        <ProjectCompose.Description>
          <ProjectCompose.Text
            text="A product created for Gyms, where their customers can now access,
            create, and manage their training plans, as well as define their
            daily exercises and schedule for the week. Also, the customer is
            able to take notes for each training day."
          />
          <ProjectCompose.Techs>
            <ProjectCompose.TechsTitle title="Main Techs" />
            <ProjectCompose.TechsList techsList={jackedPlannerTechs} />
            <ProjectCompose.Links>
              <NavLink
                href="https://jackedplannerreact.web.app/"
                title={`Access Jacked Planner`}
                newTab
              />
              <NavLink
                href="https://github.com/RafaelMariscal/JackedPlanner-ReactJs"
                title="Github"
                newTab
              />
            </ProjectCompose.Links>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>

      <ProjectCompose.Image
        src={RDProject}
        alt="CRM developed for an Online Vehicle Inspection Company that provides
            technical reports"
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
            <ProjectCompose.TechsTitle title="Main Techs" />
            <ProjectCompose.TechsList techsList={rdInspecTechs} />
            <ProjectCompose.Links>
              <NavLink
                href="https://www.rdinspecoesveiculares.com.br/"
                title={`Access RD Inspections`}
                newTab
              />
            </ProjectCompose.Links>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>
    </ProjectCompose.Root>
  )
}
