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
            fixed inset-0 flex animate-overlayShow items-center 
            justify-center bg-black bg-opacity-10 backdrop-blur-[2px]
          "
        />
        <AlertDialog.Content
          className="
            fixed left-1/2 top-1/2 w-full max-w-[30.25rem] -translate-x-1/2 -translate-y-1/2 animate-contentShow
            rounded-lg bg-gray-100 p-4 shadow-md shadow-dark/10 outline-none
          "
        >
          <AlertDialog.Title className="font-bold text-[#151d68]">
            Essa ação irá fechar o formulário.
          </AlertDialog.Title>

          <AlertDialog.Description className="my-1 font-bold leading-snug text-[#151d68]/50">
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
                  rounded bg-[#151d68]/10 px-6 py-1 font-bold text-[#151d68]
                  hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-[#151d68]/50 
                  focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#151d68]/50 
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
