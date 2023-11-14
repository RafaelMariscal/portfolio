import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image, { StaticImageData } from 'next/image'
import RdLoginCardSrc from '@/assets/projects/rd-inspection/rd-login-card.png'
import Title from '@/components/Basic/Title'
import MainDashboardSrc from '@/assets/projects/rd-inspection/rd-main-dashboard.png'
import ModalSrc from '@/assets/projects/rd-inspection/rd-modal.png'
import FinancialDashboardSrc from '@/assets/projects/rd-inspection/rd-financial-dashboard.png'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'
import NavLink from '@/components/Navigation/NavLink'

const imagesSrc: StaticImageData[] = [
  MainDashboardSrc,
  ModalSrc,
  FinancialDashboardSrc,
]

export default function RdMainFeatures({ lang }: { lang: Locale }) {
  const {
    rdProjectPage: {
      mainFeatures: {
        sectionTitle,
        article: {
          auth: { title: authTitle, ...authParagraphs },
          dashboard: { title: dashTitle, p1, p2 },
        },
      },
    },
  } = getDictionaryServerOnly(lang)

  const authParagraphsKeys = Object.keys(
    authParagraphs,
  ) as (keyof typeof authParagraphs)[]

  return (
    <section
      id="mainFeatures"
      className="
        mx-auto w-full max-w-screen-article pt-14
        max-tablets:px-3
        max-md:max-w-lg
      "
    >
      <SectionTitle>
        {sectionTitle.map((text, index) => {
          if (index % 2) {
            return (
              <Highlight key={text + index} className="ml-1">
                {text}
              </Highlight>
            )
          } else {
            return text
          }
        })}
      </SectionTitle>

      <Title className="my-6">{authTitle}</Title>
      <Image
        src={RdLoginCardSrc}
        alt=""
        quality={100}
        className="
          float-right mb-4 ml-4 h-fit w-full max-w-[330px] select-none
          max-md:hidden
        "
      />
      <div>
        {authParagraphsKeys.map((key) => {
          const currP = authParagraphs[key]
          return (
            <Paragraph key={key} className="[&~p]:mt-4">
              {currP.map((text, index) => {
                if (index % 2) {
                  return <Highlight key={text + index}>{text}</Highlight>
                } else {
                  return text
                }
              })}
            </Paragraph>
          )
        })}
      </div>

      <Title className="mb-6 mt-12">{dashTitle}</Title>
      <Paragraph>
        {p1.map((text, index) => {
          if (index % 2) {
            return <Highlight key={text + index}>{text}</Highlight>
          } else {
            return text
          }
        })}
      </Paragraph>

      <Paragraph className="mt-4">
        {p2.map((text, index) => {
          if (index % 2) {
            return (
              <NavLink
                key={text + index}
                href="#componentsShowcase"
                title={text}
                scroll
                className="text-cyan-400 underline underline-offset-2 "
              />
            )
          } else {
            return text
          }
        })}
      </Paragraph>

      {imagesSrc.map((image, i) => (
        <Image
          key={image.src}
          src={image}
          alt={`Project Screenshot${i + 1}`}
          quality={100}
          placeholder="blur"
          className="mt-10 h-auto w-full [&_~img]:mt-4"
        />
      ))}
    </section>
  )
}
