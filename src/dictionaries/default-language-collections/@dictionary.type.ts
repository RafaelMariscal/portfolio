interface HomeNavigation {
  home: string
  brefing: string
  projects: string
  experience: string
}

type WhatsappChat = string

interface HomeHero {
  role: string[]
  description: string[]
  whatsappChat: WhatsappChat
}

interface HomeBriefing {
  p1: string[]
  p2: string[]
  p3: string[]
  link: string
}

interface MainSkills {
  title: string[]
  programming: string
  management: string
  learning: string
}

interface Project {
  title: string
  description: string[]
  learnMoreLink: string
  accessLink: string
  footnote?: string
}

interface Projects {
  rdInspec: Project
  jPlanner: Project
  ibWebsite: Project
  techsLabel: string
}

interface Bootcamp {
  title: string
  description: string
}

interface BootcampProjects {
  title: string[]
  bootcamps: {
    nextBlog: Bootcamp
    waiterApp: Bootcamp
    desingSystem: Bootcamp
    videoPlatform: Bootcamp
  }
}

interface Experience {
  role: string
  company: string
  timePeriod: string
}

interface MainExperiences {
  title: string
  list: Experience[]
}

interface BootcampOrPapper {
  title: string
  description: string
  highlight: string
}

interface BootcampsAndPappers {
  title: string
  list: BootcampOrPapper[]
}

interface Experiences {
  mainExperiences: MainExperiences
  bootcampsAndPappers: BootcampsAndPappers
}

interface Footer {
  leavingMessage: string
  whatsappChat: WhatsappChat
  footerNav: {
    title: string
    pages: {
      home: string
      rdInspec: string
      jPlanner: string
      ibWebsite: string
    }
  }
}

export interface DefaultDictionary {
  homeNavigation: HomeNavigation
  homeHero: HomeHero
  homeBriefing: HomeBriefing
  mainSkills: MainSkills
  projects: Projects
  bootcampProjects: BootcampProjects
  experiences: Experiences
  footer: Footer
}
