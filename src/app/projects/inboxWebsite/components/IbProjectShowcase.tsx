import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import CardShowcase from './showcase/CardShowcase'

export default function IbProjectShowcase() {
  return (
    <ProjectShowcase>
      <CardShowcase />
      <div className="h-10 max-w-screen-sm bg-cyan-700" />
      <div className="mt-4 h-5 w-24 bg-cyan-700" />
      <div className="mt-4 h-56 max-w-xs bg-cyan-700" />
    </ProjectShowcase>
  )
}
