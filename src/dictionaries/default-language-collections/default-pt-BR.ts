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
    bootcamps: {
      nextBlog: {
        title: 'Next.js blog',
        description:
          'Desenvolvido usando Next, NextAuth, FaunaDB, Stripe e Prismic. O usuário só poderá acessar o conteúdo dos artigos se estiver inscrito.',
      },
      waiterApp: {
        title: 'Reataurant Sass',
        description:
          'Uma API Node.js foi desenvolvida para gerenciar pedidos de um restaurante, bem como um aplicativo móvel conectado a um backoffice.',
      },
      desingSystem: {
        title: 'Design System',
        description:
          'Uma página de Login criada apenas como exemplo para construir um Design System com Storybook, MSW e ser um caso de implementação de CI/CD.',
      },
      videoPlatform: {
        title: 'Video Platform',
        description:
          'Desenvolvido com React, GraphQL, Apollo Client e Tailwind. Caso de uso de consumo de uma API GraphQL onde usuários acessam vídeos liberados.',
      },
    },
  },
  experiences: {
    mainExperiences: {
      title: 'Experiências',
      list: [
        {
          role: 'Desenvolvedor de Software',
          company: 'Rd Inspections',
          timePeriod: '2023–Atual',
        },
        {
          role: 'Desenvolvedor Web - Fullstack',
          company: 'Inbox - Refeições Coletivas',
          timePeriod: '2021–Atual',
        },
        {
          role: 'Desenvolvedor Web - Design/Fullstack',
          company: 'Jacked Planner',
          timePeriod: '2022–2023',
        },
        {
          role: 'Gerente de Projetos',
          company: 'Inbox - Refeições Coletivas',
          timePeriod: '2018–2020',
        },
        {
          role: 'Gerente de Operações',
          company: 'Qualittè Alimentação e Serviços',
          timePeriod: '2013–2017',
        },
      ],
    },
    bootcampsAndPappers: {
      title: 'Cursos e Publicações',
      list: [
        {
          title: 'Rocketseat Ignite NodeJs Bootcamp',
          description:
            'Mais de 100 horas de desenvolvimento back-end utilizando Node.js para construir RESTful APIs, jonto com Fastify e Nestjs - Cursando. ',
          highlight:
            'HTTP, REST, Fastify, NestJS, Docker, JWT, DDD, Clean Architecture e mais.',
        },
        {
          title: 'Rocketseat Ignite ReactJs Bootcamp',
          description:
            'Mais de 100 horas de desenvolvimento front-end, lidando com integrações de APIs, paginação, SSR/SSG e Design Patterns.',
          highlight:
            'Typescript, React, NextJs, Jest, GraphQL, Radix, Tailwind, StripeAPI e mais.',
        },
        {
          title: 'Implementação do Framework OKR - Estudo de caso',
          description:
            'Trabalho de conclusão de curso on foi documentada a implementação da ferramenta OKR, retornando um aumento de +25% do resultado.',
          highlight: 'Framework OKR - Estudo de caso',
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
