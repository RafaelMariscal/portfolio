import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import RdInputs from './showcase/RdInputs'

export default function RdProjectShowcase() {
  return (
    <ProjectShowcase>
      <RdInputs />
      <div className="mt-4 h-5 w-24 bg-cyan-700" />
      <div className="mt-4 h-56 max-w-xs bg-cyan-700" />
    </ProjectShowcase>
  )
}
