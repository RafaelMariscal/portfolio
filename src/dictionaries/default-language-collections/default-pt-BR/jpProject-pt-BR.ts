import { JpProjectPage } from '../types/jpPage.type'

export const jpProjectPagePtBR: JpProjectPage = {
  navigation: {
    pageTitle: 'Jacked Planner',
    briefing: 'Briefing do Projeto',
    design: 'Processo Criativo',
    development: 'Software Development',
    nextProject: 'Próximo Projeto',
    home: 'Página Inicial',
  },
  description: {
    p1: [
      'Trabalhei como ',
      'Desenvolvedor Web ',
      'em ',
      'Jacked Planner ',
      '- um SaaS para academias focado em simplificar a criação de Planos de Treino. Neste projeto, desempenhei um papel multidisciplinar, incluindo design, desenvolvimento e implantação.',
    ],
    p2: [
      'Para as tarefas de Design, utilizei o ',
      'Figma ',
      ', garantindo uma interface amigável e visualmente atraente. No Front End, utilizei uma abordagem ',
      'SPA com React',
      ', e para o Back End, usei os serviços do ',
      'Firebase ',
      ', que forneceram funcionalidades para Autenticação, Banco de Dados em Nuvem e Hospedagem.',
    ],
    table: [
      { head: 'Posição', body: 'Desenvolvedor Web' },
      { head: 'Plataforma', body: 'Desktop / Mobile' },
      { head: 'Categoria', body: 'SaaS / Esportes' },
    ],
  },
  briefing: {
    article: {
      title: 'Compreendendo as Principais Necessidades do Cliente.',
      p1: [
        'O Jacked Planner é um SaaS desenvolvido para Academias, Personal Trainers e Entusiastas Fitness, servindo como ',
        'uma plataforma responsável por documentar e acompanhar metas.',
        '.',
      ],
      p2: [
        'A ideia central por trás do Jacked Planner é ',
        'fornecer uma ferramenta amigável ',
        'que não apenas ',
        'simplifica a criação de planos de treino',
        ', mas também ',
        'facilita o monitoramento das principais métricas de treino ',
        'bem como o ',
        'acompanhamento efetivo dos resultados ',
        'alcançados por meio da aderência dedicada ao plano.',
      ],
      p3: [
        'Iniciamos este projeto planejando ',
        'as principais características para criar um plano de treino e acompanhar seus resultados',
        '. Consequentemente, identificamos as seguintes características essenciais:',
      ],
      list1: [
        'Autenticação e Autorização baseadas em Usuário / Funções.',
        'Os usuários poderão criar e gerenciar até 3 Planejadores de Treino com o Plano Gratuito.',
        'Devem haver CRUDs para o Gerenciador de Planos de Treino, Exercícios e Séries.',
        'Os usuários poderão fazer anotações sobre as Repetições Completadas e Peso Levantado para cada série dos exercícios.',
        'Os usuários podem fazer anotações para cada dia de treino.',
      ],
      p4: [
        'Nesse contexto, iniciamos o processo de design das telas e iniciamos o planejamento das tecnologias que usaríamos para dar vida a esta aplicação.',
      ],
    },
  },
  designProcess: {
    sectionTitle: ['processo', 'criativo'],
    article: {
      p1: [
        'Em busca de uma inspiração adequada para o aplicativo, procurei por algo que incorporasse a essência do ',
        'Esporte',
        ', ',
        'Inovação',
        ', ',
        'Estética',
        ', ',
        'Alto Desempenho',
        ', ',
        'Foco ',
        'e ',
        'Determinação',
        '. Com isso, o que escolhi que encapsula todas essas características é a Fórmula 1, da qual sou um grande fã, inclusive.',
      ],
      p2: [
        '',
        'A F1 representa o ápice do automobilismo',
        '. É uma série global de corridas com carros de última geração que atingem velocidades surpreendentes, muitas vezes superando 200 milhas por hora (320 quilômetros por hora). E a F1 é muito mais do que apenas velocidade, é uma fusão de Habilidade, Estratégia, Engenharia e Trabalho em Equipe. ',
        'É um esporte onde a busca pela excelência e a emoção da corrida convergem',
        '.',
      ],
      p3: [
        'E em minha busca por inspiração entre as equipes de Fórmula 1, a ',
        'Equipe McLaren',
        ' se destacou. A revelação de imagens de design dos seus carros realmente capturou minha atenção, especialmente suas escolhas de cores vibrantes.',
      ],
      figcaption:
        'Livery comemorativa que foi apresentada no GP de Mônaco-2021. (Divulgação/McLaren).',
      p4: [
        'O visual se alinha perfeitamente às emoções e conceitos que buscamos transmitir por meio de nosso aplicativo. A fusão da McLaren com ',
        'inovação ',
        'e ',
        'estética ',
        'harmoniza perfeitamente com a nossa visão, onde pretendemos integrar tecnologia com um design envolvente para criar uma experiência do usuário única e imersiva. Inspirado por isso, surgiu a seguinte paleta de cores:',
      ],
      p5: [
        'O próximo passo envolveu o ',
        'Design de Marca',
        ', um elemento crucial de marketing e identidade corporativa. Esse processo envolve ',
        'criar uma identidade visual e emocional para uma marca que se conecta com seu público-alvo',
        ', ajudando a empresa a estabelecer uma presença distinta e memorável no mercado.',
      ],
      p6: [
        'O primeiro passo foi a estratégia de "naming" da marca, o processo de criar um nome único e memorável para uma marca, produto ou serviço, que tem um impacto significativo no sucesso, reconhecimento e percepção do consumidor da marca. O objetivo era escolher um nome fácil de lembrar, que mostrasse exatamente a essência da marca e também envolvesse efetivamente um público mais jovem, o que nos levou a: ',
        'Jacked Planner',
        '.',
      ],
      p7: [
        'No mundo fitness, o termo "',
        'jacked',
        '" é uma expressão usada para descrever alguém muito musculoso, definido ou fisicamente bem desenvolvido. ',
        'Esse termo é frequentemente usado para elogiar ou admirar uma condição física impressionante ou a transformação corporal de alguém alcançada por meio de muito treino e dedicação',
        '. Alinha-se perfeitamente com o objetivo do aplicativo de criar uma percepção do cliente que incentiva os entusiastas do fitness a se destacarem e transformarem seus corpos.',
      ],
      p8: [
        'O próximo passo girou em torno do planejamento de desenvolvimento de software. Durante esta etapa, deliberamos sobre as ferramentas e tecnologias a serem utilizadas na criação do aplicativo, garantindo a integração de todas as características principais apontadas na seção Resumo do Projeto.',
      ],
    },
  },
  softwareDevelopment: {
    sectionTitle: ['software', 'development'],
    article: {
      p1: [
        '',
        'O planejamento de desenvolvimento de software é crucial, pois estabelece a base para um projeto bem-sucedido',
        '. Ele define o escopo, os objetivos e as tecnologia do projeto, garantindo alinhamento com os principais regras de negócio. Um planejamento eficaz promove a coordenação da equipe, gerenciamento de orçamento e facilita a entrega do projeto no prazo.',
      ],
      p2: [
        'Quanto às tecnologia, usamos ',
        'JavaScript',
        ', ',
        'TypeScript',
        ', ',
        'ReactJS',
        ' e ',
        'Tailwind ',
        'como principais ferramentas de Front End para criar uma interface robusta, moderna e amigável ao usuário e que se alinha perfeitamente com os objetivos do projeto. Além disso, a integração do ',
        'Firebase ',
        '- provedor de Back End como Serviço - simplifica a implementação do projeto e aprimora o processo de desenvolvimento. Especificamente para este projeto, usamos os seguintes serviços do Firebase:',
      ],
      list1: [
        [
          'Autenticação',
          ': Um serviço de autenticação baseado em nuvem fornecido pelo Google como parte da plataforma Firebase. Simplifica o processo de implementação de autenticação de usuário em aplicativos da web e móveis, oferecendo um conjunto de métodos de autenticação seguros e fáceis de usar. Também implementamos o login via provedores como Github, Google, Facebook e Anônimo.',
        ],
        [
          'Firestore',
          ': Um serviço de banco de dados em nuvem NoSQL fornecido pelo Google como parte da plataforma Firebase. É projetado para ajudar os desenvolvedores armazenarem, sincronizarem e consultarem dados para aplicativos web e mobile, com facilidade. Firestore é particularmente adequado para aplicativos em tempo real e offline devido à sua sincronização em tempo real e suporte a dados offline.',
        ],
        [
          'Hospedagem',
          ': Um serviço de hospedagem na web fornecido pelo Google como parte da plataforma Firebase. Ele é projetado para simplificar o processo de hospedagem, implantação e gerenciamento de aplicativos da web e conteúdo estático, como HTML, CSS, JavaScript e arquivos de mídia. É especialmente adequado para projetos React SPA.',
        ],
      ],
      p3: [
        'Com essas ferramentas em mãos, começamos o desenvolvimento do projeto com uma abordagem ',
        '"front-end-first"',
        ', seguindo o design do Figma previamente feito. Em seguida, ',
        'as funcionalidades de back-end foram integradas incrementalmente ',
        'à medida que cada tela atingia um status "feito". Por exemplo, as funcionalidades de autenticação e autorização foram implementadas quando a página de login estava praticamente concluída.',
      ],
      p4: [
        'Essa abordagem garantiu um processo de desenvolvimento bem estruturado. Se você quiser conferir como o projeto está funcionando, sinta-se à vontade para ',
        'acessar o Jacked Planner aqui',
        ' ou confira algumas capturas de tela mostrando o resultado final deste projeto.',
      ],
    },
  },
  nextProject: {
    sectionTitle: ['próximo', 'projeto'],
  },
}
