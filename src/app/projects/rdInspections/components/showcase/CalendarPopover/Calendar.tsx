/* eslint-disable */
import clsx from 'clsx'
import {
  add,
  differenceInDays,
  format,
  isEqual,
  isSameMonth,
  isToday,
  startOfDay,
  startOfWeek,
  sub,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  parse,
  isAfter,
  isBefore,
} from 'date-fns'
import { ptBR } from "date-fns/locale"
import { useState, KeyboardEvent } from 'react'
import { Control } from '@phosphor-icons/react'
import { UseFormSetValue } from 'react-hook-form'

interface CalenderComponentProps {
  name: string
  selectedDay: Date
  setSelectedDay: UseFormSetValue<any>
  prevDate?: Date
}

export function Calendar({
  name,
  selectedDay,
  setSelectedDay,
  prevDate
}: CalenderComponentProps) {
  const today = startOfDay(new Date())
  const [CurrentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firsDayOfCurrentMonth = parse(CurrentMonth, 'MMM-yyyy', new Date())

  const daysBetweenDates = differenceInDays(
    endOfWeek(endOfMonth(firsDayOfCurrentMonth)),
    startOfWeek(firsDayOfCurrentMonth),
  )

  const endOfCalendar = daysBetweenDates <= 35 // if there is only 5 rows of days into callendar, add another row.
    ? add(endOfMonth(firsDayOfCurrentMonth), { days: 7 })
    : endOfMonth(firsDayOfCurrentMonth)

  const newDays = eachDayOfInterval({
    start: startOfWeek(firsDayOfCurrentMonth),
    end: endOfWeek(endOfCalendar),
  })

  function handleMonth(m: number) {
    if (m > 0) {
      const firsDayOfNextMonth = add(firsDayOfCurrentMonth, { months: 1 })
      return setCurrentMonth(format(firsDayOfNextMonth, 'MMM-yyyy'))
    }
    const firsDayOfPrevMonth = sub(firsDayOfCurrentMonth, { months: 1 })
    return setCurrentMonth(format(firsDayOfPrevMonth, 'MMM-yyyy'))
  }

  function handleSelectDay(day: Date) {
    if (prevDate &&
      ((isEqual(day, today) || isBefore(day, today))) &&
      (isAfter(day, prevDate) || isEqual(day, prevDate))) {
      return setSelectedDay(name, day)
    } else if (!prevDate && (isEqual(day, today) || isBefore(day, today))) {
      return setSelectedDay(name, day)
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, day: Date) {
    if (event.code === "Enter" || event.code === "Space") {
      return handleSelectDay(day)
    }
    return null
  }

  return (
    <div className="bg-light rounded-md shadow-custom-sm">
      <div className="h-full w-full min-w-[236px] text-sm leading-tight px-3 pt-2 pb-1">
        <div className="flex items-center justify-between">
          <p className=" text-blue-700 font-semibold capitalize drop-shadow-custom-text">
            {format(firsDayOfCurrentMonth, 'MMMM yyyy', { locale: ptBR })}
          </p>

          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => handleMonth(-1)}
              className="
                cursor-pointer rounded p-1 overflow-hidden outline-none
                hover:bg-blue-steel-200 focus:bg-blue-steel-200
                hover:shadow-custom-sm focus:shadow-custom-sm
              "
            >
              <Control className="[&_*]:fill-blue-700 translate-y-[15%]" weight='bold' />
            </button>

            <button
              type="button"
              onClick={() => handleMonth(1)}
              className="
                cursor-pointer rounded p-1 overflow-hidden outline-none
                hover:bg-blue-steel-200 focus:bg-blue-steel-200
                hover:shadow-custom-sm focus:shadow-custom-sm
              "
            >
              <Control className="rotate-180 [&_*]:fill-blue-700 -translate-y-[15%]" weight='bold' />
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 font-semibold">
          <span className="flex h-5 w-full items-center justify-center text-blue-700">
            S
          </span>
          <span className="flex h-5 w-full items-center justify-center text-blue-700">
            M
          </span>
          <span className="flex h-5 w-full items-center justify-center text-blue-700">
            T
          </span>
          <span className="flex h-5 w-full items-center justify-center text-blue-700">
            W
          </span>
          <span className="flex h-5 w-full items-center justify-center text-blue-700">
            T
          </span>
          <span className="flex h-5 w-full items-center justify-center text-blue-700">
            F
          </span>
          <span className="flex h-5 w-full items-center justify-center text-blue-700">
            S
          </span>
        </div>

        <div className="grid grid-cols-7 place-items-center">
          {newDays.map((day) => (
            <div key={day.toString()} className={clsx('', {})}>
              <button
                type="button"
                onClick={() => handleSelectDay(day)}
                onKeyDown={(e) => handleKeyDown(e, day)}
                className={clsx(
                  'mt-[.625rem] h-6 w-6 rounded select-none border border-transparent',
                  'transition-colors duration-100 font-semibold outline-none',
                  'hover:shadow-custom-sm focus:shadow-custom-sm',
                  isEqual(day, selectedDay) && 'text-gray-100',
                  !isEqual(day, selectedDay) &&
                  isToday(day) &&
                  'text-red-500 font-semibold',
                  isEqual(day, prevDate) && 'bg-blue-steel-500 shadow-custom-sm text-gray-100',
                  isAfter(day, prevDate) && isBefore(day, selectedDay) && 'bg-blue-steel-100 text-blue-700',
                  !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firsDayOfCurrentMonth) &&
                  'hover:bg-blue-steel-100 focus:bg-blue-steel-100 hover:text-blue-700 focus:text-blue-700',
                  !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firsDayOfCurrentMonth) &&
                  'text-blue-steel-500 text-opacity-50',
                  isEqual(day, selectedDay) && isToday(day) && 'text-gray-100 bg-blue-500 shadow-custom-sm',
                  isEqual(day, selectedDay) && !isToday(day) && 'text-gray-100 bg-blue-500 shadow-custom-sm',
                  !isEqual(day, selectedDay) && 'text-blue-steel-500',
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </button>
              <span
                className={clsx(
                  'mx-auto -mt-1 block h-1 w-1 rounded-full',
                  false && 'bg-orange-500', // if scheduled for training
                  false && 'bg-cyan-500', // if scheduled for rest day
                  !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firsDayOfCurrentMonth) &&
                  false &&
                  'bg-gray-400', // markers of other months
                )}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
