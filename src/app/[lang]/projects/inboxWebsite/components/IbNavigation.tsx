'use client'

import NavLogo from '@/assets/NavLogo'
import NavLink from '@/components/Navigation/NavLink'
import Navigation from '@/components/Navigation/NavigationCompose'
import MobileNav from './MobileNav'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client'
import { useParams } from 'next/navigation'
import { Locale } from '@/config/i18n.config'
import LangSwitch from '@/components/Navigation/LangSwitch'

export default function IbNavigation() {
  const [isShown, setIsShown] = useState(true)

  const params = useParams()
  const lang = params.lang as Locale
  const {
    ibProjectPage: {
      navigation: {
        pageTitle,
        briefing,
        design,
        development,
        components,
        nextProject,
      },
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
        'fixed top-0 z-50 w-full bg-cyan-800/80',
        'transition-all duration-300',
        isShown && 'md:visible md:top-0 md:backdrop-blur',
        !isShown && 'md:invisible md:-top-20',
      )}
    >
      <Navigation.Root className="max-xl:hidden">
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
        <Navigation.Content className="">
          <Navigation.List>
            <Navigation.Item>
              <NavLink href="/projects/inboxWebsite" title={pageTitle} newTab />
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
              <NavLink href="#componentsShowcase" title={components} scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#nextProject" title={nextProject} scroll />
            </Navigation.Item>
            <Navigation.Item>
              <LangSwitch />
            </Navigation.Item>
          </Navigation.List>
        </Navigation.Content>
      </Navigation.Root>
      <MobileNav />
    </div>
  )
}
