'use client'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { FileText, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import ClientRegisterForm from './ClientRegisterForm'
import VehicleRegisterForm from './VehicleRegisterForm'
import UserRegisterForm from './UserRegisterForm'
import ConfirmModal from './ConfirmModal'
import FormController from '../FormComponents/FormController'

export type FormContollerEnum = 'cliente' | 'veículo' | 'usuário'
export const options: FormContollerEnum[] = ['cliente', 'veículo', 'usuário']

export default function RegisterDialogModal() {
  const [open, setOpen] = useState(false)
  const [formSelected, setFormSelected] = useState<FormContollerEnum>('cliente')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false)

  useEffect(() => {
    if (isFormSubmitted) {
      setOpen(false)
      setFormSelected('cliente')
    }
  }, [isFormSubmitted, setIsFormSubmitted])

  function handleOpenChange(open: boolean) {
    if (open) {
      setOpen(true)
    } else if (!isFormSubmitted) {
      setIsConfirmModalVisible(true)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={(open) => handleOpenChange(open)}>
      <Dialog.Trigger className="outline-none">
        <li
          className={clsx(
            'mb-6 mt-4 flex cursor-pointer items-center gap-1 rounded-md px-4 py-[2px]',
            'select-none font-medium text-light shadow-md shadow-dark/20 outline-none',
            'transition-all duration-100',
            'bg-[#151d68] hover:bg-blue-800 focus:bg-blue-800 active:bg-blue-600',
          )}
        >
          <FileText />
          Cadastro
        </li>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed inset-0 flex animate-overlayShow items-center 
            justify-center bg-black/10 backdrop-blur-[2px]
          "
        />
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 w-full max-w-[37.625rem] -translate-x-1/2 -translate-y-1/2 animate-contentShow
            rounded-lg bg-gray-100 p-4 shadow-md shadow-dark/10 outline-none
          "
        >
          <header className="mb-2 flex items-center justify-between">
            <Dialog.Title asChild>
              <h3 className="font-bold leading-tight text-[#151d68]">
                Formulário de Cadastro:
              </h3>
            </Dialog.Title>
            <Dialog.Close
              asChild
              className="cursor-pointer p-1 outline-none [&_*]:hover:fill-red-500 [&_*]:focus:fill-red-500"
            >
              <ConfirmModal
                visible={isConfirmModalVisible}
                action={() => setOpen(false)}
                setVisible={setIsConfirmModalVisible}
              >
                <X color="#151D68" />
              </ConfirmModal>
            </Dialog.Close>
          </header>

          <hr className="via-blue-steel-500 h-[2px] bg-gradient-to-r from-gray-100 from-5% to-gray-100 to-95%" />

          <FormController
            label="Cadastro de:"
            options={options}
            optionSelected={formSelected}
            setOptionSelected={setFormSelected}
            className="mb-6 mt-4"
          />

          {/* ugly, but it works ¯\_(ツ)_/¯ */}
          {formSelected === 'cliente' ? (
            <ClientRegisterForm setSubmitted={setIsFormSubmitted} />
          ) : formSelected === 'veículo' ? (
            <VehicleRegisterForm setSubmitted={setIsFormSubmitted} />
          ) : formSelected === 'usuário' ? (
            <UserRegisterForm setSubmitted={setIsFormSubmitted} />
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
