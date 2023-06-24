import NavLink from './NavLink'
import Link from 'next/link'
import NavLogo from '@/assets/NavLogo'

export default function Navigation() {
  return (
    <header className="flex gap-3 py-6 drop-shadow-custom-text">
      <Link
        href={'/'}
        className="outline-none transition-all"
        passHref={undefined}
      >
        <NavLogo />
      </Link>
      <nav>
        <ul className="flex h-full items-end gap-8 px-8">
          <NavLink href="/" title="Home" newTab />
          <NavLink href="#briefing" title="Briefing" />
          <NavLink href="#projects" title="Projects" />
          <NavLink href="#experience" title="Experience" />
          <NavLink href="/about" title="About" newTab />
          <NavLink href="/contact" title="Contact me" />
        </ul>
      </nav>
    </header>
  )
}
