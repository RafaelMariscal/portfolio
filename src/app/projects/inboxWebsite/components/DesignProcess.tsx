import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import NavLink from '@/components/Navigation/NavLink'
import Image from 'next/image'
import IbLogoSrc from '@/assets/projects/inboxWebsite/ib-logo.svg'

function DesignProcess() {
  return (
    <section id="designProcess" className="px-1 pt-14">
      <div className="mx-auto w-full max-w-screen-tablets-sm">
        <SectionTitle>
          Design<Highlight className="ml-1">Process</Highlight>
        </SectionTitle>
        <Paragraph className="mt-6">
          The website design process is a collaborative endeavor aimed at
          crafting a coherent and authentic online experience that faithfully
          represents the brand while meeting user expectations. The process
          starts with the materials provided by the Branding Designer, including
          key elements such as the logo, color palette, typography, style
          guidelines, and any brand-related content.
        </Paragraph>
        <Image
          src={IbLogoSrc}
          alt="Inbox Logo"
          quality={100}
          className="float-right ml-7 mt-4 h-auto w-full max-w-[310px]"
        />

        <Paragraph className="mt-4">
          Upon receiving these materials, I embarked on the journey of
          understanding the brand&rsquo;s essence, involving a exploration of
          the brand&rsquo;s values, mission, and personality, while also
          identifying the visual elements that most authentically represent it.
          This process ensures that the website design harmonizes perfectly with
          the brand identity, a crucial factor in maintaining effective
          consistency.
        </Paragraph>
        <Paragraph className="mt-4">
          Next, we set the website&rsquo;s goals and identify the target
          audience, serving as the foundation for the web design. For example,
          since one of the core objectives is to enhance sales, we prioritize a
          user-friendly way of obtaining service quotes. With these objectives
          in mind, I started to create a clear site map with an intuitive
          navigation for effortless content access.
        </Paragraph>
        <Paragraph className="mt-4">
          With the design plan solidified, I used <Highlight>Figma</Highlight>{' '}
          as main design tool, also responsible to prototyping. Wireframes and
          interactive prototypes guides element arrangement, aligning with
          Branding Design guidelines and incorporating brand visuals. Then, with
          the design approval, I started the website development itself.
        </Paragraph>
        <Paragraph className="mt-4">
          In terms of the tech stack, I opted to use{' '}
          <Highlight>JavaScript</Highlight>, <Highlight>TypeScript,</Highlight>{' '}
          <Highlight>ReactJS,</Highlight> and <Highlight>Tailwind</Highlight> as
          the primary Front End tools, aimed to create a robust, modern and
          user-friendly interface perfectly aligned with the project&rsquo;s
          goal. In addition to that, I strategically decided to use NextJs,
          leveraging the framework&rsquo;s SEO support to enhance the
          website&rsquo;s visibility and accessibility.
        </Paragraph>
        <Paragraph className="mt-4">
          With the goal of creating an accessible, customizable, and performant
          user interface, I incorporated <Highlight>RadixUI</Highlight> into the
          tech stack. This choice improved development productivity and
          streamlined the creation of micro-interactions for components. For
          animations, I chose to use <Highlight>Framer Motion</Highlight>, a
          popular animation library for React applications that provides a
          simple yet powerful way to add animations and motion to websites,
          enhancing overall user experience.
        </Paragraph>
        <Paragraph className="mt-4">
          Once we used forms to handle client information and send it to the
          sales sector, I opted to use <Highlight>Zod</Highlight>, a
          TypeScript-friendly library that simplifies data validation, ensuring
          type safety and code quality. To complement Zod, I chose to use{' '}
          <Highlight>React-hook-form</Highlight>, a lightweight, performant, and
          developer-friendly library for managing form state and validation in
          React apps. It integrates seamlessly with Zod, witch improves the
          project&rsquo;s overall performance and simplifies form building.
        </Paragraph>
        <Paragraph className="mt-4">
          If you want to check it out the website fully functional,{' '}
          <NavLink
            href="https://www.mclaren.com/racing/formula-1/"
            title="access inbox website here"
            newTab
            className="font-medium text-cyan-400 underline underline-offset-2"
          />
          . But if you want to take a look at how the components created for
          this website works, access the components showcase section.
        </Paragraph>
      </div>
    </section>
  )
}
export default DesignProcess
