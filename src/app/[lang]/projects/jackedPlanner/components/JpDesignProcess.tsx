import Highlight from '@/components/Basic/Highlight'
import Paragraph from '@/components/Basic/Paragraph'
import SectionTitle from '@/components/Basic/SectionTitle'
import Image from 'next/image'
import NavLink from '@/components/Navigation/NavLink'
import F1CarSrc from '@/assets/projects/jackedPlanner/f1-car-reference.jpg'
import LogoSrc from '@/assets/projects/jackedPlanner/jp-logo.png'
import LogoProSrc from '@/assets/projects/jackedPlanner/jp-logoPRO.svg'
import LogoSmSrc from '@/assets/projects/jackedPlanner/jp-FavIcon.png'
import GuyImgSrc from '@/assets/projects/jackedPlanner/jp-crush-your-goals.png'
import GirlImgSrc from '@/assets/projects/jackedPlanner/jp-elevate-your-fitness.png'

const ProjectColors = ['#EEF4F6', '#343C3F', '#FE9016', '#61B8D9', '#121214']

export default function JpDesignProcess() {
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
          Looking for a proper Inspiration for the app, I was in search of
          something that embodies the essence of <Highlight>Sports</Highlight>,{' '}
          <Highlight>Innovation</Highlight>, <Highlight>Aesthetics</Highlight>,{' '}
          <Highlight>High Performance</Highlight>,{' '}
          <Highlight>Tireless Focus</Highlight> and{' '}
          <Highlight>Determination</Highlight>. What I came across that
          encapsulates all these characteristics is Formula 1, which I happen to
          be a huge fan, by the way.
        </Paragraph>
        <Paragraph className="mt-4">
          <Highlight>F1 represents the apex of motorsport</Highlight>.
          It&rsquo;s a global racing series featuring cutting-edge single-seat
          race cars that reach astonishing speeds, often exceeding 200 miles per
          hour (320 kilometers per hour). And F1 is much more than just speed,
          it&rsquo;s a fusion of Skill, Strategy, Engineering Prowess and
          Teamwork.{' '}
          <Highlight>
            It&rsquo;s a sport where the pursuit of excellence and the thrill of
            racing converge
          </Highlight>
          .
        </Paragraph>
        <Paragraph className="mt-4">
          In my quest to find inspiration among Formula 1 teams, the{' '}
          <NavLink
            href="https://www.mclaren.com/racing/formula-1/"
            title="Mclaren Team"
            newTab
            className="font-medium text-cyan-400 underline underline-offset-2"
          />{' '}
          stood out as a captivating source. Their unveiling of digital car
          design images truly captured my attention, especially their vibrant
          color choices.
        </Paragraph>
      </div>
      <figure
        className="
          relative pb-3 
          after:absolute after:bottom-0 after:left-1/2 after:h-px 
          after:w-full after:max-w-screen-article after:-translate-x-1/2 
          after:bg-gray-100/20 
          max-tablets:after:px-3 max-md:after:max-w-lg
        "
      >
        <Image
          src={F1CarSrc}
          alt="Formula 1 car promo image in 3D reder."
          className="mt-6 h-auto w-full max-w-screen-tablets"
          quality={100}
          placeholder="blur"
        />
        <figcaption
          className="
            mx-auto mt-2 max-w-screen-article text-sm opacity-50
            max-tablets:px-3 max-md:max-w-lg
          "
        >
          Commemorative livery that was presented at Monaco GP-2021.
          (Disclosure/McLaren).
        </figcaption>
      </figure>
      <div
        className="
          mx-auto mt-6 flex w-full max-w-screen-article flex-col gap-4
          max-tablets:px-3 max-md:max-w-lg
        "
      >
        <Paragraph>
          These visuals perfectly align with the emotions and concepts we strive
          to convey through our app. McLaren&rsquo;s fusion of{' '}
          <Highlight>innovation</Highlight> and{' '}
          <Highlight>aesthetics</Highlight> harmonizes seamlessly with our
          vision, where we aim to integrate state-of-the-art technology with
          captivating design to craft a distinctive and immersive user
          experience. Inspired by it, came with the following color pallet:
        </Paragraph>
        <div className="flex gap-4">
          {ProjectColors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="
                relative h-24 w-full border border-gray-500
                max-md:h-16
                
              "
            >
              <span className="absolute bottom-0 right-0 bg-light px-1 text-xs font-semibold text-cyan-800">
                {color}
              </span>
            </div>
          ))}
        </div>
        <Paragraph>
          The next step involved <Highlight>Brand Design</Highlight>, a crucial
          element of marketing and corporate identity. This process involves
          <Highlight>
            creating a visual and emotional identity for a brand that connects
            with its target audience
          </Highlight>
          , helping the company to establish a distinct and memorable presence
          in the market.
        </Paragraph>
        <Paragraph>
          First step was brand naming strategy, the process of creating a unique
          and memorable name for a brand, product, or service, having a
          significant impact on the brand&rsquo;s success, recognition, and
          consumer perception. The aim was to choose a name that is easy to
          recall, that shows exactly the brand’s essence, and also effectively
          engage a younger audience, which led us to:{' '}
          <Highlight>Jacked Planner</Highlight>.
        </Paragraph>

        <Paragraph>
          In the fitness world, the term &quot;<Highlight>jacked</Highlight>
          &quot; is a slang expression used to describe someone who is very
          muscular, ripped, or physically well-developed.{' '}
          <Highlight>
            This term is often used to praise or admire someone&rsquo;s
            impressive physical condition or body transformation achieved
            through strength training and bodybuilding workouts
          </Highlight>
          . It aligns perfectly with the app&rsquo;s goal of creating a customer
          perception that encourages fitness enthusiasts to excel and transform
          their bodies.
        </Paragraph>

        <div
          className="
            mx-auto flex items-center gap-4
            max-md:flex-col max-md:gap-0
          "
        >
          <div
            className="
              flex w-fit max-w-[240px] flex-col gap-3
              max-md:max-w-none max-md:flex-row
              max-sm:w-auto max-sm:max-w-sm max-sm:flex-col
            "
          >
            <Image src={LogoSrc} alt="logo" />
            <div className="flex flex-col gap-3">
              <Image src={LogoProSrc} alt="Logo Pro" />
              <Image
                src={LogoSmSrc}
                alt="Small logo"
                className="h-auto max-h-[2.5rem] w-full max-w-[2.5rem] max-sm:hidden"
              />
            </div>
          </div>
          <div
            className="
              flex justify-center gap-4 py-2
              max-sm:flex-wrap
            "
          >
            <Image
              src={GuyImgSrc}
              alt="Logo Pro"
              className="h-fit max-w-[240px] max-sm:w-full max-sm:max-w-sm"
            />
            <Image
              src={GirlImgSrc}
              alt="Small logo"
              className="h-fit max-w-[240px] max-sm:w-full max-sm:max-w-sm"
            />
          </div>
        </div>
        <Paragraph>
          The next step revolved around software development planning. During
          this stage, we deliberated on the tools and technologies to be
          employed in creating the app, but also ensuring the integration of all
          core features outlined in the Project Briefing section.
        </Paragraph>
      </div>
    </section>
  )
}
