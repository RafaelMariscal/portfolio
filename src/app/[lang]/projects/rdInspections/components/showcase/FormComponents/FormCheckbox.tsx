import { Check } from '@phosphor-icons/react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'

interface FormCheckboxProps {
  inputName: string
  label: string
  value: boolean
  setValue: UseFormSetValue<any>
}

export default function FormCheckbox({
  inputName,
  label,
  value,
  setValue,
}: FormCheckboxProps) {
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    if (isFirstRender) {
      setValue(inputName, true)
      setIsFirstRender(false)
    }
  }, [isFirstRender, setIsFirstRender, setValue, inputName])

  return (
    <div className="flex items-center gap-2">
      <label
        className="pl-[.875rem] font-bold text-[#151D68] max-phones:pl-[.25rem]"
        htmlFor={inputName}
      >
        {label}
      </label>
      <Checkbox.Root
        id={inputName}
        onCheckedChange={(checked) => setValue(inputName, checked)}
        aria-checked={value || undefined}
        defaultChecked
        className="
          flex h-5 w-5 items-center justify-center rounded 
          border border-[#151D68] bg-light
          shadow-md shadow-dark/10 outline-none 
          hover:bg-blue-200/20 focus:bg-blue-200/20
          aria-[checked]:bg-[#2637dd] aria-[checked]:focus:shadow-[0_0_0_1px_#151D68]
          [&_*]:aria-[checked]:fill-light
        "
      >
        <Checkbox.Indicator>
          <Check weight="bold" className="[&_*]:fill-[#151D68]" />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
