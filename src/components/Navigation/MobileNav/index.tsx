'use client'

import * as Dialog from '@radix-ui/react-dialog'
import NavLink from '../NavLink'
import { useState } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="
          h-8 pt-4 transition-all duration-300
          data-[state=open]:px-4 md:hidden
        "
      >
        <span
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
        <span
          aria-selected={open}
          className="
            mt-1 block
            h-[.1875rem] w-8 rounded-full bg-gray-100 transition-transform duration-300
            aria-selected:mt-0 aria-selected:w-7 
            aria-selected:-rotate-45
          "
        />
      </Dialog.Trigger>
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
              flex-col items-end gap-8 bg-cyan-800 px-10 pt-10
              shadow-[0px_10px_20px_theme(colors.cyan.700)]
              data-[state=closed]:animate-[menuDisappear_600ms_ease_forwards]
              data-[state=open]:animate-[menuAppear_200ms_ease_forwards]
          "
          >
            <Dialog.Close className="h-6 w-6 outline-none" />
            <nav>
              <ul className="flex h-full flex-col items-end gap-8">
                <li>
                  <NavLink
                    href="/"
                    title="Home"
                    newTab
                    onClick={() => setOpen(false)}
                  />
                </li>
                <li>
                  <NavLink
                    href="#briefing"
                    title="Briefing"
                    scroll
                    onClick={() => setOpen(false)}
                  />
                </li>
                <li>
                  <NavLink
                    href="#projects"
                    title="Projects"
                    scroll
                    onClick={() => setOpen(false)}
                  />
                </li>
                <li>
                  <NavLink
                    href="#experience"
                    title="Experience"
                    scroll
                    onClick={() => setOpen(false)}
                  />
                </li>
              </ul>
            </nav>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
