import NavLink from '../Navigation/NavLink'
import ProjectCompose from './ProjectCompose'
import RDProject from '@/assets/projects/rd-inspection/rd-project.png'
import { rdInspecTechs } from './techsLists'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function RdInspectionProject({ lang }: { lang: Locale }) {
  const {
    home: {
      projects: { rdInspec, techsLabel },
    },
  } = getDictionaryServerOnly(lang)
  return (
    <>
      <ProjectCompose.Image
        src={RDProject}
        alt="CRM developed for an Online Vehicle Inspection Company that provides technical reports"
        link="/projects/rdInspections"
        priority
      />
      <ProjectCompose.Content>
        <ProjectCompose.Title title={rdInspec.title} />
        <ProjectCompose.Description>
          <ProjectCompose.Text>
            <p
              className="
                max-w-4xl text-justify font-medium drop-shadow-custom-text 
                max-md:text-start 
                [&_strong]:font-semibold [&_strong]:text-cyan-400
              "
            >
              {rdInspec.description.map((text, index) => {
                if (index % 2) {
                  return <strong key={text + index}>{text}</strong>
                } else {
                  return text
                }
              })}
            </p>
            <ProjectCompose.Links>
              <NavLink
                href="/projects/rdInspections"
                title={rdInspec.learnMoreLink}
                newTab
              />
              <NavLink
                href="https://www.rdinspecoesveiculares.com.br/"
                title={rdInspec.accessLink}
                newTab
              />
            </ProjectCompose.Links>
          </ProjectCompose.Text>
          <ProjectCompose.Techs className="max-w-[16rem]">
            <div>
              <ProjectCompose.TechsTitle title={techsLabel} />
              <ProjectCompose.TechsList
                techsList={rdInspecTechs}
                className="max-phones:max-w-[18rem]"
              />
            </div>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>
    </>
  )
}
