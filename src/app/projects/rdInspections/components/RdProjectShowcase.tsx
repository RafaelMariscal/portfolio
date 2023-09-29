import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import RdInputs from './showcase/RdInputs'
import RegisterDialogModal from './showcase/RegisterDialogModal'
import QuickSearch from './showcase/QuickSearch'

export default function RdProjectShowcase() {
  return (
    <ProjectShowcase>
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
