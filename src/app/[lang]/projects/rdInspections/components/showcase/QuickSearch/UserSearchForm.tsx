import FormSelect from '../FormComponents/FormSelect'
import FormCheckbox from '../FormComponents/FormCheckbox'
import FormButton from '../FormComponents/FormButton'
import FormDateLimit from '../FormComponents/FormDateLimit'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Info } from '@phosphor-icons/react'
import { isEqual, startOfDay } from 'date-fns'
import { userOptions } from '@/utils/mocks/selectOptionsMock'

const UserFormSchema = z
  .object({
    user: z
      .string({ required_error: ' ' })
      .max(100, { message: ' ' })
      .nonempty({ message: ' ' }),
    anyTime: z.coerce.boolean(),
    startDate: z.date(),
    endDate: z.date(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: 'Data Final deve ser igual ou posterior a data inicial',
    path: ['endDate'],
  })
  .refine((data) => data.startDate <= new Date(), {
    message: 'Data inicial deve igual ou anterior ao dia atual',
    path: ['startDate'],
  })

export type UserFormData = z.infer<typeof UserFormSchema>

const today = startOfDay(new Date())

export default function UserSearchForm() {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserFormSchema),
  })
  const userValue = watch('user')
  const anyTimeValue = watch('anyTime')
  const startDateValue = watch('startDate')
  const endDateValue = watch('endDate')

  const isThereAnyErrors =
    errors?.startDate?.message !== undefined ||
    errors?.endDate?.message !== undefined

  if (anyTimeValue) {
    !isEqual(startDateValue, today) && setValue('startDate', today)
    !isEqual(endDateValue, today) && setValue('endDate', today)
  }

  function handleSearchUser(data: UserFormData) {
    return console.log('search user form submitted', { data })
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchUser)}
      className="
        flex h-[calc(100%-3.125rem)] w-full flex-col justify-between
        text-sm font-semibold text-[#151D68]
      "
    >
      <div className="flex animate-showContent flex-col gap-3">
        <FormSelect
          label="Usuário:"
          inputName="user"
          options={userOptions}
          value={userValue}
          setValue={setValue}
          className={{
            label: 'w-[4.5rem] max-phones:ml-1 max-phones:w-fit',
            trigger: 'max-w-[12.5rem]',
            content: 'min-w-[12.5rem] max-w-xs',
          }}
          error={errors.user}
        />
        <FormCheckbox
          label="Qualquer Período:"
          inputName="anyTime"
          value={anyTimeValue}
          setValue={setValue}
        />
        <FormDateLimit
          startDateInputName="startDate"
          startDate={startDateValue}
          endDateInputName="endDate"
          endDate={endDateValue}
          setValue={setValue}
          disabled={anyTimeValue}
        />
        {isThereAnyErrors ? (
          <p
            className={clsx(
              'flex items-center justify-center gap-[0.125rem]',
              'text-xs text-red-500',
            )}
          >
            <Info weight="bold" color="#E73325" size={14} />
            {errors?.startDate?.message || errors?.endDate?.message}
          </p>
        ) : null}
      </div>

      <FormButton title="Buscar" className="mt-4" />
    </form>
  )
}
