import NavLink from '../Navigation/NavLink'
import ProjectCompose from './ProjectCompose'
import IBProject from '@/assets/projects/inboxWebsite/ib-project.png'
import { IbWebsiteTechs } from './techsLists'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function InboxWebsiteProject({ lang }: { lang: Locale }) {
  const {
    home: {
      projects: { ibWebsite, techsLabel },
    },
  } = getDictionaryServerOnly(lang)
  const currPath = lang.split('/')
  const set = new Set(currPath)
  const hasProjects = set.has('projects')
  const slug = hasProjects
    ? lang === 'pt'
      ? '/'
      : `/${lang}`
    : lang === 'pt'
    ? ''
    : `/${lang}`
  const path = slug + '/projects/inboxWebsite'

  return (
    <>
      <ProjectCompose.Image
        src={IBProject}
        alt="A Meal Supply Company website promo image"
        link={path}
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
              {ibWebsite.description.map((text, index) => {
                if (index % 2) {
                  return <strong key={text + index}>{text}</strong>
                } else {
                  return text
                }
              })}
            </p>
            <ProjectCompose.Links>
              <NavLink href={path} title={ibWebsite.learnMoreLink} newTab />
              <NavLink
                href="https://inboxrefeicoes.vercel.app/"
                title={ibWebsite.accessLink}
                newTab
              />
            </ProjectCompose.Links>
          </ProjectCompose.Text>
          <ProjectCompose.Techs className="max-w-[16rem]">
            <div>
              <ProjectCompose.TechsTitle title={techsLabel} />
              <ProjectCompose.TechsList
                techsList={IbWebsiteTechs}
                className="max-w-[14rem] max-phones:max-w-[18rem]"
              />
            </div>
          </ProjectCompose.Techs>
        </ProjectCompose.Description>
      </ProjectCompose.Content>
    </>
  )
}
