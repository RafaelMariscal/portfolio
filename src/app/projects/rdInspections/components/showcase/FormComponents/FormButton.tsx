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
        'h-9 w-full rounded-[6px] bg-[#151D68] font-medium tracking-wide text-light',
        'select-none shadow-md shadow-dark/10 outline-none transition-all duration-75',
        'hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-500',
        'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-100',
        className,
      )}
      {...props}
    >
      {title}
    </button>
  )
}
