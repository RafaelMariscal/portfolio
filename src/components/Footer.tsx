import Image from 'next/image'
import NavLogo from '@/assets/NavLogo'
import NavLink from './Navigation/NavLink'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import MsOutlookIcon from '@/assets/icons/MsOutlookIcon'
import Squares from '@/assets/Squares.png'
import WhatsappIcon from '@/assets/icons/WhatsappIcon'

export default function Footer() {
  return (
    <div
      role="container"
      className="
        relative flex h-[26.5rem] w-full max-w-7xl justify-between 
        overflow-hidden px-3 pt-16 drop-shadow-custom-text 
        
        max-md:max-w-[30.625rem] max-md:flex-col max-md:justify-start
        max-md:gap-10
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
          If you think that I can help you, I&#39;d love to talk about your
          problem. Shoot me an email or contact me through my socials here
          below.
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
            title="Click to chat"
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

      <nav className="flex flex-col gap-14">
        <ul className="flex flex-col gap-4 max-md:hidden">
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
        <span>© 2023</span>
      </nav>
    </div>
  )
}
