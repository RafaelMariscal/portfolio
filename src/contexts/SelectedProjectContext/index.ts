import { createContext } from 'react'

export type ProjectsType =
  | 'waiterApp'
  | 'desingSystem'
  | 'nextBlog'
  | 'videoPlatform'

interface useSelectedProjectProps {
  projectSelected: ProjectsType
  setProjectSelected: (state: ProjectsType) => void
}

export const SelectedProjectContext = createContext<useSelectedProjectProps>({
  projectSelected: 'waiterApp',
  setProjectSelected: (state: ProjectsType) => undefined,
})
