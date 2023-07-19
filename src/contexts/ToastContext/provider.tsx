'use client'

import { ReactNode, useEffect, useState } from 'react'
import { ToastContext } from '.'
import Toast from '@/components/Toast'

interface GlobalToastContextProviderProps {
  children: ReactNode
}

export const GlobalToastContextProvider = ({
  children,
}: GlobalToastContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [timer, setTimer] = useState(3000)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, timer)
    }
  }, [isOpen, timer])

  function handleShowToastMessage(newMessage: string) {
    setMessage(newMessage)
    if (isOpen) {
      setIsOpen(false)
      setTimeout(() => {
        setIsOpen(true)
      }, 400)
    } else {
      setIsOpen(true)
    }
    return null
  }

  return (
    <ToastContext.Provider
      value={{
        isOpen,
        setIsOpen,
        message,
        setMessage,
        handleShowToastMessage,
        timer,
        setTimer,
      }}
    >
      {children}
      <Toast message={message} isOpen={isOpen} />
    </ToastContext.Provider>
  )
}
