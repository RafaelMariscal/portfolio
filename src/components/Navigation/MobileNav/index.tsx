'use client'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import Navigation from '@/components/Navigation/NavigationCompose'
import NavLink from '../NavLink'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { Locale } from '@/config/i18n.config'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client'
import LangSwitch from '../LangSwitch'

export default function MobileNav() {
  const [isShown, setIsShown] = useState(true)
  const [open, setOpen] = useState(false)
  const triggerBoxRef = useRef<HTMLDivElement>(null)

  const params = useParams()
  const lang = params.lang as Locale
  const {
    home: { navigation },
  } = getDictionaryUseClient(lang)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const scrollController = () => {
      if (!triggerBoxRef.current) return null
      if (window.scrollY < triggerBoxRef.current.offsetHeight) return null
      if (window.scrollY >= 140) {
        triggerBoxRef.current.classList.add('bg-cyan-800/80', 'backdrop-blur')
      } else {
        triggerBoxRef.current.classList.remove(
          'bg-cyan-800/80',
          'backdrop-blur',
        )
      }
      if (lastScrollY < window.scrollY) {
        setIsShown(false)
      } else {
        setIsShown(true)
      }
      lastScrollY = window.scrollY
    }
    window.addEventListener('scroll', scrollController)
    return () => {
      window.removeEventListener('scroll', scrollController)
    }
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div
        ref={triggerBoxRef}
        aria-hidden={open}
        className={clsx(
          'fixed z-50 flex h-12 w-full justify-end',
          'transition-all duration-100',
          'aria-hidden:bg-transparent aria-hidden:backdrop-blur-none',
          'md:hidden',
          isShown && 'visible top-0',
          !isShown && 'invisible -top-20',
        )}
      >
        <Dialog.Trigger
          className="
            px-3 outline-none
            transition-all duration-300 
            data-[state=open]:mr-7
            data-[state=open]:bg-transparent
          "
        >
          <div
            aria-selected={open}
            className="
            block h-[.1875rem]
            w-8 rounded-full bg-gray-100 transition-transform duration-300
            aria-selected:w-7 aria-selected:translate-y-[.1875rem] 
            aria-selected:rotate-45
          "
          />
          <span
            aria-selected={open}
            className="
            aria-selected: mt-1
            block h-[.1875rem] w-6 rounded-full bg-cyan-400 
            transition-all duration-100 
            aria-selected:invisible aria-selected:mt-0 aria-selected:h-0
          "
          />
          <div
            aria-selected={open}
            className="
            mt-1 block
            h-[.1875rem] w-8 rounded-full bg-gray-100 transition-transform duration-300
            aria-selected:mt-0 aria-selected:w-7 
            aria-selected:-rotate-45
          "
          />
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed inset-0 z-40 bg-black/30
            backdrop-blur-sm
            data-[state='closed']:animate-[hide_500ms_ease_forwards]
            data-[state='open']:animate-[showUp_500ms_ease_forwards]
          "
        >
          <Dialog.Content
            className="
              fixed right-0 flex h-screen translate-x-[100%]
              flex-col items-end gap-8 bg-cyan-800 px-10 pt-4
              shadow-[0px_10px_20px_theme(colors.cyan.700)]
              data-[state=closed]:animate-[menuDisappear_600ms_ease_forwards]
              data-[state=open]:animate-[menuAppear_200ms_ease_forwards]
          "
          >
            <Dialog.Close className="h-6 w-6 outline-none" />
            <Navigation.Content>
              <Navigation.List className="flex-col px-0">
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink href="/" title={navigation.home} newTab />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink href="#briefing" title={navigation.brefing} scroll />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink
                    href="#projects"
                    title={navigation.projects}
                    scroll
                  />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink
                    href="#bootcamps"
                    title={navigation.bootcamps}
                    scroll
                  />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink
                    href="#experience"
                    title={navigation.experience}
                    scroll
                  />
                </Navigation.Item>
                <Navigation.Item>
                  <LangSwitch />
                </Navigation.Item>
              </Navigation.List>
            </Navigation.Content>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
