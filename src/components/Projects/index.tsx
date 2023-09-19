import JackePlanner from '@/assets/projects/jackedPlanner/jp-project.png'
import RDProject from '@/assets/projects/rd-inspection/rd-project.png'
import IBProject from '@/assets/projects/inboxWebsite/ib-project.png'
import NavLink from '../Navigation/NavLink'
import { ProjectCompose } from './ProjectCompose'
import { rdInspecTechs, jackedPlannerTechs, IbWebsiteTechs } from './techsLists'

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
              To achieve this, a <strong>REST API</strong> was developed to
              bridge the gap between these two services, and a modern dashboard
              to enhance user experience.
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
              An SaaS platform developed specifically for Gyms and trainers.{' '}
              <strong>
                It enables customers to easily Create, Access, and Manage their
                training plans
              </strong>
              , offering then the flexibility to select daily exercises and
              create schedules that suit their needs. Additionally, users have
              the capability to{' '}
              <strong>take notes for each training day</strong>, providing both
              quantitative and qualitative assessments of their workouts. This
              system enhances the overall gym experience,{' '}
              <strong>
                empowering users to have more control over their fitness
                routines and progress tracking
              </strong>
              .
            </p>
            <p className="mt-1 text-xs leading-snug">
              **All payment methods in this project are currently unavailable.
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

      <ProjectCompose.Image
        src={IBProject}
        alt="A Meal Supply Company website promo image"
        link="/projects/inboxWebsite"
        priority
        className="object-top"
      />
      <ProjectCompose.Content>
        <ProjectCompose.Title title="Inbox Refeições - Website" />
        <ProjectCompose.Description>
          <ProjectCompose.Text>
            <p
              className="
                max-w-4xl text-justify font-medium drop-shadow-custom-text 
                max-md:text-start 
                [&_strong]:font-semibold [&_strong]:text-cyan-400
              "
            >
              A website built for a catering company located in Fortaleza,
              Brazil.{' '}
              <strong>
                The goal was to simplify the price quote request process
              </strong>
              , enhancing the overall user experience. To achieve this, a
              dynamic form was integrated using <strong>React-Hook-Form</strong>{' '}
              and <strong>Zod</strong> for data validation and also{' '}
              <strong>Radix-UI</strong> and <strong>Framer Motion</strong> to
              provide accessibility and smooth animations. Finally, we used
              Google SEO Checker to improve/boost search engine visibility.
            </p>
            <ProjectCompose.Links>
              <NavLink
                href={'projects/inboxWebsite'}
                newTab
                title="Learn more about Inbox Website"
              />
              <NavLink
                href="https://inboxrefeicoes.vercel.app/"
                title={`Access Inbox Website`}
                newTab
              />
            </ProjectCompose.Links>
          </ProjectCompose.Text>
          <ProjectCompose.Techs className="max-w-[16rem]">
            <div>
              <ProjectCompose.TechsTitle title="Techs used in this project:" />
              <ProjectCompose.TechsList
                techsList={IbWebsiteTechs}
                className="max-w-[14rem] max-phones:max-w-[18rem]"
              />
            </div>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>
    </ProjectCompose.Root>
  )
}
