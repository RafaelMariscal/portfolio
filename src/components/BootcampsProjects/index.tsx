import Image, { StaticImageData } from 'next/image'
import Squares from '@/assets/Squares2.svg'
import WaiterApp from '@/assets/projects/bootcampProjects/waiterApp.png'
import DesignSystem from '@/assets/projects/bootcampProjects/designSystem.png'
import NextBlog from '@/assets/projects/bootcampProjects/nextjsBlog.png'
import VideoPlatform from '@/assets/projects/bootcampProjects/videoPlatform.png'
import { BootcampProject } from './BootcampProject'

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
    <div className="mx-auto w-full max-w-screen-xl overflow-visible px-3 py-6">
      <h2 className="text-[2.5rem] font-bold uppercase leading-none text-cyan-500 drop-shadow-custom-text">
        bootcamps<span className="ml-1 text-gray-100">projects</span>
      </h2>

      <div className="flex w-full items-center justify-end overflow-visible">
        <Image
          src={Squares}
          alt="Blob image of squares"
          quality={100}
          className="object-cover object-right"
        />

        <div className="flex  min-w-[46rem] items-center gap-3">
          <BootcampProject.Root>
            <BootcampProject.Card name="waiterApp">
              <BootcampProject.Content name="waiterApp">
                <div className="px-3 pt-3">
                  <BootcampProject.Title title="Reataurant Sass" />
                  <BootcampProject.Description description="A Node.js Backend was developed to provide the Orders Functionalities, such as a Mobile App and a Web Dashboard Manager." />
                </div>
                <BootcampProject.TechsList techsList={waiterAppTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                name="waiterApp"
                src={WaiterApp}
                alt="waiterApp Image"
                className="object-[-34.75rem]"
              />
            </BootcampProject.Card>

            <BootcampProject.Card name="desingSystem">
              <BootcampProject.Content name="desingSystem">
                <div className="px-3 pt-3">
                  <BootcampProject.Title title="Reataurant Sass" />
                  <BootcampProject.Description description="A Node.js Backend was developed to provide the Orders Functionalities, such as a Mobile App and a Web Dashboard Manager." />
                </div>
                <BootcampProject.TechsList techsList={designSystemTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                name="desingSystem"
                src={DesignSystem}
                alt="desingSystem image"
                className="object-left-top"
              />
            </BootcampProject.Card>

            <BootcampProject.Card name="nextBlog">
              <BootcampProject.Content name="nextBlog">
                <div className="px-3 pt-3">
                  <BootcampProject.Title title="Reataurant Sass" />
                  <BootcampProject.Description description="A Node.js Backend was developed to provide the Orders Functionalities, such as a Mobile App and a Web Dashboard Manager." />
                </div>
                <BootcampProject.TechsList techsList={nextBlogTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                name="nextBlog"
                src={NextBlog}
                alt="nextblog image"
                className="object-[-27.5rem]"
              />
            </BootcampProject.Card>

            <BootcampProject.Card name="videoPlatform">
              <BootcampProject.Content name="videoPlatform">
                <div className="px-3 pt-3">
                  <BootcampProject.Title title="Reataurant Sass" />
                  <BootcampProject.Description description="A Node.js Backend was developed to provide the Orders Functionalities, such as a Mobile App and a Web Dashboard Manager." />
                </div>
                <BootcampProject.TechsList techsList={videoPlatformTechs} />
              </BootcampProject.Content>
              <BootcampProject.Image
                name="videoPlatform"
                src={VideoPlatform}
                alt="video platform image"
                className="object-[-14rem]"
              />
            </BootcampProject.Card>
          </BootcampProject.Root>
        </div>
      </div>
    </div>
  )
}
