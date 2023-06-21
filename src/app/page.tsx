import NavLogo from '@/assets/NavLogo'
import NavLinks from '@/components/NavLinks'
import Image from 'next/image'
import Link from 'next/link'
import HeroImg from '../assets/Hero.png'
import Rectangle from '../assets/Squares.png'
import CustomLink from '@/components/CustomLink'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cyan-800">
      <div className="flex w-full max-w-[1060px] gap-3 px-3 py-6">
        <Link
          href={'/'}
          className="outline-none transition-all focus:scale-[1.05]"
        >
          <NavLogo />
        </Link>

        <NavLinks />
      </div>

      <div
        role="hero"
        className="px-3 flex justify-between w-full max-w-[1060px] py-8"
      >
        <Image
          src={HeroImg}
          alt="Rafael Mariscal, Software Developer with in perspective and crossed arms"
          quality={100}
          className="rounded-lg shadow-custom-img w-[25rem] h-[28.125rem]"
        />
        <div className="relative text-gray-100 w-full max-w-[28.75rem] h-fit">
          <h1 className="text-[3.25rem] font-bold leading-none shadow-custom-text tracking-[0.04em]">
            Rafael Mariscal
          </h1>
          <h2 className="ml-[0.125rem] mt-[0.125rem] text-xl font-semibold leading-none shadow-custom-text text-gray-200">
            Web Developer / Project Manager
          </h2>
          <h3 className="ml-[0.125rem] my-5 text-lg font-semibold leading-snug shadow-custom-text">
            I&#39;ve been developing solutions and managing projects in order to
            achieve goals.
          </h3>
          <div className="ml-[0.125rem] flex flex-col gap-3 shadow-custom-text mb-8">
            <CustomLink href={''} text="linkedin.com/in/rafael-mariscal" />
            <CustomLink href={''} text="rafael_mariscal_@outlook.com" />
            <CustomLink href={''} text="Curriculum Vitae" />
          </div>
          <Image
            src={Rectangle}
            alt=""
            quality={100}
            className="absolute bottom-0 left-0 translate-y-[100%]"
          />
        </div>
      </div>
    </main>
  )
}
