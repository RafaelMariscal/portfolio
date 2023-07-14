import { useContext } from 'react'
import { SelectedProjectContext } from '.'

export const useSelectedProject = () => {
  const ctx = useContext(SelectedProjectContext)
  return ctx
}
