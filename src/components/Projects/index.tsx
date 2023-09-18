import JackePlanner from '@/assets/projects/jp-project.png'
import RDProject from '@/assets/projects/rd-project.png'
import IBProject from '@/assets/projects/ib-project.png'
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
              A website built for a catering company located in Fortaleza-CE -
              Brazil.
              <strong>
                The company wanted to provide an easier way to their clients to
                request a price quote
              </strong>
              , so a dynamic form was implemented using{' '}
              <strong>React-Hook-Form</strong> and <strong>Zod</strong> for data
              validation and also <strong>Radix-UI</strong> and{' '}
              <strong>Framer Motion</strong> to create smooth animations.
              Finally, Google SEO Checker was used to optimize the search
              engine.
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
