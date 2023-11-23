import { IbProjectPage } from '../types/ibPage.type'

export const ibProjectPageEnUS: IbProjectPage = {
  navigation: {
    pageTitle: 'Inbox Website',
    briefing: 'Briefing',
    design: 'Design',
    development: 'Development',
    components: 'Components',
    nextProject: 'Next Project',
    home: 'Home Page',
  },
  description: {
    p1: [
      'I’m a ',
      'Web Developer - Fullstack ',
      'at ',
      'Inbox Refeições Coletivas ',
      ', a catering company with focus on the Industrial sector - B2B. This company is based in Fortaleza-CE (Brazil), consequently, this project is presented in Portuguese-BR.',
    ],
    p2: [
      'In this project, I assumed a range of responsibilities, from design to development. The Design and prototype tasks was tackled using ',
      'Figma',
      ', the Front End was made using ',
      'Typescript',
      ', ',
      'NextJs',
      ', ',
      'Tailwind',
      ', and for accessibility and animations, ',
      'RadixUi',
      ', and ',
      'Framer Motion',
      '. The Back End was build using the NextJs server side with ',
      'NodeJs',
      ', ',
      'Prisma',
      ', ',
      'PostgreSQL',
      ', and ',
      'Resend',
      '.',
    ],
    table: [
      { head: 'Role', body: 'Web Developer' },
      { head: 'Platform', body: 'Desktop / Mobile' },
      { head: 'Category', body: 'Company Website' },
    ],
  },
  briefing: {
    article: {
      title: 'Understanding the Project.',
      p1: [
        'When I joined the Inbox Refeições, one of my initial responsibilities was to design and develop the company’s website. At the time, my confidence in web development was limited, so we opted to create it using a development platform. However, as time went by, the website’s design became outdated and less appealing, ',
        'leading to the need for a complete redesign',
        '.',
      ],
      p2: [
        'My task was to redesign and develop the company’s website, in order ',
        'to effectively showcasing the services offered',
        ' and ',
        'simplifying the process of obtaining service quotes',
        '. This process offered an opportunity to implement enhancements focused on improving the user experience and presenting essential information more effectively, witch included:',
      ],
      list1: [
        'Highlighting the services provided by the company.',
        'Emphasizing the key advantages of using the company’s services.',
        'Showcasing the core foundations of the company.',
        'Providing a more user-friendly way to obtaining service quotes.',
      ],
      p3: [
        'In this context, I initiated the project by planning the technologies we would use to bring this website to life, followed by the design of screens and components.',
      ],
    },
  },
  designProcess: {
    sectionTitle: ['design', 'process'],
    article: {
      p1: [
        'The website design process is a collaborative endeavor aimed at crafting a coherent and authentic online experience that faithfully represents the brand while meeting user expectations. The process starts with the materials provided by the Branding Designer, including key elements such as the logo, color palette, typography, style guidelines, and any brand-related content.',
      ],
      p2: [
        'Upon receiving these materials, I embarked on the journey of understanding the brand’s essence, involving a exploration of the brand’s values, mission, and personality, while also identifying the visual elements that most authentically represent it. This process ensures that the website design harmonizes perfectly with the brand identity, a crucial factor in maintaining effective consistency.',
      ],
      p3: [
        'Next, we set the website’s goals and identify the target audience, serving as the foundation for the web design. For example, since one of the core objectives is to enhance sales, we prioritize a user-friendly way of obtaining service quotes. With these objectives in mind, I started to create a clear site map with an intuitive navigation for effortless content access.',
      ],
      p4: [
        'With the design plan solidified, I used ',
        'Figma ',
        'as main design tool, also responsible to prototyping. Wireframes and interactive prototypes guides element arrangement, aligning with Branding Design guidelines and incorporating brand visuals. Then, with the design approval, I started the website development itself.',
      ],
    },
  },
  softwareDevelopment: {
    sectionTitle: ['software', 'development'],
    p1: [
      '',
      'Software development planning is crucial as it sets the foundation for a successful project',
      '. It defines the project’s scope, goals, and the technology stack, ensuring alignment with business key objectives. Effective planning promotes team coordination, budget management, and facilitates on-time project delivery.',
    ],
    p2: [
      'In terms of the tech stack, I opted to use ',
      'JavaScript',
      ', ',
      'TypeScript',
      ', ',
      'ReactJS',
      ', and ',
      'Tailwind',
      ' as the primary Front End tools, aimed to create a robust, modern and user-friendly interface perfectly aligned with the project’s goal. In addition to that, I strategically decided to use NextJs, leveraging the framework’s SEO support to enhance the website’s visibility and accessibility.',
    ],
    p3: [
      'With the goal of creating an accessible, customizable, and performant user interface, I incorporated ',
      'RadixUI ',
      'into the tech stack. This choice improved development productivity and streamlined the creation of micro-interactions for components. For animations, I chose to use ',
      'Framer Motion',
      ', a popular animation library for React applications that provides a simple yet powerful way to add animations and motion to websites, enhancing overall user experience.',
    ],
    p4: [
      'Once we used forms to handle client information and send it to the sales sector, I opted to use ',
      'Zod',
      ', a TypeScript-friendly library that simplifies data validation, ensuring type safety and code quality. To complement Zod, I chose to use ',
      'React-hook-form',
      ', a lightweight, performant, and developer-friendly library for managing form state and validation in React apps. It integrates seamlessly with Zod, witch improves the project’s overall performance and simplifies form building.',
    ],
    p5: [
      'In this project, the client required the capability to send service quote requests via email. To handle this feature, we used ',
      'React Email',
      ' in conjunction with ',
      'Resend',
      ', a company specialized in email marketing and delivery services, built to suit the needs of developers and businesses.',
    ],
    p6: [
      'The core reasons behind the choice of using Resend was driven by two key factors: Affordability and Development Experience. Also, Resend has a User-centric approach, providing an Efficient Email Delivery service with Multi-Region Email Sending support and Seamlessly Integrates with React Email.',
    ],
    p7: [
      'If you want to check it out the website fully functional, ',
      'access Inbox Website here',
      '. But if you want to take a look at how the components created for this website works, access the components showcase section.',
    ],
  },
  compShowcase: {
    sectionTitle: ['components', 'showcase'],
  },
  nextProject: {
    sectionTitle: ['next', 'project'],
  },
}
