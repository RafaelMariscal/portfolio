export interface HomeNavigation {
  home: string
  brefing: string
  projects: string
  bootcamps: string
  experience: string
}

type WhatsappChat = string

export interface HomeHero {
  role: string[]
  description: string[]
  whatsappChat: WhatsappChat
}

export interface HomeBriefing {
  p1: string[]
  p2: string[]
  p3: string[]
  link: string
}

export interface MainSkills {
  title: string[]
  programming: string
  management: string
  learning: string
}

export interface Project {
  title: string
  description: string[]
  learnMoreLink: string
  accessLink: string
  footnote?: string
}

export interface Projects {
  rdInspec: Project
  jPlanner: Project
  ibWebsite: Project
  techsLabel: string
}

export interface Bootcamp {
  title: string
  description: string
}

export interface BootcampProjects {
  title: string[]
  bootcamps: {
    nextBlog: Bootcamp
    waiterApp: Bootcamp
    desingSystem: Bootcamp
    videoPlatform: Bootcamp
  }
}

export interface Experience {
  role: string
  company: string
  timePeriod: string
}

export interface MainExperiences {
  title: string
  list: Experience[]
}

export interface BootcampOrPapper {
  title: string
  description: string
  highlight: string
}

export interface BootcampsAndPappers {
  title: string
  list: BootcampOrPapper[]
}

export interface Experiences {
  mainExperiences: MainExperiences
  bootcampsAndPappers: BootcampsAndPappers
}

export interface Footer {
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
