import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image from 'next/image'
import IbLogoSrc from '@/assets/projects/inboxWebsite/ib-logo.svg'

function DesignProcess() {
  return (
    <section id="designProcess" className="pt-14">
      <div
        className="
          mx-auto w-full max-w-screen-article
          max-tablets:px-3 max-md:max-w-lg
        "
      >
        <SectionTitle className="max-phones:leading-none">
          Design
          <Highlight className="block phones:ml-1 phones:inline">
            Process
          </Highlight>
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
          className="
            float-right ml-6 mr-2 mt-4 h-auto w-full max-w-[310px]
            max-md:float-none max-md:mx-auto max-md:max-w-xs
          "
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
      </div>
    </section>
  )
}
export default DesignProcess
