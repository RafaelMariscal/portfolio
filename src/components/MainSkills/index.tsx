import Skill from './Skill'
import HTML from '../../assets/icons/techs/HTML.svg'
import CSS from '../../assets/icons/techs/CSS.svg'
import SASS from '../../assets/icons/techs/SASS.svg'
import JS from '../../assets/icons/techs/JAVASCRIPT.svg'
import TS from '../../assets/icons/techs/TYPESCRIPT.svg'
import NODE from '../../assets/icons/techs/NODE.svg'
import REACT from '../../assets/icons/techs/REACT.svg'
import NEXT from '../../assets/icons/techs/NEXT.svg'
import EXPRESS from '../../assets/icons/techs/EXPRESS.svg'
import JEST from '../../assets/icons/techs/JEST.svg'
import FIREBASE from '../../assets/icons/techs/FIREBASE.svg'
import TAILWIND from '../../assets/icons/techs/TAILWIND.svg'
import ROUTER from '../../assets/icons/techs/ROUTER.svg'
import GIT from '../../assets/icons/techs/GIT.svg'
import GITHUB from '../../assets/icons/techs/GITHUB.svg'
import JIRA from '../../assets/icons/techs/JIRA.svg'
import TRELLO from '../../assets/icons/techs/TRELLO.svg'
import SLACK from '../../assets/icons/techs/SLACK.svg'
import FIGMA from '../../assets/icons/techs/FIGMA.svg'
import XD from '../../assets/icons/techs/XD.svg'
import EXCEL from '../../assets/icons/techs/EXCEL.svg'
import SCRUM from '../../assets/icons/techs/SCRUM.svg'
import BPMN from '../../assets/icons/techs/BPMN.svg'
import LEAN from '../../assets/icons/techs/LEAN.svg'
import NEST from '../../assets/icons/techs/NEST.svg'
import PRISMA from '../../assets/icons/techs/PRISMA.svg'
import POSTGRE from '../../assets/icons/techs/POSTGRE.svg'
import MYSQL from '../../assets/icons/techs/MYSQL.svg'
import DOCKER from '../../assets/icons/techs/DOCKER.svg'
import AWS from '../../assets/icons/techs/AWS.svg'

export default function MainSkills() {
  return (
    <div
      className="
        max-md:mx-auto max-md:max-w-[30.625rem]
        max-tablets-xs:max-w-md
        max-phones:px-4
      "
    >
      <h2 className="text-[2.5rem] font-bold uppercase leading-none text-cyan-500 drop-shadow-custom-text">
        main<span className="ml-1 text-gray-100">skills</span>
      </h2>

      <div className="mb-16 mt-4 flex gap-10 text-gray-100 max-tablets:flex-col">
        <div className="">
          <h3 className="mb-2 text-lg font-semibold drop-shadow-custom-text">
            Programming:
          </h3>
          <div
            className="
              flex w-full flex-wrap justify-between gap-1
              tablets:grid tablets:grid-cols-3 tablets:gap-x-2
              tablets:gap-y-2
            "
          >
            <Skill skillName="HTML" src={HTML} alt="HTML icon" />
            <Skill skillName="CSS" src={CSS} alt="CSS icon" />
            <Skill skillName="SASS" src={SASS} alt="SASS icon" />
            <Skill skillName="Javascript" src={JS} alt="Javascript icon" />
            <Skill skillName="Typescript" src={TS} alt="Typescript icon" />
            <Skill skillName="Node.js" src={NODE} alt="Node.js icon" />
            <Skill skillName="React" src={REACT} alt="ReactJs icon" />
            <Skill skillName="Next.js" src={NEXT} alt="Next.js icon" />
            <Skill skillName="Express" src={EXPRESS} alt="Express icon" />
            <Skill skillName="Jest" src={JEST} alt="Jest icon" />
            <Skill skillName="Firebase" src={FIREBASE} alt="Firebase icon" />
            <Skill skillName="Tailwind" src={TAILWIND} alt="Tailwind icon" />
            <Skill skillName="Router" src={ROUTER} alt="Router icon" />
            <Skill skillName="Git" src={GIT} alt="Git icon" />
            <Skill skillName="Github" src={GITHUB} alt="Github icon" />
          </div>
        </div>

        <div className="">
          <h3 className="mb-2 text-lg font-semibold drop-shadow-custom-text">
            Management and Design:
          </h3>
          <div
            className="
              flex w-full flex-wrap justify-between gap-1
              tablets:grid tablets:grid-cols-3 tablets:gap-x-2 tablets:gap-y-2
            "
          >
            <Skill skillName="Jira" src={JIRA} alt="Jira icon" />
            <Skill skillName="Trello" src={TRELLO} alt="Trello icon" />
            <Skill skillName="Slack" src={SLACK} alt="Slack icon" />
            <Skill skillName="Figma" src={FIGMA} alt="Figma icon" />
            <Skill skillName="XD" src={XD} alt="XD icon" />
            <Skill skillName="Excel" src={EXCEL} alt="Excel icon" />
            <Skill skillName="SCRUM" src={SCRUM} alt="SCRUM icon" />
            <Skill skillName="BPM" src={BPMN} alt="BPMN icon" />
            <Skill skillName="LEAN" src={LEAN} alt="LEAN icon" />
          </div>
        </div>

        <div className="">
          <h3 className="mb-2 text-lg font-semibold drop-shadow-custom-text">
            Currently Learning:
          </h3>
          <div
            className="
              flex w-full flex-wrap justify-between gap-1
              tablets:grid tablets:grid-cols-2 tablets:gap-x-2 tablets:gap-y-2
            "
          >
            <Skill skillName="Nest.js" src={NEST} alt="Nest.js icon" />
            <Skill skillName="Prisma" src={PRISMA} alt="Prisma icon" />
            <Skill skillName="Postgre" src={POSTGRE} alt="Postgre icon" />
            <Skill skillName="MySQL" src={MYSQL} alt="MySQL icon" />
            <Skill skillName="Docker" src={DOCKER} alt="Docker icon" />
            <Skill skillName="AWS" src={AWS} alt="AWS icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
