import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image, { StaticImageData } from 'next/image'
import RdLoginCardSrc from '@/assets/projects/rd-inspection/rd-login-card.png'
import Title from '@/components/Basic/Title'
import MainDashboardSrc from '@/assets/projects/rd-inspection/rd-main-dashboard.png'
import ModalSrc from '@/assets/projects/rd-inspection/rd-modal.png'
import FinancialDashboardSrc from '@/assets/projects/rd-inspection/rd-financial-dashboard.png'
// import NavLink from '@/components/Navigation/NavLink'

const imagesSrc: StaticImageData[] = [
  MainDashboardSrc,
  ModalSrc,
  FinancialDashboardSrc,
]

function MainFeatures() {
  return (
    <section
      id="mainFeatures"
      className="mx-auto w-full max-w-screen-article py-10"
    >
      <SectionTitle>
        Main<Highlight className="ml-1">Features</Highlight>
      </SectionTitle>

      <Title className="my-6">Authentication and Authorization</Title>
      <Image
        src={RdLoginCardSrc}
        alt=""
        quality={100}
        className="float-right mb-4 ml-4 h-fit w-full max-w-[330px] select-none"
      />
      <div>
        <Paragraph>
          The project required the implementation of two critical features:{' '}
          <Highlight>User Permissions based on roles</Highlight> and{' '}
          <Highlight>
            User Actions Mapping based on system interactions
          </Highlight>
          .
        </Paragraph>
        <Paragraph className="mt-4">
          Our team led this initiative, starting with the{' '}
          <Highlight>login page design using Figma</Highlight>, followed by the{' '}
          <Highlight>
            component&rsquo;s micro-interactions development
          </Highlight>
          . Only then, we focused our efforts on these critical features.
        </Paragraph>
        <Paragraph className="mt-4">
          We decided to use <Highlight>NextJs</Highlight> based on a strategic
          foresight, anticipating the creation of an institutional page in the
          future,{' '}
          <Highlight>
            making the SEO support provided by the framework highly useful
          </Highlight>
          . Additionally, the <Highlight>SSR</Highlight> and{' '}
          <Highlight>SSG</Highlight> features align perfectly with our
          requirements.
        </Paragraph>
        <Paragraph className="mt-4">
          For authentication, we chose <Highlight>NextAuth</Highlight>, a fully
          secure and flexible authentication library seamlessly supported by
          NextJs, using <Highlight>Custom Credentials Provider</Highlight> and{' '}
          <Highlight>Token & Refresh Token</Highlight> strategy to manage user
          login status.
        </Paragraph>
        <Paragraph className="mt-4">
          In addition, we integrated <Highlight>Google ReCaptcha v2</Highlight>,
          implemented Route Security Measures and ensured Features Accessibility
          based on User Role.
        </Paragraph>
      </div>

      <Title className="mb-6 mt-12">Dynamic Dashboard</Title>
      <Paragraph>
        As <Highlight>the APIs are currently in development stage</Highlight>,
        I&rsquo;ll share some screenshots of the current dashboard front end.
        Please note that there might be potential changes in the future, but{' '}
        <Highlight className="text-gray-100">
          the following design was accepted by the company
        </Highlight>
        .
      </Paragraph>
      {/* <Paragraph className="mt-4">
        In addition to that,{' '}
        <Highlight className="text-gray-100">
          at the end of the page you&rsquo;ll find the Components Showcase
          section
        </Highlight>
        , where you can quickly experience how these components work.
        Here&rsquo;s a direct link to{' '}
        <NavLink
          href="#componentsShowcase"
          title="access the components showcase"
          scroll
          className="text-cyan-400 underline underline-offset-2 "
        />
        .
      </Paragraph> */}

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
export default MainFeatures
