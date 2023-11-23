import { RdProjectPage } from '../types/rdPage.type'

export const rdProjectPagePtBR: RdProjectPage = {
  navigation: {
    pageTitle: 'RD Inspeções',
    briefing: 'Briefing',
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
}
