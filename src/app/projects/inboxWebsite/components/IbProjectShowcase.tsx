import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import CardShowcase from './showcase/CardShowcase'
import InputsShowcase from './showcase/InputShowcase'

export default function IbProjectShowcase() {
  return (
    <ProjectShowcase>
      <div className="flex w-full gap-3">
        <CardShowcase />
        <InputsShowcase />
      </div>
    </ProjectShowcase>
  )
}
