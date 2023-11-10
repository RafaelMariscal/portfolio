import {
  HomeNavigation,
  HomeHero,
  HomeBriefing,
  MainSkills,
  Projects,
  BootcampProjects,
  Experiences,
  Footer,
} from './home.type'

import {
  NextProject,
  RdBriefing,
  RdCompShowcase,
  RdDescription,
  RdMainFeatures,
  RdNavigation,
} from './rdPage.type'

export interface DefaultDictionary {
  home: {
    navigation: HomeNavigation
    hero: HomeHero
    briefing: HomeBriefing
    mainSkills: MainSkills
    projects: Projects
    bootcampProjects: BootcampProjects
    experiences: Experiences
    footer: Footer
  }
  rdProjectPage: {
    navigation: RdNavigation
    description: RdDescription
    briefing: RdBriefing
    mainFeatures: RdMainFeatures
    compShowcase: RdCompShowcase
    nextProject: NextProject
  }
}
