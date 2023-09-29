export const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const percentFormatterBR = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const currencyFormatterBR = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'brl',
})
