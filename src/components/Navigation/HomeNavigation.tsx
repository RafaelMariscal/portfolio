'use client'

import NavLogo from '@/assets/NavLogo'
import NavLink from './NavLink'
import Navigation from './NavigationCompose'
import MobileNav from './MobileNav'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export default function HomeNavigation() {
  const [isShown, setIsShown] = useState(true)
  const NavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const scrollController = () => {
      if (!NavRef.current) return null
      const componentHeight = NavRef.current.offsetHeight
      if (window.scrollY < componentHeight) return null
      if (lastScrollY < window.scrollY) {
        setIsShown(false)
      } else {
        setIsShown(true)
      }
      lastScrollY = window.scrollY
    }
    window.addEventListener('scroll', scrollController)
    return () => {
      window.removeEventListener('scroll', scrollController)
    }
  }, [])

  return (
    <div
      ref={NavRef}
      className={clsx(
        'sticky top-0 z-50 w-full bg-cyan-800/80 backdrop-blur',
        'transition-all duration-300',
        isShown && 'md:visible md:top-0',
        !isShown && 'md:invisible md:-top-20',
      )}
    >
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
    </div>
  )
}