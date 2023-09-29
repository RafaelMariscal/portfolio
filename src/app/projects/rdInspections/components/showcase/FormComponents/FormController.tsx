import { CaretDown, Check } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'
import { HTMLProps } from 'react'

interface FormControllerProps<OptionsType> extends HTMLProps<HTMLDivElement> {
  label: string
  options: OptionsType[]
  optionSelected: OptionsType
  setOptionSelected: (state: OptionsType) => void
  fit?: boolean
}

export default function FormController({
  label,
  options,
  optionSelected,
  setOptionSelected,
  fit = false,
  className,
  ...props
}: FormControllerProps<any>) {
  return (
    <div
      role="formController"
      className={clsx('flex items-center gap-2 text-sm', className)}
      {...props}
    >
      <span
        className={clsx('text-end font-bold text-blue-700', {
          'w-fit': fit === true,
          'w-28': fit === false,
        })}
      >
        {label}
      </span>

      <Select.Root value={optionSelected} onValueChange={setOptionSelected}>
        <Select.Trigger
          className="
            shadow-custom-sm focus:bg-blue-steel-100 flex h-8 w-[7.5rem] items-center 
            justify-center rounded-[6px] bg-light px-[0.625rem]
            outline-none
          "
        >
          <Select.Value asChild>
            <span className="w-full truncate whitespace-nowrap text-center font-bold capitalize text-blue-700">
              {optionSelected || 'Select User'}&nbsp;
            </span>
          </Select.Value>
          <Select.Icon className="SelectIcon">
            <CaretDown color="#151D68" weight="bold" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="
              animate-overlayShow shadow-custom-sm flex w-[7.5rem] items-center 
              overflow-hidden rounded-[6px] bg-light outline-none
            "
            position="popper"
            side="bottom"
            sideOffset={4}
          >
            <Select.Viewport className="w-full">
              {fit ? (
                <Select.Group>
                  {options.map((opt) => (
                    <Select.Item
                      key={opt}
                      value={opt}
                      className="
                          hover:bg-blue-steel-100 focus:bg-blue-steel-100 flex cursor-pointer select-none 
                          items-center justify-between px-[0.625rem]
                          py-[0.125rem] outline-none
                        "
                    >
                      <Select.ItemText asChild>
                        <span
                          className="
                              w-[5rem] text-center text-sm font-bold 
                              capitalize text-blue-700
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
              ) : (
                <>
                  <Select.Group>
                    {options.map((opt) => {
                      if (opt !== 'usuário')
                        return (
                          <Select.Item
                            key={opt}
                            value={opt}
                            className="
                              hover:bg-blue-steel-100 focus:bg-blue-steel-100 flex cursor-pointer select-none 
                              items-center justify-between px-[0.625rem]
                              py-[0.125rem] outline-none
                            "
                          >
                            <Select.ItemText asChild>
                              <span
                                className="
                                  w-[5rem] text-center text-sm font-bold 
                                  capitalize text-blue-700
                                "
                              >
                                {opt}
                              </span>
                            </Select.ItemText>
                            <Select.ItemIndicator>
                              <Check color="#151D68" size={14} />
                            </Select.ItemIndicator>
                          </Select.Item>
                        )
                      return null
                    })}
                  </Select.Group>

                  <Select.Separator
                    className="
                      bg-blue-steel-500 via-blue-steel-500 mb-px h-px
                      bg-gradient-to-r from-gray-100 
                      from-5% 
                      to-gray-100 to-95%
                    "
                  />

                  <Select.Group>
                    <Select.Label
                      className="
                        text-blue-steel-700 px-2 text-[0.625rem] font-medium leading-snug
                      "
                    >
                      Apenas Admin
                    </Select.Label>
                    <Select.Item
                      value={'usuário'}
                      className="
                        hover:bg-blue-steel-100 focus:bg-blue-steel-100 flex cursor-pointer select-none 
                        items-center justify-between px-[0.625rem]
                        py-[0.125rem] outline-none
                      "
                    >
                      <Select.ItemText asChild>
                        <span
                          className="
                            w-[5rem] text-center text-sm font-bold 
                            capitalize text-blue-700
                          "
                        >
                          {'usuário'}
                        </span>
                      </Select.ItemText>
                      <Select.ItemIndicator>
                        <Check color="#151D68" size={14} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Group>
                </>
              )}
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
