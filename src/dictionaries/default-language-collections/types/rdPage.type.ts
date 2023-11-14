interface RdNavigation {
  pageTitle: string
  briefing: string
  features: string
  components: string
  nextProject: string
  home: string
}

interface RdDescription {
  p1: string[]
  p2: string[]
  table: {
    head: string
    body: string
  }[]
}

interface SectionDictionary {
  sectionTitle: string[]
}

interface RdBriefing extends SectionDictionary {
  article: {
    title: string
    p1: string[]
    p2: string[]
    list1: string[]
    p3: string[]
    p4: string[]
    p5: string[]
    list2: string[]
    p6: string[]
    p7: string[]
  }
}

interface RdMainFeatures extends SectionDictionary {
  article: {
    auth: {
      title: string
      p1: string[]
      p2: string[]
      p3: string[]
      p4: string[]
      p5: string[]
    }
    dashboard: {
      title: string
      p1: string[]
      p2: string[]
    }
  }
}

type RdCompShowcase = SectionDictionary

type NextProject = SectionDictionary

export interface RdProjectPage {
  navigation: RdNavigation
  description: RdDescription
  briefing: RdBriefing
  mainFeatures: RdMainFeatures
  compShowcase: RdCompShowcase
  nextProject: NextProject
}
