'use client'

import NavLink from '@/components/Navigation/NavLink'
import Navigation from '@/components/Navigation/NavigationCompose'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useRef, useState } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const triggerBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastScroll = 0
    function handleScroll(e: Event) {
      const curretScroll = window.scrollY
      const IsMenuVisible =
        !triggerBoxRef.current?.classList.contains('-translate-y-32')

      if (curretScroll <= 110) {
        triggerBoxRef.current?.classList.remove('shadow-md')
      } else if (curretScroll > lastScroll && IsMenuVisible) {
        triggerBoxRef.current?.classList.add('-translate-y-32', 'shadow-md')
      } else if (curretScroll < lastScroll && !IsMenuVisible) {
        triggerBoxRef.current?.classList.remove('-translate-y-32')
      }
      lastScroll = curretScroll
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div
        ref={triggerBoxRef}
        aria-hidden={open}
        className="
          fixed z-50 flex h-12 w-full justify-end 
          bg-cyan-800/80 backdrop-blur
          transition-all duration-100
          aria-hidden:bg-transparent
          tablets:hidden
        "
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
                  <NavLink href="/projects/rdInspections" title="Home" newTab />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink
                    href="#projectBriefing"
                    title="Project Briefing"
                    scroll
                  />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink href="#mainFeatures" title="Main Features" scroll />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink
                    href="#componentsShowcase"
                    title="Components Showcase"
                    scroll
                  />
                </Navigation.Item>
                <Navigation.Item onClick={() => setOpen(false)}>
                  <NavLink href="#nextProject" title="Next Project" scroll />
                </Navigation.Item>
              </Navigation.List>
            </Navigation.Content>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
