'use client'

import NavLogo from '@/assets/NavLogo'
import NavLink from '@/components/Navigation/NavLink'
import Navigation from '@/components/Navigation/NavigationCompose'
import MobileNav from './MobileNav'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Locale } from '@/config/i18n.config'
import { useParams } from 'next/navigation'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client'
import LangSwitch from '@/components/Navigation/LangSwitch'

export default function JpNavigation() {
  const [isShown, setIsShown] = useState(true)

  const params = useParams()
  const lang = params.lang as Locale
  const {
    jpProjectPage: {
      navigation: { pageTitle, briefing, design, development, nextProject },
    },
  } = getDictionaryUseClient(lang)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const scrollController = () => {
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
      className={clsx(
        'fixed top-0 z-50 w-full bg-cyan-800/80 backdrop-blur',
        'transition-all duration-300',
        isShown && 'md:visible md:top-0',
        !isShown && 'md:invisible md:-top-20',
      )}
    >
      <Navigation.Root className="max-tablets:hidden">
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
        <Navigation.Content className="max-md:hidden">
          <Navigation.List>
            <Navigation.Item>
              <NavLink
                href="/projects/jackedPlanner"
                title={pageTitle}
                newTab
              />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#projectBriefing" title={briefing} scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#designProcess" title={design} scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#softwareDevelopment" title={development} scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#nextProject" title={nextProject} scroll />
            </Navigation.Item>
          </Navigation.List>
          <LangSwitch />
        </Navigation.Content>
      </Navigation.Root>
      <MobileNav />
    </div>
  )
}
