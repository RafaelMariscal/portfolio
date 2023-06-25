import NavLogo from '@/assets/NavLogo'
import NavLink from './Navigation/NavLink'

export default function Footer() {
  return (
    <div
      role="container"
      className="flex w-full max-w-7xl justify-between px-3 drop-shadow-custom-text"
    >
      <div>
        <NavLogo />
        Footer
      </div>
      <nav>
        <ul className="flex flex-col gap-4">
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
        <span>© 2023</span>
      </nav>
    </div>
  )
}
