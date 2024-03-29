import { Eye, EyeSlash, IconContext } from '@phosphor-icons/react'
import clsx from 'clsx'
import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface FormInputClassNameProps {
  root?: string
  labelBox?: string
  label?: string
  errorMessage?: string
  input?: string
  iconBox?: string
}
interface FormInputProps {
  register: UseFormRegister<any>
  fieldName: string
  fieldTitle: string
  isVerified?: boolean
  placeholder?: string
  maxLength?: number
  className?: FormInputClassNameProps
  errorMessage?: string | undefined
  type?: 'text' | 'password'
  required?: boolean
  readOnly?: boolean
}

export default function FormInput({
  register,
  fieldName,
  fieldTitle,
  errorMessage,
  className,
  maxLength,
  placeholder,
  isVerified = true,
  type = 'text',
  required = false,
  readOnly = false,
}: FormInputProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <label
      htmlFor={fieldName}
      className={clsx(
        'relative flex items-center gap-2',
        'max-phones:w-full max-phones:flex-col max-phones:items-start max-phones:gap-0',
        className?.root,
      )}
    >
      <div
        className={clsx(
          'flex flex-col',
          'max-phones:flex-row max-phones:items-end max-phones:gap-1',
          className?.labelBox,
        )}
      >
        <span
          className={clsx(
            'font-bold leading-[1.15]',
            { 'font-semibold text-gray-300': isVerified === false },
            'max-phones:ml-1 max-phones:w-fit',
            className?.label,
          )}
        >
          {fieldTitle}
        </span>
        <span
          className={clsx(
            'truncate text-[0.625rem] leading-tight text-red-500',
            className?.errorMessage,
          )}
        >
          {errorMessage}
        </span>
      </div>
      <input
        id={fieldName}
        disabled={!isVerified}
        maxLength={maxLength}
        readOnly={readOnly}
        type={isVisible ? 'text' : type}
        placeholder={placeholder}
        className={clsx(
          'flex h-8 items-center truncate rounded-[6px]',
          'px-[0.625rem] tracking-tight shadow-md shadow-dark/10 outline-none',
          'disabled:cursor-not-allowed disabled:bg-gray-200',
          'placeholder:text-[#151D68] placeholder:opacity-30',
          'placeholder:font-bold placeholder:tracking-tight',
          ' focus:placeholder:text-transparent',
          {
            'border border-red-500': errorMessage !== undefined,
          },
          className?.input,
        )}
        {...register(fieldName, { required })}
      />
      {type === 'password' ? (
        <div
          onClick={() => setIsVisible((prev) => !prev)}
          className={clsx(
            'absolute right-4 top-1/2 inline-block -translate-y-1/2',
            'max-phones:-translate-y-[20%]',
            className?.iconBox,
          )}
        >
          <IconContext.Provider
            value={{
              color: '#151d68',
              size: 18,
              weight: 'duotone',
            }}
          >
            {type === 'password' ? (
              isVisible ? (
                <Eye className="cursor-pointer select-none" />
              ) : (
                <EyeSlash className="cursor-pointer select-none" />
              )
            ) : null}
          </IconContext.Provider>
        </div>
      ) : null}
    </label>
  )
}
