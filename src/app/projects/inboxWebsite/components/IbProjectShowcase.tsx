import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import CardShowcase from './showcase/CardShowcase'
import InputsShowcase from './showcase/InputShowcase'
import AdvantageShowcase from './showcase/AdvantageShowcase'

export default function IbProjectShowcase() {
  return (
    <ProjectShowcase>
      <div className="flex w-full gap-3 max-tablets-sm:flex-col">
        <CardShowcase />
        <div className="flex max-w-lg flex-col gap-3">
          <InputsShowcase />
          <AdvantageShowcase />
        </div>
      </div>
    </ProjectShowcase>
  )
}
