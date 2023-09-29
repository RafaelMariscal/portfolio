import { UseFormSetValue } from 'react-hook-form'
import CalendarPopover from '../CalendarPopover'

interface FormDateLimitProps {
  startDateInputName: string
  startDate: Date
  endDateInputName: string
  endDate: Date
  setValue: UseFormSetValue<any>
  disabled: boolean
}

export default function FormDateLimit({
  startDateInputName,
  startDate,
  endDateInputName,
  endDate,
  setValue,
  disabled,
}: FormDateLimitProps) {
  return (
    <div className="flex items-center gap-2">
      <p className="w-[4.5rem] text-end font-bold">Peíodo:</p>

      <CalendarPopover
        inputName={startDateInputName}
        selectedDay={startDate}
        setSelectedDay={setValue}
        disabled={disabled}
      />

      <span className="font-bold">até</span>

      <CalendarPopover
        inputName={endDateInputName}
        selectedDay={endDate}
        setSelectedDay={setValue}
        disabled={disabled}
        prevDate={startDate}
      />
    </div>
  )
}
