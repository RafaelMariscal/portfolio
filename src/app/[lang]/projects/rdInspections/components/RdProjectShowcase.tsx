import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import RdInputs from './showcase/RdInputs'
import RegisterDialogModal from './showcase/RegisterDialogModal'
import QuickSearch from './showcase/QuickSearch'
import { Locale } from '@/config/i18n.config'

export default function RdProjectShowcase({ lang }: { lang: Locale }) {
  return (
    <ProjectShowcase lang={lang}>
      <div
        className="
          mb-4 flex items-start gap-10
          max-md:flex-col
          max-md:gap-4
        "
      >
        <RdInputs />
        <RegisterDialogModal />
      </div>
      <QuickSearch />
    </ProjectShowcase>
  )
}
