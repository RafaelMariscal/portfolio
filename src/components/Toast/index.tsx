import clsx from 'clsx'
import { ToastMessage } from './ToastMessage'

interface ToastMessageProps {
  message: string
  isOpen: boolean
}

export default function Toast({ isOpen, message }: ToastMessageProps) {
  return (
    <ToastMessage.Root
      aria-hidden={!isOpen}
      className={clsx(
        "aria-[hidden='false']:animate-[swipeIn_200ms_ease-out_forwards]",
        "aria-[hidden='true']:animate-[swipeOut_300ms_ease-in_forwards]",
      )}
    >
      <ToastMessage.Title title={message} />
    </ToastMessage.Root>
  )
}
