import { CalendarBlank } from '@phosphor-icons/react'
import * as Popover from '@radix-ui/react-popover'
import { useEffect, useState } from 'react'
import { Calendar } from './Calendar'
import { UseFormSetValue } from 'react-hook-form'
import { format, startOfDay } from 'date-fns'
import clsx from 'clsx'

interface CalendarPopoverProps {
  inputName: string
  selectedDay: Date
  setSelectedDay: UseFormSetValue<any>
  disabled?: boolean
  prevDate?: Date
}
const today = startOfDay(new Date())

export default function CalendarPopover({
  inputName,
  selectedDay,
  setSelectedDay,
  disabled,
  prevDate,
}: CalendarPopoverProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const selectedDayFormated = format(selectedDay || today, 'dd/MM/yyyy')

  useEffect(() => {
    if (selectedDay === undefined) return setSelectedDay(inputName, today)
    return () => setIsModalOpen(false)
  }, [selectedDay, setSelectedDay, inputName])

  function handleModalOpen(open: boolean) {
    if (disabled) return null
    setIsModalOpen(open)
  }

  return (
    <Popover.Root open={isModalOpen} onOpenChange={handleModalOpen}>
      <Popover.Trigger asChild>
        <button
          className={clsx(
            'flex h-8 select-none items-center justify-center',
            'gap-[.625rem] rounded-md px-[.625rem] py-1 shadow-md shadow-dark/10',
            'outline-none',
            {
              'cursor-not-allowed bg-gray-200 text-[#151D68] text-opacity-30':
                disabled === true,
              'bg-light focus:bg-blue-200/20': disabled === false,
            },
          )}
        >
          <span className="text-sm font-semibold">{selectedDayFormated}</span>
          <CalendarBlank
            weight="bold"
            className={clsx({
              '[&_*]:fill-[#151D68]': disabled === false,
              '[&_*]:fill-gray-500': disabled === true,
            })}
          />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content sideOffset={4} className="animate-showContent-300">
          <Calendar
            name={inputName}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            prevDate={prevDate}
          />
          <Popover.Arrow className="fill-light drop-shadow-sm" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
