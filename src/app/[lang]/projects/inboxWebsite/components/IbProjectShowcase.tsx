import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import CardShowcase from './showcase/CardShowcase'
import InputsShowcase from './showcase/InputShowcase'
import AdvantageShowcase from './showcase/AdvantageShowcase'
import { Locale } from '@/config/i18n.config'

export default function IbProjectShowcase({ lang }: { lang: Locale }) {
  return (
    <ProjectShowcase lang={lang}>
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
