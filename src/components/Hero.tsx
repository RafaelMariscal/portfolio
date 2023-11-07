import Image from 'next/image'
import HeroImg from '../assets/Hero.png'
import Squares from '../assets/Squares.png'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import MsOutlookIcon from '@/assets/icons/MsOutlookIcon'
import WhatsappIcon from '@/assets/icons/WhatsappIcon'
import NavLink from './Navigation/NavLink'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

function Hero({ lang }: { lang: Locale }) {
  const { homeHero } = getDictionaryServerOnly(lang)

  return (
    <div
      id="hero"
      role="hero"
      className="
        flex h-fit w-full max-w-[1060px] justify-between gap-10 py-8 
        max-md:flex-col-reverse max-md:items-center 
     "
    >
      <Image
        src={HeroImg}
        alt="Rafael Mariscal, Software Developer with in perspective and crossed arms"
        quality={100}
        priority
        className="
          h-[28.125rem] w-[25rem] select-none rounded 
          shadow-custom-img max-md:scale-110 max-phones:h-auto max-phones:w-11/12 max-phones:scale-100
        "
      />

      <div
        className="
          relative flex w-full max-w-lg items-center justify-center text-gray-100 
          max-tablets:items-start 
        "
      >
        <div className="max-tablets-xs:max-w-md max-phones:text-center">
          <h1
            className="
              -ml-[0.1875rem] text-6xl font-bold leading-none tracking-[0.04em] 
              drop-shadow-custom-text
            "
          >
            Rafael Mariscal
          </h1>
          <h2 className="mt-[0.125rem] text-xl font-semibold leading-none text-gray-200 drop-shadow-custom-text">
            {homeHero.role[0]}{' '}
            <span className="max-tablets:hidden max-md:inline-block max-tablets-xs:hidden">
              {homeHero.role[1]}
            </span>{' '}
            <span className="max-tablets:block max-md:inline-block max-tablets-xs:hidden">
              {homeHero.role[2]}
            </span>
          </h2>
          <h3
            className="
              my-8 ml-[0.125rem] w-full max-w-md
              text-xl font-semibold leading-tight drop-shadow-custom-text
              
              max-tablets:max-w-sm
              
              max-md:max-w-max
              
              max-tablets-xs:text-start max-tablets-xs:tracking-wide 

              max-phones:text-center max-phones:text-[1.375rem] max-phones:leading-[1.2]

              [&_span]:text-cyan-400
            "
          >
            {homeHero.description.map((text, index) => {
              if (index % 2) {
                return <span key={text + index}>{text}</span>
              } else {
                return text
              }
            })}
          </h3>

          <div
            className="
              ml-[0.125rem] flex flex-col gap-3 drop-shadow-custom-text 
              max-md:pb-6 
              max-phones:mx-auto max-phones:w-fit max-phones:gap-4
            "
          >
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
              title={homeHero.whatsappChat}
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
          priority
          className="
            absolute bottom-[25%] left-0 -z-10 w-full translate-y-[100%] 
            -scale-x-100 select-none max-tablets:bottom-[10%]
            max-phones:bottom-[15%]
          "
        />
      </div>
    </div>
  )
}
export default Hero
