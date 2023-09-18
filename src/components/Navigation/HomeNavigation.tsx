import NavLogo from '@/assets/NavLogo'
import NavLink from './NavLink'
import Navigation from './NavigationCompose'
import MobileNav from './MobileNav'

export default function HomeNavigation() {
  return (
    <>
      <Navigation.Root>
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
        <Navigation.Content>
          <Navigation.List>
            <Navigation.Item>
              <NavLink href="/" title="Home" newTab />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#briefing" title="Briefing" scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#projects" title="Projects" scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#experience" title="Experience" scroll />
            </Navigation.Item>
          </Navigation.List>
        </Navigation.Content>
      </Navigation.Root>
      <MobileNav />
    </>
  )
}
