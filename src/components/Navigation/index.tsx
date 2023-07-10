import NavLink from './NavLink'
import NavLogo from '@/assets/NavLogo'

export default function Navigation() {
  return (
    <header className="flex w-full max-w-7xl gap-3 px-3 py-6 drop-shadow-custom-text">
      <NavLink
        href="/"
        title=""
        className="
            w-fit outline-none [&_*]:transition-all
             [&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-500
          "
        newTab
      >
        <NavLogo />
      </NavLink>
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
