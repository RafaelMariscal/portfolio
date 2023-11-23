import { RdProjectPage } from '../types/rdPage.type'

export const rdProjectPageEnUS: RdProjectPage = {
  navigation: {
    pageTitle: 'RD Inspection',
    briefing: 'Briefing',
    features: 'Features',
    components: 'Components',
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
      { head: 'Role', body: 'Full Stack Developer' },
      { head: 'Platform', body: 'Desktop' },
      { head: 'Category', body: 'Company System / CRM' },
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
          ', I’ll share some screenshots of the current dashboard front end. Please note that there might be potential changes in the future, but ',
          'the following design was accepted by the company',
          '.',
        ],
        p2: [
          'In addition to that, at the end of the page you’ll find the Components Showcase section, where you can quickly experience how these components work. Here’s a direct link to ',
          'access the components showcase',
          '.',
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
}
