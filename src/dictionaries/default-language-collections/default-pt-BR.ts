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
      'Desenvolvedor com ',
      'mais de dois anos de experiência trabalhando em projetos End-2-End',
      ', inclusive em posições de liderança. Fora do trabalho, sou um entusiasta do churrasco e amo esportes em geral.',
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
    programming: 'Programação',
    management: 'Gerenciamento e Design',
    learning: 'Atualmente estudando',
  },
  projects: {
    techsLabel: 'Tecnologias utilizadas:',
    rdInspec: {
      title: 'RD Inspeções - CRM',
      description: [
        'CRM desenvolvido para uma empresa de Inspeções Veiculares Online, provedora de Laudos Técnicos. A principal razão do projeto está em unificar dois serviços, ',
        'Gerenciador de Reuniões de Inspeção',
        ' e ',
        'Provedor de Geolocalização das Imagens dos Veículos',
        '. Para tanto, uma ',
        'REST API',
        ' foi desenvolvida para otimizar este processo, além de um dashboard moderno para melhorar a experiência do usuário.',
      ],
      learnMoreLink: 'Saiba mais sobre RD Inspeções',
      accessLink: 'Acesse RD Inspeções',
    },
    jPlanner: {
      title: 'Jacked Planner',
      description: [
        'SaaS desenvolvido especificamente para academias e personal trainers, ',
        'permitindo que os clientes criem, acessem e gerenciem facilmente seus planos de treinamento',
        ', oferecendo a flexibilidade de selecionar exercícios diários e criar cronogramas que atendam às suas necessidades. Além disso, ',
        'os usuários têm a capacidade de fazer anotações para cada dia de treino',
        ', fornecendo avaliações quantitativas e qualitativas de seus treinos. Este sistema melhora a experiência geral na prática de esportes ',
        'permitindo que os usuários tenham mais controle sobre suas rotinas de condicionamento físico e acompanhamento do progresso',
        '.',
      ],
      learnMoreLink: 'Saiba mais sobre Jacked Planner',
      accessLink: 'Acesse Jacked Planner',
      footnote:
        '**Todos os métodos de pagamento neste projeto estão indisponíveis.',
    },
    ibWebsite: {
      title: 'Inbox Refeições - Website',
      description: [
        'Website criado para uma empresa de catering localizada em Fortaleza, Brasil. ',
        'O objetivo foi simplificar o processo de solicitação de orçamentos dos serviços',
        ', melhorando a experiência geral do usuário. Para conseguir isso, um formulário dinâmico foi integrado usando ',
        'React-Hook-Form ',
        'e ',
        'Zod ',
        'para validação de dados. Também foram utilizadas ferramentas como ',
        'Radix-UI ',
        'e ',
        'Framer Motion ',
        'para fornecer acessibilidade e animações. Por fim, usamos o Google SEO Checker para melhorar a visibilidade nos mecanismos de busca.',
      ],
      learnMoreLink: 'Saiba mais sobre Inbox Website',
      accessLink: 'Acesse Inbox Website',
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
