import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import CardShowcase from './showcase/CardShowcase'
import InputsShowcase from './showcase/InputShowcase/InputsShowcase'

export default function IbProjectShowcase() {
  return (
    <ProjectShowcase>
      <div className="flex w-full gap-3">
        <CardShowcase />
        <InputsShowcase />
      </div>
      <div className="mt-4 h-5 w-24 bg-cyan-700" />
      <div className="mt-4 h-56 max-w-xs bg-cyan-700" />
    </ProjectShowcase>
  )
}
