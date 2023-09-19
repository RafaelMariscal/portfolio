import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image from 'next/image'
import RdLoginCardSrc from '@/assets/projects/rd-login-card.png'
import Title from '@/components/Basic/Title'

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
        className="float-right mb-4 ml-4 h-fit w-full max-w-[360px] select-none"
      />
      <div className="[&_p]:tracking-wider">
        <Paragraph>
          The project required the implementation of two critical features: User
          Permissions based on roles and User Actions Mapping based on system
          interactions.
        </Paragraph>
        <Paragraph className="mt-4">
          Our team led this initiative, starting with the login page design and
          prototyping using Figma, followed by the component&rsquo;s
          micro-interactions development. Only then, we focused our efforts on
          these critical features.
        </Paragraph>
        <Paragraph className="mt-4">
          We decided to use NextJs based on a strategic foresight, anticipating
          the creation of an institutional page in the future, making the SEO
          support provided by the framework highly useful. Additionally, the SSR
          and SSG features align perfectly with our requirements.
        </Paragraph>
        <Paragraph className="mt-4">
          For authentication, we chose NextAuth, a fully secure and flexible
          authentication library seamlessly supported by NextJs, using Custom
          Credentials Provider and Token & Refresh Totken strategy to manage
          user login status.
        </Paragraph>
        <Paragraph className="mt-4">
          In addition, we integrated Google ReCaptcha v2, implemented Route
          Security Measures and ensured Features Accessibility based on User
          Role.
        </Paragraph>
      </div>
    </section>
  )
}
export default MainFeatures
