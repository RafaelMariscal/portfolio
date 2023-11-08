import { DefaultDictionary } from './@dictionary.type'

export const ptBR: DefaultDictionary = {
  homeNavigation: {
    home: 'Início',
    brefing: 'Introdução',
    projects: 'Projetos',
    experience: 'Experiencias',
  },
  homeHero: {
    role: ['Desenvolvedor de Software', '/', 'Gerente de Projetos'],
    description: [
      'Eu ',
      'desenvolvo soluções ',
      'e ',
      'gerencio times ',
      'para atingir resultados concretos.',
    ],
    whatsappChat: 'Click para conversar',
  },
  homeBriefing: {
    p1: [
      'Sou um Desenvolvedor com ',
      'mais de dois anos de experiência',
      ', tendo trabalhado em projetos End-2-End, inclusive em posições de liderança. Fora do trabalho, sou um entusiasta do churrasco e amo esportes em geral.',
    ],
    p2: [
      'Durante minha carreira, estive envolvido em projetos utilizando ',
      'Javascript',
      ', ',
      'Typescript',
      ', ',
      'React',
      ', ',
      'Next',
      ', ',
      'Node.js',
      ' e ',
      'NestJs',
      '. Nesses projetos, tive a oportunidade de contribuir desde o contato inicial com o cliente até a sprint final.',
    ],
    p3: [
      'Sobre meu background acadêmico, sou graduado em ',
      'Engenharia',
      ' e atualmente estou cursando uma segunda graduação, ',
      'Análise e Desenvolvimento de Sistemas',
      '.',
    ],
    link: 'Acesse minhas experiências',
  },
  mainSkills: {
    title: ['main', 'skills'],
    programming: 'Programming',
    management: 'Management',
    learning: 'Learning',
  },
  projects: {
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
      techsLabel: 'Techs used in this project:',
      learnMoreLink: 'Learn more about RD Inspections',
      accessLink: 'Access RD Inspections',
    },
    JPlanner: {
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
      techsLabel: 'Techs used in this project:',
      learnMoreLink: 'Learn more about Jacked Planner',
      accessLink: 'Access Jacked Planner',
      footnote:
        '**All payment methods in this project are currently unavailable.',
    },
    IbWebsite: {
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
      techsLabel: 'Techs used in this project:',
      learnMoreLink: 'Learn more about Inbox Website',
      accessLink: 'Access Inbox Website',
    },
  },
  bootcampProjects: {
    title: ['bootcamp', 'projects'],
    accessLink: 'Access here',
    bootcamps: [
      {
        title: 'Next.js blog',
        description:
          'Developed using Next, NextAuth, FaunaDB, Stripe and Prismic. The user only will be able to access the articles content if subscribed.',
        techsList: 'nextBlogTechs',
      },
      {
        title: 'Reataurant Sass',
        description:
          'A Node.js Backend was developed to provide the Orders Functionalities, such as a Mobile App and a Web Dashboard Manager.',
        techsList: 'waiterAppTechs',
      },
      {
        title: 'Design System',
        description:
          'A Login form page created just to be used as an exemple to build a Design System with Storybook, MSW and a CI/CD use case.',
        techsList: 'designSystemTechs',
      },
      {
        title: 'Video Platform',
        description:
          'Developed using Next, NextAuth, FaunaDB, Stripe and Prismic. The user only will be able to access full content if signed up.',
        techsList: 'videoPlatformTechs',
      },
    ],
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
