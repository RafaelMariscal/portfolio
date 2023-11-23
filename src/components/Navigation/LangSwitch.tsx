'use client'

import * as Select from '@radix-ui/react-select'
import { Locale, i18n } from '@/config/i18n.config'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Check, ChevronDown, Globe2 } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

function LangSwitch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const params = useParams()
  const lang = params.lang as Locale

  const pathname = usePathname()
  const pathList = pathname.split('/')
  const pathSet = new Set(pathList)

  const enPathname = '/en' + pathname
  const ptPathname = pathList
    .map((item) => {
      if (item === 'en') return 'pt'
      return item
    })
    .join('/')

  const enPath = pathSet.has('en') ? pathname : enPathname
  const ptPath = !pathSet.has('en') ? pathname : ptPathname

  function handleValueChange(newValue: Locale) {
    switch (newValue) {
      case 'en':
        router.push(enPath)
        break
      case 'pt':
        router.push(ptPath)
        break
      default:
        break
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <Select.Root
        open={open}
        onOpenChange={setOpen}
        value={lang}
        onValueChange={(value) => handleValueChange(value as Locale)}
      >
        <Select.Trigger
          className="
            flex w-28 translate-y-[.375rem] items-center justify-center
            gap-2 border border-gray-500 bg-gray-700 py-1 text-sm
            font-medium text-gray-100 outline-none
          "
        >
          <Select.Icon asChild>
            <Globe2 className="h-4 w-4" />
          </Select.Icon>
          <Select.Value placeholder={lang} />
          <Select.Icon asChild>
            <ChevronDown className="h-4 w-4" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            alignOffset={0}
            position="popper"
            align="center"
            className={twMerge(
              'z-50 w-28 bg-gray-700 text-gray-300 shadow-lg shadow-dark/20',
              'font-medium data-[state=open]:animate-[showUp_300ms_forwards]',
              'border-b border-l border-r border-gray-500',
            )}
          >
            <Select.Viewport>
              {i18n.locales.map((locale) => (
                <Select.Item
                  key={locale}
                  value={locale}
                  className="
                    flex cursor-pointer items-center justify-center
                    px-8 outline-none transition-colors 
                    duration-300 focus:bg-gray-600
                  "
                >
                  <div className="flex items-center py-1 text-sm">
                    <Select.ItemText>
                      {locale === 'en' ? 'en-US' : 'pt-BR'}
                    </Select.ItemText>
                    <Select.ItemIndicator className="absolute right-2">
                      <Check size={14} strokeWidth={2.5} />
                    </Select.ItemIndicator>
                  </div>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

export default LangSwitch
