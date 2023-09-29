import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export default function FormButton({
  title,
  className,
  ...props
}: FormButtonProps) {
  return (
    <button
      type={props.type || 'submit'}
      className={clsx(
        'h-9 w-full rounded-[6px] bg-blue-700 font-medium tracking-wide text-light',
        'shadow-custom-sm select-none outline-none transition-all duration-75',
        'hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-500',
        'disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-200',
        className,
      )}
      {...props}
    >
      {title}
    </button>
  )
}
