import Highlight from '@/components/Basic/Highlight'
import List from '@/components/Basic/List'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image from 'next/image'
import LoginPageSrc from '@/assets/projects/jackedPlanner/screenshots/jp-loginPage.png'
import Modal1Src from '@/assets/projects/jackedPlanner/screenshots/jp-modal1.png'
import Modal2Src from '@/assets/projects/jackedPlanner/screenshots/jp-modal2.png'
import DashboardSrc from '@/assets/projects/jackedPlanner/screenshots/jp-dashboard.png'
import Mobile1Src from '@/assets/projects/jackedPlanner/screenshots/jp-mobile1.png'
import Mobile2Src from '@/assets/projects/jackedPlanner/screenshots/jp-mobile2.png'
import Mobile3Src from '@/assets/projects/jackedPlanner/screenshots/jp-mobile3.png'
import Mobile4Src from '@/assets/projects/jackedPlanner/screenshots/jp-mobile4.png'
import NavLink from '@/components/Navigation/NavLink'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'
import { printParagraphs } from '@/utils/printParagraphs'

const modalImages = [Modal1Src, Modal2Src]
const mobileImages = [Mobile1Src, Mobile2Src, Mobile3Src, Mobile4Src]

export default function JpSoftwareDevelopment({ lang }: { lang: Locale }) {
  const {
    jpProjectPage: {
      softwareDevelopment: {
        sectionTitle,
        article: { list1, ...paragraphs },
      },
    },
  } = getDictionaryServerOnly(lang)
  const firstList = [paragraphs.p1, paragraphs.p2]

  return (
    <section id="softwareDevelopment" className="pt-14">
      <div
        className="
          mx-auto w-full max-w-screen-article
          max-tablets:px-3 max-md:max-w-lg
        "
      >
        <SectionTitle className="leading-none">
          {sectionTitle.map((text, index) => {
            if (index % 2) {
              return (
                <Highlight key={text + index} className="block">
                  {text}
                </Highlight>
              )
            } else {
              return text
            }
          })}
        </SectionTitle>

        {printParagraphs(firstList, true)}

        <Paragraph className="mt-6">
          <Highlight>
            Software development planning is crucial as it sets the foundation
            for a successful project
          </Highlight>
          . It defines the project&rsquo;s scope, goals, and the technology
          stack, ensuring alignment with business key objectives. Effective
          planning promotes team coordination, budget management, and
          facilitates on-time project delivery.
        </Paragraph>

        <Paragraph className="mt-4">
          About tech stack, I&rsquo;ve strategically used{' '}
          <Highlight>JavaScript</Highlight>,<Highlight>TypeScript, </Highlight>
          <Highlight>ReactJS,</Highlight> and <Highlight>Tailwind</Highlight> as
          main Front End tools to create a robust, modern and user-friendly
          interface that perfectly aligns with the project&rsquo;s objectives.
          Furthermore, the integration of <Highlight>Firebase</Highlight> - Back
          End as a Service provider - streamlines the project implementation and
          enhances the development process. Specifically for this project, we
          used the following Firebase services:
        </Paragraph>

        <List.Content className="mt-4 [&_li]:mt-4">
          {list1.map((item, i) => (
            <List.Item key={item[0] + i} className="text-gray-200">
              {item.map((text, index) => {
                if (index % 2) {
                  return text
                } else {
                  return (
                    <Highlight
                      key={text + index}
                      className="text-gray-100 underline underline-offset-2"
                    >
                      {text}
                    </Highlight>
                  )
                }
              })}
            </List.Item>
          ))}
        </List.Content>

        {printParagraphs([paragraphs.p3])}

        <Paragraph className="mt-4">
          {paragraphs.p4.map((text, index) => {
            if (index % 2) {
              return (
                <NavLink
                  key={text + index}
                  href="https://jackedplannerreact.web.app/"
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

      <div
        className="
          relative mt-6 w-screen overflow-hidden bg-dot-pattern px-6 pb-6 pt-4
          before:absolute before:inset-0 before:-z-10 before:bg-gray-100
        "
      >
        <div
          className="
            mx-auto flex w-fit flex-col gap-5
            [&_img]:transition-transform
            hover:[&_img]:scale-[103%]
          "
        >
          <Image
            className="w-full max-w-screen-tablets"
            src={LoginPageSrc}
            alt="Jacked Plnner SaaS screenshots"
            quality={100}
            placeholder="blur"
          />
          <div className="flex w-full max-w-screen-tablets justify-between gap-4">
            {modalImages.map((img) => (
              <Image
                key={img.src}
                className="w-full max-w-[49%]"
                src={img}
                alt="Jacked Plnner SaaS screenshots"
                quality={100}
                placeholder="blur"
              />
            ))}
          </div>
          <Image
            className="w-full max-w-screen-tablets"
            src={DashboardSrc}
            alt="Jacked Plnner SaaS screenshots"
            quality={100}
            placeholder="blur"
          />
          <div className="flex w-full max-w-screen-tablets justify-between gap-4">
            {mobileImages.map((img) => (
              <Image
                key={img.src}
                className="w-full max-w-[23%]"
                src={img}
                alt="Jacked Plnner SaaS screenshots"
                quality={100}
                placeholder="blur"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
