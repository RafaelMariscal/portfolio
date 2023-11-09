'use client'

import NavLogo from '@/assets/NavLogo'
import NavLink from './NavLink'
import Navigation from './NavigationCompose'
import MobileNav from './MobileNav'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client'
import { useParams } from 'next/navigation'
import { Locale } from '@/config/i18n.config'

export default function HomeNavigation() {
  const [isShown, setIsShown] = useState(true)
  const NavRef = useRef<HTMLDivElement>(null)

  const params = useParams()
  const lang = params.lang as Locale
  const { homeNavigation } = getDictionaryUseClient(lang)

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
        'sticky top-0 z-50 w-full bg-cyan-800/80',
        'transition-all duration-300',
        isShown && 'md:visible md:top-0 md:backdrop-blur',
        !isShown && 'md:invisible md:-top-20',
      )}
    >
      <Navigation.Root className="max-md:hidden">
        <NavLink
          href="/"
          title=""
          className="
            w-fit outline-none
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
              <NavLink href="/" title={homeNavigation.home} newTab />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#briefing" title={homeNavigation.brefing} scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#projects"
                title={homeNavigation.projects}
                scroll
              />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#bootcamps"
                title={homeNavigation.bootcamps}
                scroll
              />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#experience"
                title={homeNavigation.experience}
                scroll
              />
            </Navigation.Item>
          </Navigation.List>
        </Navigation.Content>
      </Navigation.Root>
      <MobileNav />
    </div>
  )
}
