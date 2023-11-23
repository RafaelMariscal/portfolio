import Image from 'next/image'
import NavLogo from '@/assets/NavLogo'
import NavLink from './Navigation/NavLink'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import MsOutlookIcon from '@/assets/icons/MsOutlookIcon'
import Squares from '@/assets/Squares.png'
import WhatsappIcon from '@/assets/icons/WhatsappIcon'
import Navigation from './Navigation/NavigationCompose'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function Footer({ lang }: { lang: Locale }) {
  const {
    home: {
      footer: { footerNav, leavingMessage, whatsappChat },
    },
  } = getDictionaryServerOnly(lang)
  return (
    <div
      role="container"
      className="
        relative flex h-[26.5rem] w-full max-w-7xl 
        justify-between overflow-hidden px-3 pt-16 drop-shadow-custom-text
        
        max-md:h-fit max-md:max-w-[30.625rem] max-md:flex-col
        max-md:justify-start max-md:gap-10
      "
    >
      <div className="flex flex-col gap-6">
        <NavLink
          href="/"
          title=""
          className="
            w-fit outline-none [&_*]:transition-all
             [&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-400
          "
          newTab
        >
          <NavLogo />
        </NavLink>

        <p className="w-full max-w-sm text-start font-medium max-tablets-xs:max-w-none">
          {leavingMessage}
        </p>

        <div className="flex flex-col gap-3 max-phones:gap-4">
          <NavLink
            href={'https://www.linkedin.com/in/rafael-mariscal/'}
            title="linkedin.com/in/rafael-mariscal"
            className="
              flex items-center gap-[.375rem] text-xs
              tracking-wider text-gray-100 duration-100 
              hover:text-cyan-400 focus:text-cyan-400 
              [&_*]:transition-all [&_*]:duration-100
              [&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-400
            "
            newTab
          >
            <LinkedInIcon />
          </NavLink>
          <NavLink
            href=""
            title="rafael_mariscal_@outlook.com"
            className="
              flex items-center gap-[.375rem] text-xs
              tracking-wider text-gray-100 duration-100 
              hover:text-cyan-400 focus:text-cyan-400 
              [&_*]:transition-all [&_*]:duration-100
              [&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-400
            "
            copy
          >
            <MsOutlookIcon />
          </NavLink>
          <NavLink
            newTab
            href="https://wa.me/5585981182281"
            title={whatsappChat}
            className="
                flex items-center gap-[.375rem] text-xs
                tracking-wider text-gray-100 duration-100 
                hover:text-cyan-400 focus:text-cyan-400 
                [&_*]:transition-all [&_*]:duration-100
                [&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-400
              "
          >
            <WhatsappIcon />
          </NavLink>
        </div>
      </div>

      <div
        className="
          -z-10 w-full max-w-sm 
          max-tablets:absolute max-tablets:right-1/3 max-tablets:top-16
          max-tablets:translate-x-1/2 
          
          max-md:right-0 max-md:top-full max-md:w-80 max-md:-translate-y-[40%] max-md:translate-x-0
        "
      >
        <Image
          src={Squares}
          alt="Squares blob image"
          className="
            mx-auto h-fit w-full -scale-x-100 select-none object-cover opacity-20
        "
        />
      </div>

      <Navigation.Content className="w-fit flex-col max-md:mt-4">
        <span className="mb-4 mr-7 block text-end text-sm text-gray-100/50 max-md:text-start">
          {footerNav.title}:
        </span>
        <Navigation.List className="flex-col whitespace-nowrap  max-md:items-start max-md:pl-0">
          <Navigation.Item>
            <NavLink href="/" title={footerNav.pages.home} newTab />
          </Navigation.Item>
          <Navigation.Item>
            <NavLink
              href="/projects/rdInspections"
              title={footerNav.pages.rdInspec}
              newTab
            />
          </Navigation.Item>
          <Navigation.Item>
            <NavLink
              href="/projects/jackedPlanner"
              title={footerNav.pages.jPlanner}
              newTab
            />
          </Navigation.Item>
          <Navigation.Item>
            <NavLink
              href="/projects/inboxWebsite"
              title={footerNav.pages.ibWebsite}
              newTab
            />
          </Navigation.Item>
          <span>© 2023</span>
        </Navigation.List>
      </Navigation.Content>
    </div>
  )
}
