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
        className="pl-[.875rem] font-bold text-blue-700"
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
          shadow-custom-sm hover:bg-blue-steel-100 focus:bg-blue-steel-100 flex h-5 w-5 items-center justify-center
          rounded border border-blue-700 
          bg-light outline-none
          aria-[checked]:bg-blue-500 aria-[checked]:focus:shadow-[0_0_0_1px_theme(colors.blue.700)]
          [&_*]:aria-[checked]:fill-light
        "
      >
        <Checkbox.Indicator>
          <Check weight="bold" className="[&_*]:fill-blue-700" />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
