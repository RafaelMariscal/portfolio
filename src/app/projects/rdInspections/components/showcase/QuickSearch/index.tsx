'use client'

import DashboardCard from '../DashboardCard'
import FormController from '../FormComponents/FormController'
import ClientSearchForm from './ClientSearchForm'
import CardHeader from '../DashboardCard/CardHeader'
import VehicleSearchForm from './VehicleSearchForm'
import UserSearchForm from './UserSearchForm'
import { useState } from 'react'
import { FormContollerEnum, options } from '../RegisterDialogModal'

export default function QuickSearch() {
  const [formSelected, setFormSelected] = useState<FormContollerEnum>('usuário')
  return (
    <DashboardCard className="max-w-md">
      <CardHeader title="Busca Rápida:" />
      <div className="flex h-[calc(100%-3.125rem)] flex-col items-start justify-between px-4 pb-4">
        <FormController
          label="Busca por:"
          options={options}
          optionSelected={formSelected}
          setOptionSelected={setFormSelected}
          className="mb-4 mt-4"
          fit
        />

        {/* ugly, but it works ¯\_(ツ)_/¯ */}
        {formSelected === 'cliente' ? (
          <ClientSearchForm />
        ) : formSelected === 'veículo' ? (
          <VehicleSearchForm />
        ) : formSelected === 'usuário' ? (
          <UserSearchForm />
        ) : null}
      </div>
    </DashboardCard>
  )
}
