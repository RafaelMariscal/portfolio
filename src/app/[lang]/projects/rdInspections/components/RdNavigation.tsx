'use client'

import NavLogo from '@/assets/NavLogo'
import NavLink from '@/components/Navigation/NavLink'
import Navigation from '@/components/Navigation/NavigationCompose'
import MobileNav from './MobileNav'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Locale } from '@/config/i18n.config'
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client'

export default function RdNavigation() {
  const [isShown, setIsShown] = useState(true)

  const params = useParams()
  const lang = params.lang as Locale
  const {
    rdProjectPage: { navigation },
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
                href="/projects/rdInspections"
                title={navigation.pageTitle}
                newTab
              />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#projectBriefing"
                title={navigation.briefing}
                scroll
              />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink href="#mainFeatures" title="Main Features" scroll />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#componentsShowcase"
                title={navigation.components}
                scroll
              />
            </Navigation.Item>
            <Navigation.Item>
              <NavLink
                href="#nextProject"
                title={navigation.nextProject}
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
