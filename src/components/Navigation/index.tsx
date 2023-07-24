import MobileNav from './MobileNav'
import NavLink from './NavLink'
import NavLogo from '@/assets/NavLogo'

export default function Navigation() {
  return (
    <>
      <header
        className="
        flex w-full max-w-7xl gap-3 px-3 py-6 drop-shadow-custom-text 
        max-md:hidden
      "
      >
        <NavLink
          href="/"
          title=""
          className="
          w-fit outline-none max-md:hidden
           [&_*]:transition-all [&_*]:hover:fill-cyan-400
          [&_*]:focus:fill-cyan-500
        "
          newTab
        >
          <NavLogo />
        </NavLink>
        <nav className="max-md:hidden">
          <ul className="flex h-full items-end gap-8 px-8">
            <li>
              <NavLink href="/" title="Home" newTab />
            </li>
            <li>
              <NavLink href="#briefing" title="Briefing" scroll />
            </li>
            <li>
              <NavLink href="#projects" title="Projects" scroll />
            </li>
            <li>
              <NavLink href="#experience" title="Experience" scroll />
            </li>
          </ul>
        </nav>
      </header>
      <MobileNav />
    </>
  )
}
