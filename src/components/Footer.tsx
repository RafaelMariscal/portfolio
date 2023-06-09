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
        flex h-[26.5rem] w-full max-w-7xl justify-between overflow-hidden 
        px-3 pt-16 drop-shadow-custom-text
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

        <p className="w-full max-w-sm text-justify font-medium">
          If you think I can help you, I&#39;d love to talk about your problem.
          Shoot me an email or contact me through my socials here below.
        </p>

        <div className="flex flex-col gap-3">
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

      <Image
        src={Squares}
        alt="Squares blob image"
        className="h-fit select-none opacity-20"
      />

      <nav className="flex flex-col gap-14">
        <ul className="flex flex-col gap-4">
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
          <li>
            <NavLink href="/about" title="About" newTab />
          </li>
        </ul>
        <span>© 2023</span>
      </nav>
    </div>
  )
}
