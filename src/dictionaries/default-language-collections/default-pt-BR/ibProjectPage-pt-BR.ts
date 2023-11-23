import { IbProjectPage } from '../types/ibPage.type'

export const ibProjectPagePtBR: IbProjectPage = {
  navigation: {
    pageTitle: 'Inbox Website',
    briefing: 'Briefing',
    design: 'Design',
    development: 'Desenvolvimento',
    components: 'Componentes',
    nextProject: 'Próximo Projeto',
    home: 'Página Inicial',
  },
  description: {
    p1: [
      'Atuo como ',
      'Desenvolvedor Web - Fullstack ',
      'na ',
      'Inbox Refeições Coletivas ',
      ', uma empresa fornecedora do serviço de catering, com foco no setor industrial. Esta empresa está sediada em Fortaleza-CE (Brasil), consequentemente, este projeto está apresentado em Português-BR.',
    ],
    p2: [
      'Neste projeto, assumi uma série de responsabilidades, desde o design até o desenvolvimento. As tarefas de design e prototipagem foram realizadas com o ',
      'Figma',
      ', o Front End foi feito utilizando ',
      'Typescript',
      ', ',
      'NextJs',
      ', ',
      'Tailwind',
      ', e para acessibilidade e animações, ',
      'RadixUi',
      ', e ',
      'Framer Motion',
      '. O Back End foi construído usando o servidor presente no nextjs, em ',
      'NodeJs',
      ', ',
      'Prisma',
      ', ',
      'PostgreSQL',
      ', e ',
      'Resend',
      '.',
    ],
    table: [
      { head: 'Posição', body: 'Desenvolvedor Web' },
      { head: 'Plataforma', body: 'Desktop / Mobile' },
      { head: 'Categoria', body: 'Website Corporativo' },
    ],
  },
  briefing: {
    article: {
      title: 'Compreendendo as Principais Necessidades do Cliente.',
      p1: [
        'Quando entrei na Inbox Refeições, uma das minhas primeiras responsabilidades foi projetar e desenvolver o site da empresa. Na época, minha confiança em desenvolvimento web era limitada, então optamos por criá-lo usando uma plataforma de desenvolvimento. No entanto, com o tempo, o design do site tornou-se defasado e menos atrativo, ',
        'levando à necessidade de uma remodelação completa',
        '.',
      ],
      p2: [
        'Minha tarefa era redesenhar e desenvolver o site da empresa, a fim de ',
        'mostrar efetivamente os serviços oferecidos',
        ' e ',
        'simplificar o processo de solicitação de orçamentos',
        '. Este processo ofereceu uma oportunidade para implementar melhorias focadas na melhoria da experiência do usuário e na apresentação mais eficaz de informações essenciais, que incluíram:',
      ],
      list1: [
        'Destacar os serviços fornecidos pela empresa.',
        'Enfatizar as principais vantagens de utilizar os serviços da empresa.',
        'Mostrar as bases fundamentais da empresa.',
        'Fornecer uma maneira mais amigável para solicitar orçamentos de serviços.',
      ],
      p3: [
        'Neste contexto, iniciei o projeto planejando as tecnologias que usaríamos para dar vida a este site, seguido pelo design das telas e componentes.',
      ],
    },
  },
  designProcess: {
    sectionTitle: ['processo', 'criativo'],
    article: {
      p1: [
        'O processo de design de um website é uma empreitada colaborativa destinada a criar uma experiência online coerente e autêntica que represente fielmente a marca, ao mesmo tempo em que atende às expectativas do usuário. O processo começa com os materiais fornecidos pela empresa de Design, incluindo elementos-chave como o logotipo, paleta de cores, tipografia, diretrizes de estilo e qualquer conteúdo relacionado à marca.',
      ],
      p2: [
        'Ao receber esses materiais, embarquei na jornada de compreensão da essência da marca, envolvendo a exploração dos valores, missão e personalidade da marca, enquanto identificava os elementos visuais que a representam de forma mais autêntica. Esse processo garante que o design do site harmonize perfeitamente com a identidade da marca, um fator crucial para um design coerente.',
      ],
      p3: [
        'Em seguida, definimos os objetivos do site e identificamos o público-alvo, servindo como base para o design das telas. Por exemplo, como um dos objetivos principais é aumentar as vendas, priorizamos criar uma maneira amigável de obter orçamentos de serviços. Com esses objetivos em mente, comecei a criar um mapa do site claro com uma navegação intuitiva para acesso fácil ao conteúdo.',
      ],
      p4: [
        'Com o plano de design consolidado, usei ',
        'Figma ',
        'como principal ferramenta de design, também responsável pela prototipagem. Os wireframes e protótipos interativos guiam o arranjo dos elementos, alinhando-se às diretrizes de Design de Branding e incorporando visuais da marca. Em seguida, com a aprovação do design, iniciei o desenvolvimento do site em si.',
      ],
    },
  },
  softwareDevelopment: {
    sectionTitle: ['software', 'development'],
    p1: [
      '',
      'O planejamento do desenvolvimento de software é uma etapa crucial, pois define a base para um projeto bem-sucedido',
      '. Nela, é definido o escopo, os objetivos do projeto e a stack de tecnologia, garantindo o alinhamento com os principais objetivos do negócio. O planejamento eficaz promove a coordenação da equipe, o gerenciamento do orçamento e facilita a entrega do projeto no prazo.',
    ],
    p2: [
      'Em termos da pilha de tecnologia, optei por usar ',
      'JavaScript',
      ', ',
      'TypeScript',
      ', ',
      'ReactJS',
      ', e ',
      'Tailwind',
      ' como as principais ferramentas de Front End, visando criar uma interface interativa, moderna, amigável ao usuário e perfeitamente alinhada com o objetivo do projeto. Além disso, decidi ustilizar o NextJs, aproveitando o suporte de SEO do framework para contribuir com a visibilidade e acessibilidade ao site.',
    ],
    p3: [
      'Com o objetivo de criar uma interface de usuário acessível, personalizável e de alto desempenho, incorporei ',
      'RadixUI ',
      'na stack de tecnologia. Essa escolha melhorou a produtividade no desenvolvimento e simplificou a criação de micro-interações dos componentes. Para animações, optei por usar ',
      'Framer Motion',
      ', uma biblioteca para gerir animações em aplicações React que oferece uma maneira simples e poderosa de adicionar animações e movimento a websites, aprimorando a experiência do usuário como um todo.',
    ],
    p4: [
      'Uma vez que usamos formulários para lidar com informações do cliente e enviá-las para o setor de vendas, optei por usar ',
      'Zod',
      ', uma biblioteca compatível com TypeScript que simplifica a validação de dados, garantindo segurança de tipo e qualidade de código. Para complementar o Zod, escolhi usar ',
      'React-hook-form',
      ', uma biblioteca leve, performática e amigável ao desenvolvedor para gerenciar o estado e a validação de formulários em aplicativos React. Ele se integra perfeitamente com o Zod, melhorando o desempenho geral do projeto e simplificando a construção de formulários.',
    ],
    p5: [
      'Neste projeto, o cliente exigiu a capacidade de enviar solicitações de orçamento de serviços por e-mail. Para lidar com esse recurso, usamos ',
      'React Email',
      ' em conjunto com ',
      'Resend',
      ', uma empresa especializada em serviços de marketing e entrega de e-mail, desenvolvida para atender às necessidades de desenvolvedores e empresas.',
    ],
    p6: [
      'Os principais motivos por trás da escolha de usar o Resend foram impulsionados por dois fatores principais: acessibilidade e experiência de desenvolvimento. Além disso, o Resend possui uma abordagem centrada no usuário, fornecendo um serviço de entrega de e-mail eficiente com suporte a envio de e-mails em várias regiões e integração perfeita com o React Email.',
    ],
    p7: [
      'Se você quiser conferir o site totalmente funcional, ',
      'acesse o Website da Inbox aqui',
      '. Mas se você quiser dar uma olhada em como os componentes criados para este site funcionam, acesse a seção de exibição de componentes.',
    ],
  },
  compShowcase: {
    sectionTitle: ['demonstrando', 'componentes'],
  },
  nextProject: {
    sectionTitle: ['próximo', 'projeto'],
  },
}
