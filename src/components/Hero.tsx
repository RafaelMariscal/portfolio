import Image from 'next/image'
import HeroImg from '../assets/Hero.png'
import CustomLink from '@/components/CustomLink'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import MsOutlookIcon from '@/assets/icons/MsOutlookIcon'
import FilePdf from '@/assets/icons/FilePdf'
import Rectangle from '../assets/Squares.png'

function Hero() {
  return (
    <div
      role="hero"
      className="flex justify-between w-full max-w-[1060px] py-8"
    >
      <Image
        src={HeroImg}
        alt="Rafael Mariscal, Software Developer with in perspective and crossed arms"
        quality={100}
        className="rounded-lg shadow-custom-img w-[25rem] h-[28.125rem] select-none"
      />
      <div className="relative text-gray-100 w-full max-w-[28.75rem] h-fit">
        <h1 className="text-[3.25rem] font-bold leading-none drop-shadow-custom-text tracking-[0.04em]">
          Rafael Mariscal
        </h1>
        <h2 className="ml-[0.125rem] mt-[0.125rem] text-xl font-semibold leading-none drop-shadow-custom-text text-gray-200">
          Web Developer / Project Manager
        </h2>
        <h3 className="ml-[0.125rem] my-5 text-lg font-semibold leading-snug drop-shadow-custom-text">
          I&#39;ve been developing solutions and managing projects in order to
          achieve goals.
        </h3>
        <div className="ml-[0.125rem] flex flex-col gap-3 drop-shadow-custom-text mb-8">
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
          src={Rectangle}
          alt=""
          quality={100}
          className="absolute bottom-0 left-0 translate-y-[100%] select-none"
        />
      </div>
    </div>
  )
}
export default Hero
