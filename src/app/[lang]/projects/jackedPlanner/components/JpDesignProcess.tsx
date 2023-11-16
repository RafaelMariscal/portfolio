import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image from 'next/image'
import NavLink from '@/components/Navigation/NavLink'
import F1CarSrc from '@/assets/projects/jackedPlanner/f1-car-reference.jpg'
import LogoSrc from '@/assets/projects/jackedPlanner/jp-logo.png'
import LogoProSrc from '@/assets/projects/jackedPlanner/jp-logoPRO.svg'
import LogoSmSrc from '@/assets/projects/jackedPlanner/jp-FavIcon.png'
import GuyImgSrc from '@/assets/projects/jackedPlanner/jp-crush-your-goals.png'
import GirlImgSrc from '@/assets/projects/jackedPlanner/jp-elevate-your-fitness.png'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'
import { printParagraphs } from '@/utils/printParagraphs'

const ProjectColors = ['#EEF4F6', '#343C3F', '#FE9016', '#61B8D9', '#121214']

export default function JpDesignProcess({ lang }: { lang: Locale }) {
  const {
    jpProjectPage: {
      designProcess: {
        sectionTitle,
        article: { figcaption, ...paragraphs },
      },
    },
  } = getDictionaryServerOnly(lang)

  const firstPs = [paragraphs.p1, paragraphs.p2]
  const secPs = [paragraphs.p5, paragraphs.p6, paragraphs.p7]
  return (
    <section id="designProcess" className="pt-14">
      <div
        className="
          mx-auto w-full max-w-screen-article
          max-tablets:px-3 max-md:max-w-lg
        "
      >
        <SectionTitle className="max-phones:leading-none">
          {sectionTitle.map((text, index) => {
            if (index % 2) {
              return (
                <Highlight
                  key={text + index}
                  className="block phones:ml-1 phones:inline"
                >
                  {text}
                </Highlight>
              )
            } else {
              return text
            }
          })}
        </SectionTitle>

        {printParagraphs(firstPs, true)}

        <Paragraph className="mt-4">
          {paragraphs.p3.map((text, index) => {
            if (index % 2) {
              return (
                <NavLink
                  key={text + index}
                  href="https://www.mclaren.com/racing/formula-1/"
                  title={text}
                  newTab
                  className="font-medium text-cyan-400 underline underline-offset-2"
                />
              )
            } else {
              return text
            }
          })}
        </Paragraph>
      </div>
      <figure
        className="
          relative pb-3 
          after:absolute after:bottom-0 after:left-1/2 after:h-px 
          after:w-full after:max-w-screen-article after:-translate-x-1/2 
          after:bg-gray-100/20 
          max-tablets:after:px-3 max-md:after:max-w-lg
        "
      >
        <Image
          src={F1CarSrc}
          alt="Formula 1 car promo image in 3D reder."
          className="mt-6 h-auto w-full max-w-screen-tablets"
          quality={100}
          placeholder="blur"
        />
        <figcaption
          className="
            mx-auto mt-2 max-w-screen-article text-sm opacity-50
            max-tablets:px-3 max-md:max-w-lg
          "
        >
          {figcaption}
        </figcaption>
      </figure>
      <div
        className="
          mx-auto mt-6 flex w-full max-w-screen-article flex-col
          max-tablets:px-3 max-md:max-w-lg
        "
      >
        {printParagraphs([paragraphs.p4])}

        <div className="flex gap-4">
          {ProjectColors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="
                relative h-24 w-full border border-gray-500
                max-md:h-16
                
              "
            >
              <span className="absolute bottom-0 right-0 bg-light px-1 text-xs font-semibold text-cyan-800">
                {color}
              </span>
            </div>
          ))}
        </div>

        {printParagraphs(secPs)}

        <div
          className="
            mx-auto flex items-center gap-4
            max-md:flex-col max-md:gap-0
          "
        >
          <div
            className="
              flex w-fit max-w-[240px] flex-col gap-3
              max-md:max-w-none max-md:flex-row
              max-sm:w-auto max-sm:max-w-sm max-sm:flex-col
            "
          >
            <Image src={LogoSrc} alt="logo" />
            <div className="flex flex-col gap-3">
              <Image src={LogoProSrc} alt="Logo Pro" />
              <Image
                src={LogoSmSrc}
                alt="Small logo"
                className="h-auto max-h-[2.5rem] w-full max-w-[2.5rem] max-sm:hidden"
              />
            </div>
          </div>
          <div
            className="
              flex justify-center gap-4 py-2
              max-sm:flex-wrap
            "
          >
            <Image
              src={GuyImgSrc}
              alt="Logo Pro"
              className="h-fit max-w-[240px] max-sm:w-full max-sm:max-w-sm"
            />
            <Image
              src={GirlImgSrc}
              alt="Small logo"
              className="h-fit max-w-[240px] max-sm:w-full max-sm:max-w-sm"
            />
          </div>
        </div>
        {printParagraphs([paragraphs.p8])}
      </div>
    </section>
  )
}
