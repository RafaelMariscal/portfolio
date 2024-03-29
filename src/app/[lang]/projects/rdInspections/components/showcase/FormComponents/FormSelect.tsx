import { CaretDown, Check } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'
import { useEffect } from 'react'
import { FieldError, UseFormSetValue } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface SelectClassName {
  label?: string
  trigger?: string
  content?: string
}

interface FormSelectProps<OptionsType> {
  label: string
  options: OptionsType[]
  inputName: string
  value: OptionsType
  setValue: UseFormSetValue<any>
  className?: SelectClassName
  error?: FieldError
  disabled?: boolean
  selectPlaceholder?: string
}

export default function FormSelect({
  label,
  options,
  inputName,
  value,
  setValue,
  className,
  error,
  disabled = false,
  selectPlaceholder = 'Selecione o usuário',
}: FormSelectProps<any>) {
  const selectOptions = [selectPlaceholder, ...options]

  useEffect(() => {
    if (value === undefined) return setValue(inputName, '')
  }, [value, setValue, inputName])

  function handleSelectOption(value: string) {
    if (value === selectPlaceholder) return setValue(inputName, '')
    setValue(inputName, value)
  }

  return (
    <div role="formController" className="flex items-center gap-2 text-sm">
      <span
        className={twMerge(
          'text-end font-bold text-[#151D68]',
          clsx({
            'font-semibold text-gray-300': disabled === true,
          }),
          className?.label,
        )}
      >
        {label}
      </span>

      <Select.Root
        disabled={disabled}
        value={value}
        onValueChange={handleSelectOption}
      >
        <Select.Trigger
          className={twMerge(
            'relative flex h-8 items-center justify-center rounded-[6px]',
            'w-full px-[0.625rem] shadow-md shadow-dark/10 outline-none',
            'placeholder:text-red-500',
            'focus:bg-blue-200/20',
            clsx({
              'border border-red-500': error?.message === ' ',
              'bg-light': disabled === false,
              'cursor-not-allowed bg-gray-200 [&_*]:fill-blue-200/20 [&_*]:text-opacity-30':
                disabled === true,
            }),
            className?.trigger,
          )}
        >
          <Select.Value asChild>
            <span className="mx-auto truncate whitespace-nowrap pr-1 font-bold text-[#151D68]">
              {value === '' || value === undefined ? selectPlaceholder : value}
            </span>
          </Select.Value>
          <Select.Icon className="absolute right-2">
            <CaretDown color={disabled ? '#9c9c9c' : '#151D68'} weight="bold" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={twMerge(
              'flex animate-overlayShow items-center overflow-hidden',
              'rounded-[6px] bg-light shadow-md shadow-dark/10 outline-none',
              className?.content,
            )}
            position="popper"
            side="bottom"
            sideOffset={4}
          >
            <Select.Viewport className="w-full">
              <Select.Group>
                {selectOptions.map((opt, index) => (
                  <Select.Item
                    key={opt + index}
                    value={opt}
                    className="
                          flex cursor-pointer select-none items-center
                          justify-between px-[0.625rem] py-[0.125rem] outline-none
                          hover:bg-blue-200/20 focus:bg-blue-200/20
                        "
                  >
                    <Select.ItemText asChild>
                      <span
                        className="
                              w-11/12 truncate whitespace-nowrap pr-1
                              text-center text-sm
                              font-bold text-[#151D68]
                            "
                      >
                        {opt}
                      </span>
                    </Select.ItemText>
                    <Select.ItemIndicator>
                      <Check color="#151D68" size={14} />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
