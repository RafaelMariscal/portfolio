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
        className={clsx(
          'text-end font-bold text-[#151d68]',
          {
            'w-fit': fit === true,
            'w-28': fit === false,
          },
          'max-phones:ml-1 max-phones:w-fit',
        )}
      >
        {label}
      </span>

      <Select.Root value={optionSelected} onValueChange={setOptionSelected}>
        <Select.Trigger
          className="
            flex h-8 w-[7.5rem] items-center justify-center rounded-[6px] bg-light 
            px-[0.625rem] shadow-md shadow-dark/10 outline-none
            focus:bg-blue-200/20
          "
        >
          <Select.Value asChild>
            <span className="w-full truncate whitespace-nowrap text-center font-bold capitalize text-[#151d68]">
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
              flex w-[7.5rem] animate-overlayShow items-center overflow-hidden rounded-[6px] 
              bg-light shadow-md shadow-dark/10 outline-none
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
                          flex cursor-pointer select-none items-center justify-between 
                          px-[0.625rem] py-[0.125rem] outline-none
                          hover:bg-blue-200/20 focus:bg-blue-200/20
                        "
                    >
                      <Select.ItemText asChild>
                        <span
                          className="
                              w-[5rem] text-center text-sm font-bold 
                              capitalize text-[#151d68]
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
                              flex cursor-pointer select-none items-center justify-between 
                              px-[0.625rem] py-[0.125rem] outline-none
                              hover:bg-blue-200/20 focus:bg-blue-200/20
                            "
                          >
                            <Select.ItemText asChild>
                              <span
                                className="
                                  w-[5rem] text-center text-sm font-bold 
                                  capitalize text-[#151d68]
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
                      mb-px h-px bg-gradient-to-r
                      from-gray-100 from-5% 
                      via-[#151D68]/30 
                      to-gray-100 to-95%
                    "
                  />

                  <Select.Group>
                    <Select.Label
                      className="
                        px-2 text-[0.625rem] font-medium leading-snug text-[#151D68]/50
                      "
                    >
                      Apenas Admin
                    </Select.Label>
                    <Select.Item
                      value={'usuário'}
                      className="
                        flex cursor-pointer select-none items-center justify-between 
                        px-[0.625rem] py-[0.125rem] outline-none
                        hover:bg-blue-200/20 focus:bg-blue-200/20
                      "
                    >
                      <Select.ItemText asChild>
                        <span
                          className="
                            w-[5rem] text-center text-sm font-bold 
                            capitalize text-[#151d68]
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
