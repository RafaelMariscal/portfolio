import ProjectShowcase from '@/components/ProjectsPage/ProjectShowcase'
import RdInputs from './showcase/RdInputs'
import RegisterDialogModal from './showcase/RegisterDialogModal'

export default function RdProjectShowcase() {
  return (
    <ProjectShowcase>
      <div className="flex gap-10">
        <RdInputs />
        <RegisterDialogModal />
        <div className="mt-4 h-5 w-24 bg-cyan-700" />
      </div>
      <div className="mt-4 h-56 max-w-xs bg-cyan-700" />
    </ProjectShowcase>
  )
}
