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
          'text-end font-bold text-blue-700',
          clsx({
            'font-semibold text-gray-500': disabled === true,
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
            'flex h-8 items-center justify-center rounded-[6px]',
            'shadow-custom-sm w-full px-[0.625rem] outline-none',
            'placeholder:text-red-500',
            'focus:bg-blue-steel-100',
            clsx({
              'border border-red-500': error?.message === ' ',
              'bg-light': disabled === false,
              '[&_*]:fill-blue-steel-200 cursor-not-allowed bg-gray-200 [&_*]:text-opacity-30':
                disabled === true,
            }),
            className?.trigger,
          )}
        >
          <Select.Value asChild>
            <span className="mx-auto truncate whitespace-nowrap pr-1 font-bold text-blue-700">
              {value === '' || value === undefined ? selectPlaceholder : value}
            </span>
          </Select.Value>
          <Select.Icon className="SelectIcon">
            <CaretDown color="#151D68" weight="bold" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={twMerge(
              'animate-overlayShow flex items-center overflow-hidden',
              'shadow-custom-sm rounded-[6px] bg-light outline-none',
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
                          hover:bg-blue-steel-100 focus:bg-blue-steel-100 flex cursor-pointer
                          select-none items-center justify-between px-[0.625rem]
                          py-[0.125rem] outline-none
                        "
                  >
                    <Select.ItemText asChild>
                      <span
                        className="
                              w-11/12 truncate whitespace-nowrap pr-1
                              text-center text-sm
                              font-bold text-blue-700
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
