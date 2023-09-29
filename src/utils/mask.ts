export const normalizeCnpjNumber = (value: String | undefined) => {
  if (!value) return ''
  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const normalizeCepNumber = (value: String | undefined) => {
  if (!value) return ''
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const normalizePhoneNumber = (value: String | undefined) => {
  if (!value) return ''
  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?$)/, '$1')
}

export const normalizeChassisNumber = (value: String | undefined) => {
  if (!value) return ''
  return value
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/([a-zA-Z0-9]{2})([a-zA-Z0-9])/, '$1 $2')
    .replace(/([a-zA-Z0-9]{7})([a-zA-Z0-9])/, '$1 $2')
    .replace(/([a-zA-Z0-9]{7} [a-zA-Z0-9]{1})([a-zA-Z0-9])/, '$1 $2')
    .replace(/( [a-zA-Z0-9]{7})[a-zA-Z0-9]+?$/, '$1')
}

export const normalizeNumber = (value: String | undefined) => {
  if (!value) return ''
  return value.replace(/[\D]/g, '').replace(/(\d{100})\d+?$/, '$1')
}

export const normalizeLetters = (value: String | undefined) => {
  if (!value) return ''
  return value.replace(/[\d]/g, '').replace(/(\D{100})\D+?$/, '$1')
}
