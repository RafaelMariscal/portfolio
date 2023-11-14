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
      pageTitle: 'RD Inspeções',
      briefing: 'Briefing do Project',
      features: 'Funcionalidades',
      components: 'Componentes',
      nextProject: 'Próximo Projeto',
      home: 'Página Inicial',
    },
    description: {
      p1: [
        'Atualmente atuo como ',
        'Desenvolvedor de Software',
        ', contratado pela ',
        'RD Inspeções',
        ', uma empresa prestadora do serviço de vistoria veicular online no estado do Ceará, Brasil. Logo, o projeto foi desenvolvido em Português-BR em sua totalidade.',
      ],
      p2: [
        'Estou envolvido neste projeto desde o primeiro contato com o cliente, ',
        'liderando o time de Front End',
        ', tendo como finalidade criar a melhor interface de CRM para a empresa. ',
        'Simultaneamente, colaboro com a time de Back End',
        ', fornecendo-lhes as ferramentas necessárias para desenvolver as APIs REST mais eficientes para o nosso software.',
      ],
      table: [
        { head: 'Posição', body: 'Desenvolvedor de Software' },
        { head: 'Plataforma', body: 'Desktop' },
        { head: 'Categoria', body: 'Sistema Corporativo / CRM' },
      ],
    },
    briefing: {
      sectionTitle: ['perspectiva', 'geral'],
      article: {
        title: 'Compreendendo as Principais Necessidades do Cliente.',
        p1: [
          'A RD Inspection estava enfrentando problemas com seu sistema, tendo em vista que a empresa estava crescendo, tal qual suas necessidades. Nesse cenário, ',
          'o principal problema apontado pelo cliente estava relacionado ao processo de inspeção',
          '.',
        ],
        p2: [
          'Para lidar com isso, começamos o planejamento do projeto avaliando dois aspectos críticos:',
        ],
        list1: [
          'A Jornada do Cliente, avaliando toda a experiência do usuário.',
          'Identificar todos os principais problemas no processo de inspeção.',
        ],
        p3: [
          'Além disso, era obrigatório que o novo sistema mantivesse todas as funcionalidades existentes, introduzindo algumas novas funcionalidades, visando ',
          'impulsionar o desempenho e produtividade como um todo, e elevar a experiência do cliente',
          '.',
        ],
        p4: [
          'Então ',
          'criamos o fluxograma de software',
          ' e somente após sua aprovação, começamos a criar as principais intefaces, as estruturas de dados, e schemas para o banco de dados. Também listamos todos os artefatos necessários desde a concepção até as etapas finais, e finalmente, começamos o design/protótipo do Front End.',
        ],
        p5: [
          'O principal problema apontado pelos clientes era o processo de inspeção',
          ', que anteriormente era baseado em um processo com duas etapas:',
        ],
        list2: [
          'O Engenheiro compartilha um link para um processo onde o cliente envia as fotos do veículo.',
          'O Engenheiro envia um outro link para uma reunião gravada, onde a inspeção técnica ocorre.',
        ],
        p6: [
          'Reconhecendo a ineficiência desse processo de duas etapas, ',
          'decidimos criar uma API REST para unificar essas funcionalidades',
          ' em um fluxo único de trabalho. Assim, os clientes podem agendar reuniões somente após a confirmação do status da imagem do veículo.',
        ],
        p7: [
          'O CRM ainda está em desenvolvimento, mas vou deixar aqui algumas capturas de tela, bem como uma rápida explicação do que já está pronto.',
        ],
      },
    },
    mainFeatures: {
      sectionTitle: ['funções', 'centrais'],
      article: {
        auth: {
          title: 'Autenticação e Autorização',
          p1: [
            'O projeto exigiu a implementação de duas funcionalidades críticas: ',
            'Permissões de Usuário baseadas em funções ',
            'e ',
            'Mapeamento de Ações do Usuário baseado em interações no sistema',
            '.',
          ],
          p2: [
            'Nossa equipe lidou com essa iniciativa, começando com o ',
            'design da página de login usando o Figma',
            ', seguido pelo desenvolvimento das ',
            'microinterações dos componentes',
            '. Somente então, concentramos nossos esforços nas funcionalidades críticas.',
          ],
          p3: [
            'Optamos por usar ',
            'NextJs ',
            'como uma decisão estratégica, antecipando a criação de uma página institucional no futuro, ',
            'tornando o suporte de SEO fornecido pelo framework altamente útil',
            '. Além disso, as características como ',
            'SSR ',
            'e ',
            'SSG ',
            'se alinham perfeitamente com nossos requisitos do projeto.',
          ],
          p4: [
            'Para a funcionalidade de autenticação, escolhemos ',
            'NextAuth',
            ', uma biblioteca de autenticação totalmente segura e flexível, perfeitamente suportada pelo NextJs. Usando o',
            'provedor de credenciais personalizado ',
            'e estratégia de ',
            'Token & Refresh Token ',
            'para gerenciar o status de login do usuário.',
          ],
          p5: [
            'Além disso, integramos ',
            'Google ReCaptcha v2',
            ', implementando ',
            'Medidas de Segurança de Rota ',
            'e garantimos a ',
            'Acessibilidade de Recursos com base na Função do Usuário',
            '.',
          ],
        },
        dashboard: {
          title: 'Dashboard Interativo',
          p1: [
            'Como a ',
            'API está atualmente em estágio de desenvolvimento',
            ', vou compartilhar algumas capturas de tela do front end Dashboard. Podem haver algumas alterações no futuro, mas o design a seguir foi aceito pelo cliente.',
          ],
          p2: [
            'Além disso, no final da página, você encontrará a seção Demonstrando Componentes, onde você pode experimentar rapidamente como esses componentes funcionam. Segue o link de ',
            'acesso rápido à seção Demonstrando Componentes',
            '.',
          ],
        },
      },
    },
    compShowcase: {
      sectionTitle: ['demonstrando', 'componentes'],
    },
    nextProject: {
      sectionTitle: ['próximo', 'projeto'],
    },
  },
}
