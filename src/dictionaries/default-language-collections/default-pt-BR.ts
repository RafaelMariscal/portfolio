import { DefaultDictionary } from './types/@dictionary.type'

export const ptBR: DefaultDictionary = {
  home: {
    navigation: {
      home: 'Início',
      brefing: 'Introdução',
      projects: 'Projetos',
      bootcamps: 'Bootcamps',
      experience: 'Experiências',
    },
    hero: {
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
    briefing: {
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
        'Caso acredite que posso te ajudar a resolver seu problema, adorarei conversar a respeito. Basta me enviar um e-mail ou entrar em contato pelas redes sociais abaixo.',
      whatsappChat: 'Click to chat',
      footerNav: {
        title: 'Navegação Rápida',
        pages: {
          home: 'Início',
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
