import NavLogo from '@/assets/NavLogo'
import NavLink from '@/components/Navigation/NavLink'
import Navigation from '@/components/Navigation/NavigationCompose'
import MobileNav from './MobileNav'

export default function RdNavigation() {
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
              <NavLink href="/projects/rdInspections" title="Home" newTab />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#projectBriefing"
                title="Project Briefing"
                scroll
              />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#mainFeatures" title="Main Features" scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#componentShowcase"
                title="Components Showcase"
                scroll
              />
            </Navigation.Item>
          </Navigation.List>
        </Navigation.Content>
      </Navigation.Root>
      <MobileNav />
    </>
  )
}
