import Image, { StaticImageData } from 'next/image'
import WaiterApp from '@/assets/projects/bootcampProjects/waiterApp.png'
import DesignSystem from '@/assets/projects/bootcampProjects/designSystem.png'
import NextBlog from '@/assets/projects/bootcampProjects/nextjsBlog.png'
import VideoPlatform from '@/assets/projects/bootcampProjects/videoPlatform.png'
import { BootcampProject } from './BootcampProject'

import Squares from '@/assets/Squares2.svg'
import html from '@/assets/icons/techs/HTML.svg'
import css from '@/assets/icons/techs/CSS.svg'
import sass from '@/assets/icons/techs/SASS.svg'
import javascript from '@/assets/icons/techs/JAVASCRIPT.svg'
import typescript from '@/assets/icons/techs/TYPESCRIPT.svg'
import react from '@/assets/icons/techs/REACT.svg'
import reactNative from '@/assets/icons/techs/REACTNATIVE.svg'
import storybook from '@/assets/icons/techs/STORYBOOK.svg'
import radix from '@/assets/icons/techs/RADIX.svg'
import tailwind from '@/assets/icons/techs/TAILWIND.svg'
import nextjs from '@/assets/icons/techs/NEXT.svg'
import nodejs from '@/assets/icons/techs/NODE.svg'
import express from '@/assets/icons/techs/EXPRESS.svg'
import mongoDB from '@/assets/icons/techs/MONGO.svg'
import prisma from '@/assets/icons/techs/PRISMA.svg'
import docker from '@/assets/icons/techs/DOCKER.svg'
import jest from '@/assets/icons/techs/JEST.svg'
import graphQL from '@/assets/icons/techs/GRAPHQL.svg'
import graphCMS from '@/assets/icons/techs/GRAPH_CMS.svg'
import apollo from '@/assets/icons/techs/APOLLO.svg'
import jstackIcon from '@/assets/icons/bootcampCompanies/JStack.svg'
import rocketseatIcon from '@/assets/icons/bootcampCompanies/Rocketseat.svg'

const waiterAppTechs: StaticImageData[] = [
  html,
  css,
  javascript,
  typescript,
  react,
  reactNative,
  docker,
  nodejs,
  express,
  mongoDB,
]

const designSystemTechs: StaticImageData[] = [
  html,
  css,
  javascript,
  typescript,
  react,
  radix,
  storybook,
  jest,
]

const nextBlogTechs: StaticImageData[] = [
  html,
  css,
  sass,
  javascript,
  typescript,
  react,
  nextjs,
  jest,
  nodejs,
  prisma,
]

const videoPlatformTechs: StaticImageData[] = [
  html,
  css,
  javascript,
  typescript,
  react,
  tailwind,
  graphQL,
  graphCMS,
  apollo,
]

export default function BootcampsProjects() {
  return (
    <div
      className="
        mx-auto w-full max-w-screen-xl overflow-visible px-3 py-6 
        max-md:max-w-[30.625rem]
      "
    >
      <h2 className="mb-8 text-[2.5rem] font-bold uppercase leading-none text-cyan-500 drop-shadow-custom-text">
        bootcamps
        <span className="ml-1 text-gray-100 max-md:block">projects</span>
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
          className="h-full max-h-[30rem] object-cover object-right max-tablets-sm:hidden"
        />

        <div className="max-tablets-sm:w-full">
          <BootcampProject.Root>
            <BootcampProject.Card name="nextBlog">
              <BootcampProject.Content>
                <div className="flex items-center justify-between px-3 pt-3">
                  <BootcampProject.Title title="Next.js blog" />
                  <BootcampProject.CompanyIcon
                    icon={rocketseatIcon}
                    link="https://www.rocketseat.com.br/"
                  />
                </div>
                <BootcampProject.Description description="Developed using Next, NextAuth, FaunaDB, Stripe and Prismic. The user only will be able to access the articles content if subscribed." />
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
                  <BootcampProject.Title title="Reataurant Sass" />
                  <BootcampProject.CompanyIcon
                    icon={jstackIcon}
                    link="https://jstack.com.br/"
                  />
                </div>
                <BootcampProject.Description description="A Node.js Backend was developed to provide the Orders Functionalities, such as a Mobile App and a Web Dashboard Manager." />
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
                  <BootcampProject.Title title="Design System" />
                  <BootcampProject.CompanyIcon
                    icon={rocketseatIcon}
                    link="https://www.rocketseat.com.br/"
                  />
                </div>
                <BootcampProject.Description description="A simple login form page created just to be used as an exemple to build a Design System with Storybook, MSW and a CI/CD use case." />
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
                  <BootcampProject.Title title="Video Platform" />
                  <BootcampProject.CompanyIcon
                    icon={rocketseatIcon}
                    link="https://www.rocketseat.com.br/"
                  />
                </div>
                <BootcampProject.Description description="Developed using Next, NextAuth, FaunaDB, Stripe and Prismic. The user only will be able to access full content if signed up." />
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
