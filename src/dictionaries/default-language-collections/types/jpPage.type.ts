interface JpNavigation {
  pageTitle: string
  briefing: string
  design: string
  develpment: string
  nextProject: string
  home: string
}

interface JpDescription {
  p1: string[]
  p2: string[]
  table: {
    head: string
    body: string
  }[]
}

interface JpdBriefing {
  sectionTitle: string[]
  article: {
    title: string
    p1: string[]
    p2: string[]
    p3: string[]
    list1: string[]
    p4: string[]
  }
}

interface JpDesignProcess {
  sectionTitle: string[]
  article: {
    title: string
    p1: string[]
    p2: string[]
    p3: string[]
    figcaption: string
    p4: string[]
    p5: string[]
    p6: string[]
    p7: string[]
    p8: string[]
  }
}

interface JpSoftwareDevelopment {
  sectionTitle: string[]
  article: {
    p1: string[]
    p2: string[]
    list1: string[][]
    p3: string[]
    p4: string[]
  }
}

interface JpNextPage {
  sectionTitle: string[]
}

export interface JpProjectPage {
  navigation: JpNavigation
  description: JpDescription
  briefing: JpdBriefing
  designProcess: JpDesignProcess
  softwareDevelopment: JpSoftwareDevelopment
  nextProject: JpNextPage
}
