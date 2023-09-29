import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import RdInputs from './showcase/RdInputs'
import RegisterDialogModal from './showcase/RegisterDialogModal'

export default function RdProjectShowcase() {
  return (
    <ProjectShowcase>
      <div
        className="
          flex items-start gap-10 
          max-phones:flex-col
          max-phones:gap-4
        "
      >
        <RdInputs />
        <RegisterDialogModal />
      </div>
      <div className="mt-6 h-56 max-w-xs bg-cyan-700" />
    </ProjectShowcase>
  )
}
