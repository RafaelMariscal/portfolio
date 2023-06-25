import NavLink from './NavLink'
import Link from 'next/link'
import NavLogo from '@/assets/NavLogo'

export default function Navigation() {
  return (
    <header className="flex gap-3 py-6 drop-shadow-custom-text">
      <Link
        href={'/'}
        className="
            w-fit outline-none
            [&_*]:transition-all [&_*]:hover:fill-cyan-400
          "
        target="_blank"
      >
        <NavLogo />
      </Link>
      <nav>
        <ul className="flex h-full items-end gap-8 px-8">
          <li>
            <NavLink href="/" title="Home" newTab />
          </li>
          <li>
            <NavLink href="#briefing" title="Briefing" />
          </li>
          <li>
            <NavLink href="#projects" title="Projects" />
          </li>
          <li>
            <NavLink href="#experience" title="Experience" />
          </li>
          <li>
            <NavLink href="/about" title="About" newTab />
          </li>
        </ul>
      </nav>
    </header>
  )
}
