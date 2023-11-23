interface IbNavigation {
  pageTitle: string
  briefing: string
  design: string
  development: string
  components: string
  nextProject: string
  home: string
}

interface IbDescription {
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

interface IbBriefing {
  article: {
    title: string
    p1: string[]
    p2: string[]
    list1: string[]
    p3: string[]
  }
}

interface IbDesignProcess extends SectionDictionary {
  article: {
    p1: string[]
    p2: string[]
    p3: string[]
    p4: string[]
  }
}

interface JpSoftwareDevelopment extends SectionDictionary {
  p1: string[]
  p2: string[]
  p3: string[]
  p4: string[]
  p5: string[]
  p6: string[]
  p7: string[]
}

type IbCompShowcase = SectionDictionary

type IbNextProject = SectionDictionary

export interface IbProjectPage {
  navigation: IbNavigation
  description: IbDescription
  briefing: IbBriefing
  designProcess: IbDesignProcess
  softwareDevelopment: JpSoftwareDevelopment
  compShowcase: IbCompShowcase
  nextProject: IbNextProject
}
