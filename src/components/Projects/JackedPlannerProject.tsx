import NavLink from '../Navigation/NavLink'
import ProjectCompose from './ProjectCompose'
import JackePlanner from '@/assets/projects/jackedPlanner/jp-project.png'
import { jackedPlannerTechs } from './techsLists'

export default function JackedPlannerProject() {
  return (
    <>
      <ProjectCompose.Image
        src={JackePlanner}
        alt="Jacked Plnner. A gym sass where the clients can create a user profile,
         manange their training plans and also take notes during the training sessions"
        link="/projects/jackedPlanner"
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
              , offering them the flexibility to select daily exercises and
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
                href="/projects/jackedPlanner"
                title="Learn more about Jacked Planner"
                newTab
              />
              <NavLink
                href="https://jackedplannerreact.web.app/"
                title="Access Jacked Planner"
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
    </>
  )
}
