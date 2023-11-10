import { DefaultDictionary } from './types/@dictionary.type'

export const enUS: DefaultDictionary = {
  home: {
    navigation: {
      home: 'Home',
      brefing: 'Briefing',
      projects: 'Projects',
      bootcamps: 'Bootcamps',
      experience: 'Experience',
    },
    hero: {
      role: ['Software Engineer', '/', 'Project Manager'],
      description: [
        'I ',
        'develop solutions ',
        'to real-life problems, ',
        'managing teams ',
        'to achieve goals.',
      ],
      whatsappChat: 'Click to chat',
    },
    briefing: {
      p1: [
        "I'm a Software Engineer with ",
        'over two years of experience ',
        'working on End-2-End projects, including leadership positions. Outside of work, I have a strong passion about barbecue, fitness and sports in general.',
      ],
      p2: [
        "In my career, I've been involved with projects using ",
        'Javascript',
        ', ',
        'Typescript',
        ', ',
        'React',
        ', ',
        'Next',
        ', ',
        'Node.js ',
        'and ',
        'NestJs',
        '. In these projects, I had the opportunity to contribute from the initial client briefing to the final sprint.',
      ],
      p3: [
        'In terms of my academic background, I hold a degree in ',
        'Engineering ',
        "and I'm currently pursuing my second degree in ",
        'System Analysis and Development ',
        '- 2024.',
      ],
      link: 'About my experiences',
    },
    mainSkills: {
      title: ['main', 'skills'],
      programming: 'Programming',
      management: 'Management and Design',
      learning: 'Currently Learning',
    },
    projects: {
      techsLabel: 'Techs used in this project:',
      rdInspec: {
        title: 'RD Inspections - CRM',
        description: [
          'CRM developed for an online vehicle inspection company that provides technical reports. The reason behind this project is to unify two services, ',
          'Inspection Meetings Manager ',
          'and ',
          "Vehicle's Pictures Geolocation Provider",
          '. To achieve this, a ',
          'REST API ',
          'was developed to bridge the gap between these two services, and a modern dashboard to enhance user experience.',
        ],
        learnMoreLink: 'Learn more about RD Inspections',
        accessLink: 'Access RD Inspections',
      },
      jPlanner: {
        title: 'Jacked Planner',
        description: [
          'An SaaS platform developed specifically for Gyms and trainers. ',
          'It enables customers to easily Create, Access, and Manage their training plans',
          ', offering them the flexibility to select daily exercises and create schedules that suit their needs. Additionally, users have the capability to ',
          'take notes for each training day',
          ', providing both quantitative and qualitative assessments of their workouts. This system enhances the overall gym experience, ',
          'empowering users to have more control over their fitness routines and progress tracking',
          '.',
        ],
        learnMoreLink: 'Learn more about Jacked Planner',
        accessLink: 'Access Jacked Planner',
        footnote:
          '**All payment methods in this project are currently unavailable.',
      },
      ibWebsite: {
        title: 'Inbox Refeições - Website',
        description: [
          'A website built for a catering company located in Fortaleza, Brazil. ',
          'The goal was to simplify the price quote request process',
          ', enhancing the overall user experience. To achieve this, a dynamic form was integrated using ',
          'React-Hook-Form ',
          'and ',
          'Zod ',
          'for data validation and also ',
          'Radix-UI ',
          'and ',
          'Framer Motion ',
          'to provide accessibility and smooth animations. Finally, we used Google SEO Checker to improve/boost search engine visibility.',
        ],
        learnMoreLink: 'Learn more about Inbox Website',
        accessLink: 'Access Inbox Website',
      },
    },
    bootcampProjects: {
      title: ['bootcamp', 'projects'],
      bootcamps: {
        nextBlog: {
          title: 'Next.js blog',
          description:
            'Developed using Next, NextAuth, FaunaDB, Stripe and Prismic. The user only will be able to access the articles content if subscribed.',
        },
        waiterApp: {
          title: 'Reataurant Sass',
          description:
            'A Node.js Backend was developed to provide the Orders Functionalities, such as a Mobile App and a Web Dashboard Manager.',
        },
        desingSystem: {
          title: 'Design System',
          description:
            'A Login form page created just to be used as an exemple to build a Design System with Storybook, MSW and a CI/CD use case.',
        },
        videoPlatform: {
          title: 'Video Platform',
          description:
            'Developed using React, GraphQL, Apollo Client, and Tailwind. A use case of consuming GraphQL API data where users can access available videos.',
        },
      },
    },
    experiences: {
      mainExperiences: {
        title: 'Main Experiences',
        list: [
          {
            role: 'Software Engineer',
            company: 'Rd Inspections - Contract',
            timePeriod: '2023–Pres.',
          },
          {
            role: 'Web Developer - Fullstack',
            company: 'Inbox - Refeições Coletivas',
            timePeriod: '2021–Pres.',
          },
          {
            role: 'Software Engineer - Design / Fullstack',
            company: 'Jacked Planner - Contract',
            timePeriod: '2022–2023',
          },
          {
            role: 'Project Manager',
            company: 'Inbox - Refeições Coletivas',
            timePeriod: '2018–2020',
          },
          {
            role: 'Operations Manager',
            company: 'Qualittè Alimentação e Serviços',
            timePeriod: '2013–2017',
          },
        ],
      },
      bootcampsAndPappers: {
        title: 'Bootcamps and Papers',
        list: [
          {
            title: 'Rocketseat Ignite NodeJs Bootcamp',
            description:
              '+100 hours web development focusing on Back-end using plain Node.js to develop RESTful APIs, but also Fastify and NestJs - In Progress.',
            highlight:
              'HTTP, REST, Fastify, NestJS, Docker, JWT, DDD, Clean Architecture and more.',
          },
          {
            title: 'Rocketseat Ignite ReactJs Bootcamp',
            description:
              '+100 hours of Front-End web development, but also applying some Back-end tools into the development process.',
            highlight:
              'Typescript, React, NextJs, Jest, GraphQL, Radix, Tailwind, StripeAPI and more.',
          },
          {
            title: 'Net Profit increased by +25% by using OKR Framework',
            description:
              "Graduation Thesis based on the OKR framework implementation, which resulted in the project's net profit increasing by +25% - written in pt-BR.",
            highlight: 'OKR Framework Case Study',
          },
        ],
      },
    },
    footer: {
      leavingMessage:
        "If you think that I can assist you, I'll love to talk about your problem. Feel free to shoot me an email or contact me through my socials below.",
      whatsappChat: 'Click to chat',
      footerNav: {
        title: 'Quick Navigation',
        pages: {
          home: 'Home',
          rdInspec: 'RD Inspections - CRM',
          jPlanner: 'Jacked Planner - SaaS',
          ibWebsite: 'Inbox - Website',
        },
      },
    },
  },
  rdProjectPage: {
    navigation: {
      pageTitle: 'RD Inspection',
      briefing: 'Project Briefing',
      features: 'Main Features',
      components: 'Components Showcase',
      nextProject: 'Next Project',
      home: 'Home Page',
    },
    description: {
      p1: [
        'I am a ',
        'Software Engineer ',
        'at ',
        'RD Inspections',
        ', an online vehicle inspection company specialized in delivering vehicle technical reports in Ceará, Brazil. Therefore, this project is presented in Portuguese-BR.',
      ],
      p2: [
        'I’ve been enrolled with this project since the client’s first contact, ',
        'leading the Front End team',
        ', striving to create the best CRM design for the company. ',
        'Simultaneously, I collaborate with the Back End team',
        ', providing them with the necessary tools to develop the most efficient REST APIs for our software.',
      ],
      table: [
        { head: 'Role:', body: 'Full Stack Developer' },
        { head: 'Platform:', body: 'Desktop / Mobile' },
        { head: 'Category:', body: 'Company System / CRM' },
      ],
    },
    briefing: {
      sectionTitle: ['project', 'briefing'],
      article: {
        title: 'Understanding the Environment and the Client’s Needs.',
        p1: [
          'RD Inspection was struggling with their system because the company was growing, and as the company expanded, so did its requirements. In this scenario, ',
          'the customer’s primary issue highlighted by the company was the inspection process',
          '.',
        ],
        p2: [
          'To address this, we started the project planning by evaluating two critical aspects:',
        ],
        list1: [
          'The overall Client Journey, evaluating the entire client experience.',
          'Identify all primary issues within the inspection process.',
        ],
        p3: [
          'In addition to that, it was mandatory that the new system retained all existing features, while introducing new enhancements aiming at ',
          'boosting the overall performance, productivity and also taking client experience to the next level',
          '.',
        ],
        p4: [
          'Then ',
          'we created the software flowchart',
          ' and only after its approval, we started to create the main classes, data types, database schemas, we also listed all the artifacts required from the inception to the final stages, and finally, we started the Front End design/prototype.',
        ],
        p5: [
          'The main issue pointed by the clients was the inspection process',
          ', witch previously, it was based in a two-step process:',
        ],
        list2: [
          'RD Engineer shares a third-party API link for clients to upload vehicle pictures.',
          'The Engineer followed up with a separate link for a recorded meeting, where the technical inspection took place.',
        ],
        p6: [
          'Recognizing the inefficiencies of this two-step process, ',
          'we decided to create a REST API to combine these features',
          ' into a streamlined workflow. Now, clients can schedule meetings only after the vehicle picture status has been confirmed.',
        ],
        p7: [
          'The RD CRM is still in development, but I’ll leave here some recent screenshots, as well as some brief explanations of its current functionality.',
        ],
      },
    },
    mainFeatures: {
      sectionTitle: ['main', 'features'],
      article: {
        auth: {
          title: 'Authentication and Authorization',
          p1: [
            'The project required the implementation of two critical features: ',
            'User Permissions based on roles ',
            'and ',
            'User Actions Mapping based on system interactions',
            '.',
          ],
          p2: [
            'Our team led this initiative, starting with the ',
            'login page design using Figma',
            ', followed by the ',
            'component’s micro-interactions development',
            '. Only then, we focused our efforts on these critical features.',
          ],
          p3: [
            'We decided to use ',
            'NextJs ',
            'based on a strategic foresight, anticipating the creation of an institutional page in the future, ',
            'making the SEO support provided by the framework highly useful',
            '. Additionally, the ',
            'SSR ',
            'and ',
            'SSG ',
            'features align perfectly with our requirements.',
          ],
          p4: [
            'For authentication, we chose ',
            'NextAuth',
            ', a fully secure and flexible authentication library seamlessly supported by NextJs, using ',
            'Custom Credentials Provider ',
            'and ',
            'Token & Refresh Token ',
            'strategy to manage user login status.',
          ],
          p5: [
            'In addition, we integrated ',
            'Google ReCaptcha v2',
            ', implemented Route Security Measures and ensured Features Accessibility based on User Role.',
          ],
        },
        dashboard: {
          title: 'Dynamic Dashboard',
          p1: [
            'As ',
            'the APIs are currently in development stage',
            ', I’ll share some screenshots of the current dashboard front end. Please note that there might be potential changes in the future, but the following design was accepted by the company.',
          ],
        },
      },
    },
    compShowcase: {
      sectionTitle: ['components', 'showcase'],
    },
    nextProject: {
      sectionTitle: ['next', 'project'],
    },
  },
}
