import { DefaultDictionary } from './@dictionary.type'

export const enUS: DefaultDictionary = {
  homeNavigation: {
    home: 'Home',
    brefing: 'Briefing',
    projects: 'Projects',
    experience: 'Experience',
  },
  homeHero: {
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
  homeBriefing: {
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
          role: 'Rd Inspections - Contract',
          company: 'Design and Full Stack Project',
          timePeriod: '2023 - Present',
        },
        {
          role: 'Software Developer',
          company: 'Inbox - Refeições Coletivas',
          timePeriod: '2021 - Present',
        },
        {
          role: 'Jacked Planner - Contract',
          company: 'Design and Development',
          timePeriod: '2022 - 2023',
        },
        {
          role: 'Project Manager',
          company: 'Inbox - Refeições Coletivas',
          timePeriod: '2018 - 2020',
        },
        {
          role: 'Operations Manager',
          company: 'Qualittè Alimentação e Serviços',
          timePeriod: '2013 - 2017',
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
      "If you think that I can assist you, I'd love to talk about your problem. Feel free to shoot me an email or contact me through my socials below.",
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
}
