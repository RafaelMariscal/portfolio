import NavLink from '../Navigation/NavLink'
import ProjectCompose from './ProjectCompose'
import JackePlanner from '@/assets/projects/jackedPlanner/jp-project.png'
import { jackedPlannerTechs } from './techsLists'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function JackedPlannerProject({ lang }: { lang: Locale }) {
  const {
    projects: { jPlanner, techsLabel },
  } = getDictionaryServerOnly(lang)
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
              {jPlanner.description.map((text, index) => {
                if (index % 2) {
                  return <strong key={text + index}>{text}</strong>
                } else {
                  return text
                }
              })}
            </p>
            {jPlanner.footnote && (
              <p className="mt-1 text-xs leading-snug">{jPlanner.footnote}</p>
            )}
            <ProjectCompose.Links>
              <NavLink
                href="/projects/jackedPlanner"
                title={jPlanner.learnMoreLink}
                newTab
              />
              <NavLink
                href="https://jackedplannerreact.web.app/"
                title={jPlanner.accessLink}
                newTab
                className="min-w-max"
              />
            </ProjectCompose.Links>
          </ProjectCompose.Text>
          <ProjectCompose.Techs>
            <div>
              <ProjectCompose.TechsTitle title={techsLabel} />
              <ProjectCompose.TechsList techsList={jackedPlannerTechs} />
            </div>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>
    </>
  )
}
