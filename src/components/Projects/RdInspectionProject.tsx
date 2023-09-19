import NavLink from '../Navigation/NavLink'
import ProjectCompose from './ProjectCompose'
import RDProject from '@/assets/projects/rd-inspection/rd-project.png'
import { rdInspecTechs } from './techsLists'

function RdInspectionProject() {
  return (
    <>
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
    </>
  )
}
export default RdInspectionProject
