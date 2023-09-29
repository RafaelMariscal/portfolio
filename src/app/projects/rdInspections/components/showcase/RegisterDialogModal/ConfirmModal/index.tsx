import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { ReactNode } from 'react'

interface ConfirmModalProps {
  children: ReactNode
  visible: boolean
  setVisible: (state: boolean) => void
  action: () => void
}

export default function ConfirmModal({
  children,
  visible,
  setVisible,
  action,
}: ConfirmModalProps) {
  return (
    <AlertDialog.Root open={visible} onOpenChange={setVisible}>
      <AlertDialog.Trigger className="outline-none">
        {children}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className="
            animate-overlayShow fixed inset-0 flex items-center 
            justify-center bg-black bg-opacity-10 backdrop-blur-[2px]
          "
        />
        <AlertDialog.Content
          className="
            animate-contentShow shadow-custom-md fixed left-1/2 top-1/2 w-full max-w-[30.25rem]
            -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-100 p-4 outline-none
          "
        >
          <AlertDialog.Title className="font-bold text-blue-700">
            Essa ação irá fechar o formulário.
          </AlertDialog.Title>

          <AlertDialog.Description className="my-1 font-bold leading-snug text-blue-700/50">
            Ao fechar o formulário, todos os campos serão apagados. Ou seja,
            <strong className="font-bold">
              todas as informações serão perdidas.
            </strong>
          </AlertDialog.Description>
          <div className="mt-5 flex items-center justify-end gap-4">
            <AlertDialog.Cancel asChild className="outline-none">
              <button
                autoFocus
                className="
                  bg-blue-steel-200 text-blue-steel-700 hover:outline-blue-steel-700 focus:outline-blue-steel-700 rounded px-6
                  py-1 font-bold  hover:outline
                  hover:outline-2 
                  hover:outline-offset-2 focus:outline focus:outline-2
                  focus:outline-offset-2 
                "
              >
                Cancel
              </button>
            </AlertDialog.Cancel>

            <AlertDialog.Action asChild>
              <button
                onClick={action}
                className="
                  rounded bg-red-200 px-6 py-1 font-bold text-red-600
                  hover:outline hover:outline-2  hover:outline-offset-2
                  hover:outline-red-600 
                  focus:outline focus:outline-2 focus:outline-offset-2
                  focus:outline-red-600 
                "
              >
                Sair do formulário
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
