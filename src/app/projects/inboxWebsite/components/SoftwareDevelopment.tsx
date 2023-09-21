import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import NavLink from '@/components/Navigation/NavLink'

function SoftwareDevelopment() {
  return (
    <section id="softwareDevelopment" className="px-1 pt-14">
      <div className="mx-auto w-full max-w-screen-tablets-sm">
        <SectionTitle className="leading-none">
          Software<Highlight className="block">Development</Highlight>
        </SectionTitle>
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
          In this project, the client required the capability to send service
          quote requests via email. To handle this feature, we used{' '}
          <Highlight>React Email</Highlight> in conjunction with{' '}
          <Highlight>Resend</Highlight>, a company specialized in email
          marketing and delivery services, built to suit the needs of developers
          and businesses.
        </Paragraph>
        <Paragraph className="mt-4">
          The core reasons behind the choice of using Resend was driven by two
          key factors: Affordability and Development Experience. Also, Resend
          has a User-centric approach, providing an Efficient Email Delivery
          service with Multi-Region Email Sending support and Seamlessly
          Integrates with React Email.
        </Paragraph>
        <Paragraph className="mt-4">
          If you want to check it out the website fully functional,{' '}
          <NavLink
            href="https://www.mclaren.com/racing/formula-1/"
            title="access Inbox Website here"
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
export default SoftwareDevelopment
