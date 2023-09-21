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

function SoftwareDevelopment() {
  return (
    <section id="softwareDevelopment" className="px-1 pt-14">
      <div className="mx-auto w-full max-w-screen-article">
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
          <List.Item className="text-gray-200">
            <Highlight className="text-gray-100 underline underline-offset-2">
              Authentication
            </Highlight>
            : A cloud-based authentication service provided by Google as part of
            the Firebase platform. It simplifies the process of implementing
            user authentication in web and mobile applications by offering a set
            of secure, easy-to-use authentication methods. We&rsquo;ve also
            implemented login via providers like Github, Google, Facebook, and
            Anonymous.
          </List.Item>
          <List.Item className="text-gray-200">
            <Highlight className="text-gray-100 underline underline-offset-2">
              Firestore
            </Highlight>
            : A cloud-based, NoSQL document database service provided by Google
            as part of the Firebase platform. It&rsquo;s designed to help
            developers store, synchronize, and query data for web and mobile
            applications easily. Firestore is particularly well-suited for
            real-time and offline-capable applications due to its real-time
            synchronization and offline data support.
          </List.Item>
          <List.Item className="text-gray-200">
            <Highlight className="text-gray-100 underline underline-offset-2">
              Hosting
            </Highlight>
            : A web hosting service provided by Google as part of the Firebase
            platform. It is designed to simplify the process of hosting,
            deploying, and managing web applications and static content such as
            HTML, CSS, JavaScript, and media files and It&rsquo;s especially
            well-suited for SPA React projects.
          </List.Item>
        </List.Content>
        <Paragraph className="mt-4">
          With these tools in hand, the project started its development with
          <Highlight>front-end-first</Highlight> approach, following the Figma
          design previously done. Then,{' '}
          <Highlight>
            the Back-end functionalities were integrated incrementally
          </Highlight>{' '}
          as each page reached a “done” status. For example, the authentication
          and authorization features were implemented when the login page
          section was near completion.
        </Paragraph>
        <Paragraph className="mt-4">
          This approach ensured a well-structured and step-by-step development
          process. If you want to check it out how the project running, feel
          free to{' '}
          <NavLink
            href="https://jackedplannerreact.web.app/"
            title="access Jacked Planner here"
            newTab
            className="font-medium text-cyan-400 underline underline-offset-2"
          />{' '}
          , or check it out some screenshots showcasing the final outcome of
          this project.
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
            <Image
              className="w-full max-w-[49%]"
              src={Modal1Src}
              alt="Jacked Plnner SaaS screenshots"
              quality={100}
              placeholder="blur"
            />
            <Image
              className="w-full max-w-[49%]"
              src={Modal2Src}
              alt="Jacked Plnner SaaS screenshots"
              quality={100}
              placeholder="blur"
            />
          </div>
          <Image
            className="w-full max-w-screen-tablets"
            src={DashboardSrc}
            alt="Jacked Plnner SaaS screenshots"
            quality={100}
            placeholder="blur"
          />
          <div className="flex w-full max-w-screen-tablets justify-between gap-4">
            <Image
              className="w-full max-w-[23%]"
              src={Mobile1Src}
              alt="Jacked Plnner SaaS screenshots"
              quality={100}
              placeholder="blur"
            />
            <Image
              className="w-full max-w-[23%]"
              src={Mobile2Src}
              alt="Jacked Plnner SaaS screenshots"
              quality={100}
              placeholder="blur"
            />
            <Image
              className="w-full max-w-[23%]"
              src={Mobile3Src}
              alt="Jacked Plnner SaaS screenshots"
              quality={100}
              placeholder="blur"
            />
            <Image
              className="w-full max-w-[23%]"
              src={Mobile4Src}
              alt="Jacked Plnner SaaS screenshots"
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SoftwareDevelopment
