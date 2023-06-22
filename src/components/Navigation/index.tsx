'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import NavLogo from '@/assets/NavLogo'

export default function Navigation() {
  const [selected, setSelected] = useState('Home')

  return (
    <header className="flex gap-3 py-6">
      <Link
        href={'/'}
        className="outline-none transition-all focus:scale-[1.05]"
        passHref={undefined}
      >
        <NavLogo />
      </Link>
      <nav>
        <ul className="flex h-full items-end gap-8 px-8">
          <NavLink
            title="Home"
            currentState={selected}
            setState={setSelected}
          />
          <NavLink
            title="Briefing"
            currentState={selected}
            setState={setSelected}
          />
          <NavLink
            title="Projects"
            currentState={selected}
            setState={setSelected}
          />
          <NavLink
            title="Experience"
            currentState={selected}
            setState={setSelected}
          />
          <NavLink
            title="About"
            currentState={selected}
            setState={setSelected}
            prefetch
          />
          <NavLink
            title="Contact me"
            currentState={selected}
            setState={setSelected}
          />
        </ul>
      </nav>
    </header>
  )
}
