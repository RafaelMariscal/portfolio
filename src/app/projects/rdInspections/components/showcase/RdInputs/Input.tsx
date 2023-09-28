import { HTMLProps, useState } from 'react'
import { Eye, EyeSlash, User, Info, IconContext } from '@phosphor-icons/react'
import { UseFormRegister } from 'react-hook-form'
import { UserLoginFormData } from '.'

interface InputProps extends HTMLProps<HTMLInputElement> {
  inputname: keyof UserLoginFormData
  register: UseFormRegister<UserLoginFormData>
  errorMessage?: string
}

export default function Input(props: InputProps) {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const { register, errorMessage, ...rest } = props
  return (
    <label
      htmlFor={props.type}
      className="
        relative w-full min-w-[300px] rounded-lg border border-[#151d68]
        bg-gray-100 bg-transparent px-4 text-sm
        [&:has(input:disabled)]:bg-[#151d68]/30
    "
    >
      <input
        {...rest}
        {...register(props.inputname)}
        type={
          props.type === 'password'
            ? isPasswordShown
              ? 'text'
              : 'password'
            : props.type
        }
        id={props.type}
        className="
            h-full w-full max-w-[93%] bg-transparent py-4
            font-semibold leading-none text-[#151d68] outline-none 
            [&_~span]:valid:top-0 [&_~span]:focus:top-0 
          "
      />

      <span className="absolute -top-3 left-3 -translate-y-1/2 bg-gray-100 px-1 font-bold leading-none text-[#151d68] transition-all">
        {props.title}
      </span>

      {errorMessage && (
        <div className="absolute -top-4 right-1 flex items-center gap-[2px]">
          <Info weight="bold" color="#E73325" size={14} />
          <span className="block text-[.625rem] font-semibold leading-none text-red-500">
            {errorMessage}
          </span>
        </div>
      )}

      <div
        className={'absolute right-4 top-1/2 inline-block -translate-y-1/2'}
        onClick={() => setIsPasswordShown((prev) => !prev)}
      >
        <IconContext.Provider
          value={{
            color: '#151d68',
            size: 16,
            weight: 'duotone',
          }}
        >
          {props.type === 'password' ? (
            isPasswordShown ? (
              <Eye className="cursor-pointer select-none" />
            ) : (
              <EyeSlash className="cursor-pointer select-none" />
            )
          ) : (
            <User className="select-none" />
          )}
        </IconContext.Provider>
      </div>
    </label>
  )
}
