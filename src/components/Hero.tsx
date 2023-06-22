import Image from 'next/image'
import HeroImg from '../assets/Hero.png'
import CustomLink from '@/components/CustomLink'
import Squares from '../assets/Squares.png'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import MsOutlookIcon from '@/assets/icons/MsOutlookIcon'
import FilePdf from '@/assets/icons/FilePdf'

function Hero() {
  return (
    <div
      role="hero"
      className="flex w-full max-w-[1060px] justify-between py-8"
    >
      <Image
        src={HeroImg}
        alt="Rafael Mariscal, Software Developer with in perspective and crossed arms"
        quality={100}
        className="h-[28.125rem] w-[25rem] select-none rounded-lg shadow-custom-img"
      />
      <div className="relative h-fit w-full max-w-[28.75rem] text-gray-100">
        <h1 className="text-[3.25rem] font-bold leading-none tracking-[0.04em] drop-shadow-custom-text">
          Rafael Mariscal
        </h1>
        <h2 className="ml-[0.125rem] mt-[0.125rem] text-xl font-semibold leading-none text-gray-200 drop-shadow-custom-text">
          Web Developer / Project Manager
        </h2>
        <h3 className="my-5 ml-[0.125rem] text-lg font-semibold leading-snug drop-shadow-custom-text">
          I&#39;ve been developing solutions and managing projects in order to
          achieve goals.
        </h3>
        <div className="mb-8 ml-[0.125rem] flex flex-col gap-3 drop-shadow-custom-text">
          <CustomLink href={''} text="linkedin.com/in/rafael-mariscal">
            <LinkedInIcon />
          </CustomLink>
          <CustomLink href={''} text="rafael_mariscal_@outlook.com">
            <MsOutlookIcon />
          </CustomLink>
          <CustomLink href={''} text="Curriculum Vitae">
            <FilePdf />
          </CustomLink>
        </div>
        <Image
          src={Squares}
          alt=""
          quality={100}
          className="absolute bottom-0 left-0 translate-y-[100%] select-none"
        />
      </div>
    </div>
  )
}
export default Hero
