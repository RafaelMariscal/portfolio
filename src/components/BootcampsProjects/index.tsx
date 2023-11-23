import Image from 'next/image'
import WaiterApp from '@/assets/projects/bootcampProjects/waiterApp.png'
import DesignSystem from '@/assets/projects/bootcampProjects/designSystem.png'
import NextBlog from '@/assets/projects/bootcampProjects/nextjsBlog.png'
import VideoPlatform from '@/assets/projects/bootcampProjects/videoPlatform.png'
import Squares from '@/assets/Squares2.svg'
import jstackIcon from '@/assets/icons/bootcampCompanies/JStack.svg'
import rocketseatIcon from '@/assets/icons/bootcampCompanies/Rocketseat.svg'
import { BootcampProject } from './BootcampProject'
import {
  nextBlogTechs,
  waiterAppTechs,
  designSystemTechs,
  videoPlatformTechs,
} from './techsLists'
import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-use-server'

export default function BootcampsProjects({ lang }: { lang: Locale }) {
  const {
    home: {
      bootcampProjects: {
        bootcamps: { nextBlog, waiterApp, desingSystem, videoPlatform },
      },
    },
  } = getDictionaryServerOnly(lang)

  return (
    <div
      id="bootcamps"
      className="
        mx-auto w-full max-w-screen-xl overflow-visible px-3 py-6 
        max-md:max-w-[30.625rem] max-[440px]:max-w-full max-[440px]:px-0
      "
    >
      <h2
        className="
          mb-8 text-[2.5rem] font-bold uppercase leading-none text-cyan-500 
          drop-shadow-custom-text max-[440px]:px-3
        "
      >
        bootcamp
        <span className="ml-1 text-gray-100 max-md:ml-0 max-md:block">
          projects
        </span>
      </h2>

      <div
        className="
          relative flex w-full items-center justify-end gap-4 overflow-visible 
          max-tablets-sm:justify-start
        "
      >
        <Image
          src={Squares}
          alt="Blob image of squares"
          quality={100}
          className="h-full max-h-[30rem] select-none object-cover object-right max-tablets-sm:hidden"
        />

        <div className="max-tablets-sm:w-full">
          <BootcampProject.Root>
            <BootcampProject.Card name="nextBlog">
              <BootcampProject.Content>
                <div className="flex items-center justify-between px-3 pt-3">
                  <BootcampProject.Title title={nextBlog.title} />
                  <BootcampProject.CompanyIcon
                    icon={rocketseatIcon}
                    link="https://www.rocketseat.com.br/"
                  />
                </div>
                <BootcampProject.Description
                  description={nextBlog.description}
                />
                <BootcampProject.TechsList techsList={nextBlogTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                src={NextBlog}
                alt="nextblog image"
                accessLink="https://ignite-news-nextjs.vercel.app/"
                className="md:object-[-27.5rem]"
              />
            </BootcampProject.Card>

            <BootcampProject.Card name="waiterApp">
              <BootcampProject.Content>
                <div className="flex items-center justify-between px-3 pt-3">
                  <BootcampProject.Title title={waiterApp.title} />
                  <BootcampProject.CompanyIcon
                    icon={jstackIcon}
                    link="https://jstack.com.br/"
                  />
                </div>
                <BootcampProject.Description
                  description={waiterApp.description}
                />
                <BootcampProject.TechsList techsList={waiterAppTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                src={WaiterApp}
                alt="waiterApp Image"
                accessLink="https://github.com/RafaelMariscal?tab=repositories&q=restaurant&type=&language=&sort="
                className="md:object-[-34.75rem]"
              />
            </BootcampProject.Card>

            <BootcampProject.Card name="desingSystem">
              <BootcampProject.Content>
                <div className="flex items-center justify-between px-3 pt-3">
                  <BootcampProject.Title title={desingSystem.title} />
                  <BootcampProject.CompanyIcon
                    icon={rocketseatIcon}
                    link="https://www.rocketseat.com.br/"
                  />
                </div>
                <BootcampProject.Description
                  description={desingSystem.description}
                />
                <BootcampProject.TechsList techsList={designSystemTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                src={DesignSystem}
                alt="desingSystem image"
                accessLink="https://rafaelmariscal.github.io/IgniteLab-DesignSystem/?path=/story/components-button--default"
                className="md:object-left-top"
              />
            </BootcampProject.Card>

            <BootcampProject.Card name="videoPlatform">
              <BootcampProject.Content>
                <div className="flex items-center justify-between px-3 pt-3">
                  <BootcampProject.Title title={videoPlatform.title} />
                  <BootcampProject.CompanyIcon
                    icon={rocketseatIcon}
                    link="https://www.rocketseat.com.br/"
                  />
                </div>
                <BootcampProject.Description
                  description={videoPlatform.description}
                />
                <BootcampProject.TechsList techsList={videoPlatformTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                src={VideoPlatform}
                alt="video platform image"
                accessLink="https://github.com/RafaelMariscal/Event-video-platform"
                className="md:object-[-14rem]"
              />
            </BootcampProject.Card>
          </BootcampProject.Root>
        </div>
      </div>
    </div>
  )
}
