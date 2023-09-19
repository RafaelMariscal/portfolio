import NavLink from '../Navigation/NavLink'
import ProjectCompose from './ProjectCompose'
import IBProject from '@/assets/projects/inboxWebsite/ib-project.png'
import { IbWebsiteTechs } from './techsLists'

function inboxWebsiteProject() {
  return (
    <>
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
    </>
  )
}
export default inboxWebsiteProject
