import { I18NConfig } from 'next/dist/server/config-shared'

const defaultLocale = 'pt'
const langs = [defaultLocale, 'en'] as const

const locales = langs as unknown as string[]
export const i18n: I18NConfig = {
  defaultLocale,
  locales,
  localeDetection: false,
}

export type Locale = (typeof langs)[number]
