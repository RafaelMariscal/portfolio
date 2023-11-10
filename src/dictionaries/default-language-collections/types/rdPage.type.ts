export interface RdNavigation {
  pageTitle: string
  briefing: string
  features: string
  components: string
  nextProject: string
}

export interface RdDescription {
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

export interface RdBriefing extends SectionDictionary {
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

export interface RdMainFeatures extends SectionDictionary {
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
    }
  }
}

export type RdCompShowcase = SectionDictionary

export type NextProject = SectionDictionary
