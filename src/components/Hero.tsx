import Image from 'next/image'
import HeroImg from '../assets/Hero.png'
import Squares from '../assets/Squares.png'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import MsOutlookIcon from '@/assets/icons/MsOutlookIcon'
import WhatsappIcon from '@/assets/icons/WhatsappIcon'
import NavLink from './Navigation/NavLink'

function Hero() {
  return (
    <div
      id="hero"
      role="hero"
      className="flex h-fit w-full max-w-[1060px] justify-between gap-10 py-8"
    >
      <Image
        src={HeroImg}
        alt="Rafael Mariscal, Software Developer with in perspective and crossed arms"
        quality={100}
        className="h-[28.125rem] w-[25rem] select-none rounded shadow-custom-img"
      />

      <div className="relative w-full max-w-lg text-gray-100">
        <div className="absolute bottom-1/2 z-10 translate-y-1/2">
          <div>
            <h1 className="-ml-[0.1875rem] text-6xl font-bold leading-none tracking-[0.04em] drop-shadow-custom-text">
              Rafael Mariscal
            </h1>
            <h2 className="mt-[0.125rem] text-xl font-semibold leading-none text-gray-200 drop-shadow-custom-text">
              Full-Stack Software Developer - React / Node.js
            </h2>
            <h3
              className="
                my-8 ml-[0.125rem] w-full max-w-lg 
                text-lg font-semibold leading-tight drop-shadow-custom-text
                [&_span]:text-cyan-400
              "
            >
              I&#39;ve been <span>developing solutions</span> and{' '}
              <span>managing projects</span> to deliver solid results in order
              to achieve goals
            </h3>
          </div>

          <div className="ml-[0.125rem] flex flex-col gap-3 drop-shadow-custom-text">
            <NavLink
              newTab
              href={'https://www.linkedin.com/in/rafael-mariscal/'}
              title="linkedin.com/in/rafael-mariscal"
              className="
                flex items-center gap-[.375rem] text-xs
                tracking-wider text-gray-100 duration-100
                hover:text-cyan-400 focus:text-cyan-400 
                [&_*]:transition-all [&_*]:duration-100
                [&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-400
              "
            >
              <LinkedInIcon />
            </NavLink>

            <NavLink
              copy
              href={'https://www.linkedin.com/in/rafael-mariscal/'}
              title="rafael_mariscal_@outlook.com"
              className="
                flex items-center gap-[.375rem] text-xs
                tracking-wider text-gray-100 duration-100 
                hover:text-cyan-400 focus:text-cyan-400 
                [&_*]:transition-all [&_*]:duration-100
                [&_*]:hover:fill-cyan-400 [&_*]:focus:fill-cyan-400
              "
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

        <Image
          src={Squares}
          alt="Blob image with squares"
          quality={100}
          className="absolute bottom-[25%] left-0 w-full translate-y-[100%] -scale-x-100 select-none"
        />
      </div>
    </div>
  )
}
export default Hero
