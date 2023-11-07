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
    <div
      className="
        flex items-center gap-2 
        max-phones:flex-col max-phones:items-start max-phones:gap-0
      "
    >
      <p className="w-[4.5rem] text-end font-bold max-phones:ml-1 max-phones:w-fit">
        Peíodo:
      </p>
      <div className="flex items-center justify-between gap-2 max-phones:w-full max-phones:max-w-[17rem] max-phones:gap-1">
        <CalendarPopover
          inputName={startDateInputName}
          selectedDay={startDate}
          setSelectedDay={setValue}
          disabled={disabled}
        />

        <span className="font-bold">|</span>

        <CalendarPopover
          inputName={endDateInputName}
          selectedDay={endDate}
          setSelectedDay={setValue}
          disabled={disabled}
          prevDate={startDate}
        />
      </div>
    </div>
  )
}
