import { JpProjectPage } from '../types/jpPage.type'

export const jpProjectPageEnUS: JpProjectPage = {
  navigation: {
    pageTitle: 'Jacked Planner',
    briefing: 'Project Briefing',
    design: 'Design Process',
    develpment: 'Software Development',
    nextProject: 'Next Project',
    home: 'Home Page',
  },
  description: {
    p1: [
      'I was a ',
      'Software Engineer ',
      'at ',
      'Jacked Planner ',
      '- a Gym SaaS focused on streamlining the creation of Training Planners. In this project, I played a multifaceted role including design, development and deployment.',
    ],
    p2: [
      'For the Design, I used ',
      'Figma ',
      'to tackle its tasks, ensuring a user-friendly and visually appealing interface. On the Front End, I employed a ',
      'SPA approach using React',
      ', and for the Back End I used ',
      'Firebase ',
      'services, which provided capabilities for Authentication, Cloud Database and Hosting.',
    ],
    table: [
      { head: 'Role', body: 'Software Engineer' },
      { head: 'Platform', body: 'Desktop / Mobile' },
      { head: 'Category', body: 'SaaS / Sports' },
    ],
  },
  briefing: {
    article: {
      title: 'Understanding the Client’s Needs.',
      p1: [
        'Jacked Planner is a SaaS developed for Gyms, Personal Trainers and Fitness Enthusiasts that serves as ',
        'a platform responsible for documenting and tracking fitness goals',
        '.',
      ],
      p2: [
        'The central idea behind Jacked Planner is to ',
        'provide a user-friendly tool ',
        'that not only ',
        'simplifies the creation of training plans',
        ' but also ',
        'facilitates the monitoring of the key metrics ',
        'and the ',
        'effective tracking of the results ',
        'achieved through dedicated plan adherence.',
      ],
      p3: [
        'We started this project by planning ',
        'the core features for creating a training plan, and tacking its results',
        '. Consequently, we have identified the following essential features:',
      ],
      list1: [
        'Authentication and Authorization based on User / Roles.',
        'Users can create and manage up to 3 Training Planners with the Free Plan.',
        'CRUD operations for Training Planner, Exercises and Sets.',
        'Users can take notes regarding Reps Completed and Weight lifted for each exercise set.',
        'Users are able to take notes for each training day.',
      ],
      p4: [
        'In this context, we kicked off the screen design process and initiated the planning of the technologies we would use to bring this application to life.',
      ],
    },
  },
  designProcess: {
    sectionTitle: ['design', 'process'],
    article: {
      p1: [
        'Looking for a proper Inspiration for the app, I was in search of something that embodies the essence of ',
        'Sports',
        ', ',
        'Innovation',
        ', ',
        'Aesthetics',
        ', ',
        'High Performance',
        ', ',
        'Tireless Focus ',
        'and ',
        'Determination',
        '. What I came across that encapsulates all these characteristics is Formula 1, which I happen to be a huge fan, by the way.',
      ],
      p2: [
        '',
        'F1 represents the apex of motorsport',
        '. It’s a global racing series featuring cutting-edge single-seat race cars that reach astonishing speeds, often exceeding 200 miles per hour (320 kilometers per hour). And F1 is much more than just speed, it’s a fusion of Skill, Strategy, Engineering Prowess and Teamwork. ',
        'It’s a sport where the pursuit of excellence and the thrill of racing converge',
        '.',
      ],
      p3: [
        'In my quest to find inspiration among Formula 1 teams, the ',
        'Mclaren Team',
        ' stood out as a captivating source. Their unveiling of digital car design images truly captured my attention, especially their vibrant color choices.',
      ],
      figcaption:
        'Commemorative livery that was presented at Monaco GP-2021. (Disclosure/McLaren).',
      p4: [
        'These visuals perfectly align with the emotions and concepts we strive to convey through our app. McLaren’s fusion of ',
        'innovation ',
        'and ',
        'aesthetics ',
        'harmonizes seamlessly with our vision, where we aim to integrate state-of-the-art technology with captivating design to craft a distinctive and immersive user experience. Inspired by it, came with the following color pallet:',
      ],
      p5: [
        'The next step involved ',
        'Brand Design',
        ', a crucial element of marketing and corporate identity. This process involves ',
        'creating a visual and emotional identity for a brand that connects with its target audience',
        ', helping the company to establish a distinct and memorable presence in the market.',
      ],
      p6: [
        'First step was brand naming strategy, the process of creating a unique and memorable name for a brand, product, or service, having a significant impact on the brand’s success, recognition, and consumer perception. The aim was to choose a name that is easy to recall, that shows exactly the brand’s essence, and also effectively engage a younger audience, which led us to: ',
        'Jacked Planner.',
      ],
      p7: [
        'In the fitness world, the term "',
        'jacked',
        '" is a slang expression used to describe someone who is very muscular, ripped, or physically well-developed. ',
        'This term is often used to praise or admire someone’s impressive physical condition or body transformation achieved through strength training and bodybuilding workouts',
        '. It aligns perfectly with the app’s goal of creating a customer perception that encourages fitness enthusiasts to excel and transform their bodies.',
      ],
      p8: [
        'The next step revolved around software development planning. During this stage, we deliberated on the tools and technologies to be employed in creating the app, but also ensuring the integration of all core features outlined in the Project Briefing section.',
      ],
    },
  },
  softwareDevelopment: {
    sectionTitle: ['software', 'development'],
    article: {
      p1: [
        '',
        'Software development planning is crucial as it sets the foundation for a successful project',
        '. It defines the project’s scope, goals, and the technology stack, ensuring alignment with business key objectives. Effective planning promotes team coordination, budget management, and facilitates on-time project delivery.',
      ],
      p2: [
        'About tech stack, I’ve strategically used ',
        'JavaScript',
        ', ',
        'TypeScript',
        ', ',
        'ReactJS',
        ',',
        ' and ',
        'Tailwind',
        ' as main Front End tools to create a robust, modern and user-friendly interface that perfectly aligns with the project’s objectives. Furthermore, the integration of ',
        'Firebase ',
        '- Back End as a Service provider - streamlines the project implementation and enhances the development process. Specifically for this project, we used the following Firebase services:',
      ],
      list1: [
        [
          'Authentication',
          ': A cloud-based authentication service provided by Google as part of the Firebase platform. It simplifies the process of implementing user authentication in web and mobile applications by offering a set of secure, easy-to-use authentication methods. We’ve also implemented login via providers like Github, Google, Facebook, and Anonymous.',
        ],
        [
          'Firestore',
          ': A cloud-based, NoSQL document database service provided by Google as part of the Firebase platform. It’s designed to help developers store, synchronize, and query data for web and mobile applications easily. Firestore is particularly well-suited for real-time and offline-capable applications due to its real-time synchronization and offline data support.',
        ],
        [
          'Hosting',
          ': A web hosting service provided by Google as part of the Firebase platform. It is designed to simplify the process of hosting, deploying, and managing web applications and static content such as HTML, CSS, JavaScript, and media files and It’s especially well-suited for SPA React projects.',
        ],
      ],
      p3: [
        'With these tools in hand, the project started its development with ',
        'front-end-first ',
        'approach, following the Figma design previously done. Then, ',
        'the Back-end functionalities were integrated incrementally',
        ' as each page reached a “done” status. For example, the authentication and authorization features were implemented when the login page section was near completion.',
      ],
      p4: [
        'This approach ensured a well-structured and step-by-step development process. If you want to check it out how the project running, feel free to ',
        'access Jacked Planner here',
        ' , or check it out some screenshots showcasing the final outcome of this project.',
      ],
    },
  },
  nextProject: {
    sectionTitle: ['next', 'project'],
  },
}
