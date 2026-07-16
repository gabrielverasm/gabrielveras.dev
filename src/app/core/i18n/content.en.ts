import { PortfolioContent } from '../models/portfolio-content.model';

export const CONTENT_EN: PortfolioContent = {
  language: 'en',
  accessibility: {
    skipLinkLabel: 'Skip to main content',
    primaryNavigationLabel: 'Primary navigation',
    languageSwitcherLabel: 'Change language',
    openMenuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
    profilePhotoAlt: 'Professional photo of Gabriel Veras',
    openProfilePhotoLabel: 'Open larger professional photo',
    closeProfilePhotoLabel: 'Close photo preview',
    accessibilityControlsLabel: 'Accessibility controls',
    themeToggleLabel: 'Toggle theme',
    enableLightModeLabel: 'Enable light mode',
    enableDarkModeLabel: 'Enable dark mode',
    decreaseFontSizeLabel: 'Decrease font size',
    decreaseFontSizeShortLabel: 'A-',
    increaseFontSizeLabel: 'Increase font size',
    increaseFontSizeShortLabel: 'A+',
    resetFontSizeLabel: 'Reset font size',
    highContrastLabel: 'High contrast',
    enableHighContrastLabel: 'Enable high contrast',
    disableHighContrastLabel: 'Disable high contrast',
    backToTopLabel: 'Back to top',
  },
  seo: {
    title: 'Gabriel Veras Miranda | Senior Java Backend Engineer',
    description:
      'Senior Java Backend Engineer with 8+ years of experience in Spring Boot, Quarkus, AWS, microservices, REST APIs, Kafka, automated testing and mission-critical systems.',
  },
  navigation: [
    { label: 'Experience', href: '/#experience' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Education', href: '/#education' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ],
  hero: {
    eyebrow: 'Professional portfolio',
    name: 'Gabriel Veras Miranda',
    role: 'Senior Java Backend Engineer',
    stackSubtitle: 'Java | Spring Boot | Quarkus | AWS | Microservices',
    location: 'Fortaleza, Ceará, Brazil',
    summary: [
      'Senior Java Backend Engineer with 8+ years of experience in APIs, microservices and mission-critical enterprise systems, focused on stability, system integration and production reliability.',
      'Strong background in Java, Spring Boot, Quarkus, AWS, relational databases, messaging, automated testing and legacy/mainframe system integration.',
    ],
    linkedinActionLabel: 'LinkedIn',
    githubActionLabel: 'GitHub',
    resumeActionLabel: 'Resume',
    experienceActionLabel: 'View experience',
  },
  skills: {
    title: 'Technical skills',
    featuredLabel: 'Featured',
    learning: {
      title: 'Always learning',
      text: 'Continuous improvement, technical practice and knowledge sharing.',
      metricLabels: {
        experience: 'years of experience',
        technicalAreas: 'technical areas',
        listedTechnologies: 'listed technologies',
      },
    },
    groups: [
      {
        title: 'Backend',
        description:
          'APIs, services and backend architecture for scalable, secure and high-performance enterprise systems.',
        iconKind: 'backend',
        items: [
          'Java 8+',
          'Spring Boot',
          'Quarkus',
          'REST APIs',
          'Microservices',
          'JPA',
          'Hibernate',
          'Design Patterns',
          'SOLID',
        ],
      },
      {
        title: 'Cloud & Messaging',
        description: 'Messaging, cloud and integrations for distributed systems.',
        iconKind: 'cloud',
        items: [
          'AWS',
          'AWS SQS',
          'AWS S3',
          'AWS DynamoDB',
          'Kafka',
          'Messaging',
          'Event-driven Architecture',
        ],
      },
      {
        title: 'Data',
        description: 'Persistence, ORM and relational databases in critical systems.',
        iconKind: 'data',
        items: ['SQL', 'Oracle', 'PostgreSQL', 'MySQL', 'Relational Databases'],
      },
      {
        title: 'Quality & Delivery',
        description: 'Testing, automation and practices for continuous delivery.',
        iconKind: 'delivery',
        items: [
          'Automated Tests',
          'JUnit',
          'Mockito',
          'TDD',
          'Docker',
          'Kubernetes',
          'Rancher',
          'CI/CD',
          'Jenkins',
          'Argo CD',
          'Git',
        ],
      },
      {
        title: 'Frontend & Collaboration',
        description: 'Interfaces and technical collaboration in cross-functional teams.',
        iconKind: 'frontend',
        items: ['Angular', 'TypeScript', 'JavaScript', 'Scrum', 'Code Review'],
      },
    ],
  },
  experience: {
    title: 'Work experience',
    detailsLabel: 'View details',
    fullHistoryLabel: 'View full history',
    technologiesLabel: 'Technologies',
    items: [
      {
        company: 'Stefanini Brasil',
        role: 'Software Engineer',
        period: 'February 2024 - Present',
        location: 'Fortaleza, Ceará, Brazil',
        isFeatured: true,
        shortSummary:
          'Designed and maintained Java backend APIs using Spring Boot for mission-critical systems.',
        highlights: [
          'Integrated enterprise systems with legacy/mainframe platforms.',
          'Worked on security, stability, performance and production support.',
          'Applied automated testing with JUnit and TDD practices.',
        ],
        details: [
          'Designed and maintained Java backend APIs using Spring Boot for mission-critical systems, integrating legacy/mainframe platforms with focus on security, stability and production performance.',
          'Optimized database operations using JPA and advanced SQL with IBM DB2 and Oracle.',
          'Collaborated with QA teams during SIT and UAT phases and worked in agile Scrum environments.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'REST APIs',
          'JUnit',
          'TDD',
          'JPA',
          'SQL',
          'IBM DB2',
          'Oracle',
          'Scrum',
        ],
      },
      {
        company: 'K2 Partnering Solutions',
        role: 'Software Engineer',
        period: 'October 2023 - March 2024',
        location: 'Fortaleza, Ceará, Brazil',
        isFeatured: true,
        shortSummary: 'Developed Java backend APIs using Quarkus in a microservices architecture.',
        highlights: [
          'Integrated AWS services such as SQS, DynamoDB and S3.',
          'Implemented TDD and automated tests using JUnit.',
          'Built and ran containerized development environments using Docker.',
        ],
        details: [
          'Developed Java backend APIs using Quarkus in a microservices architecture, integrating AWS services such as SQS, DynamoDB and S3.',
          'Managed messaging and queue-based workflows with AWS SQS.',
          'Participated in code reviews, monitoring and troubleshooting in production-like environments.',
          'Worked in agile teams using Scrum and collaborated with cross-functional stakeholders.',
        ],
        technologies: [
          'Java',
          'Quarkus',
          'Microservices',
          'AWS SQS',
          'AWS DynamoDB',
          'AWS S3',
          'Docker',
          'JUnit',
          'TDD',
          'Scrum',
        ],
      },
      {
        company: 'Coopersystem',
        role: 'Software Engineer',
        period: 'December 2021 - October 2023',
        location: 'Brasília, Distrito Federal, Brazil',
        isFeatured: true,
        shortSummary:
          'Worked on enterprise Java backend systems using microservices, Kafka and CI/CD.',
        highlights: [
          'Worked on enterprise Java backend systems.',
          'Integrated services using Apache Kafka for asynchronous and resilient communication.',
          'Used automated tests and CI/CD pipelines.',
        ],
        details: [
          'Worked on enterprise Java backend systems using microservices, Kafka, JPA/Hibernate, automated tests and CI/CD pipelines.',
          'Used JPA and Hibernate as persistence solutions in complex enterprise systems.',
          'Participated in code reviews and technical discussions to improve architecture and maintainability.',
        ],
        technologies: [
          'Java',
          'Apache Kafka',
          'JUnit',
          'Jenkins',
          'Argo CD',
          'Rancher',
          'JPA',
          'Hibernate',
          'Scrum',
        ],
      },
      {
        company: 'Capgemini',
        role: 'Software Engineer',
        period: 'June 2021 - December 2021',
        location: 'Bahia, Brazil',
        isFeatured: true,
        shortSummary:
          'Developed strategic APIs consumed by a React Native frontend and integrated with Oracle.',
        highlights: [
          'Developed backend APIs for efficient React Native frontend consumption.',
          'Implemented automated tests using JUnit.',
          'Supported CI/CD processes using Jenkins and Argo CD.',
        ],
        details: [
          'Integrated APIs with an Oracle database for secure and efficient data management.',
          'Automated development pipelines to support continuous delivery and reduce errors.',
          'Created API and process documentation to support transparency and future maintenance.',
        ],
        technologies: [
          'Java',
          'APIs',
          'React Native',
          'JUnit',
          'Oracle',
          'Jenkins',
          'Argo CD',
          'CI/CD',
        ],
      },
      {
        company: 'PicBuy',
        role: 'Software Engineer',
        period: 'April 2021 - May 2021',
        location: 'Fortaleza, Ceará, Brazil',
        isFeatured: false,
        shortSummary:
          'Developed an API for an e-commerce platform focused on shopping experiences through images.',
        highlights: [
          'Built an API using Quarkus, MicroProfile, Kafka and Docker.',
          'Integrated the API with a frontend built with Flutter.',
        ],
        details: [
          'Implemented an architecture focused on fast responses and effective resource management.',
          'Implemented automated and end-to-end tests to simulate real usage scenarios.',
          'Supported proactive maintenance to keep the API updated, secure and aligned with evolving requirements.',
        ],
        technologies: [
          'Quarkus',
          'MicroProfile',
          'Kafka',
          'Docker',
          'Flutter',
          'Automated Tests',
          'E2E',
        ],
      },
      {
        company: 'Dell Lead',
        role: 'Software Engineer',
        period: 'May 2020 - February 2021',
        location: 'Fortaleza, Ceará, Brazil',
        isFeatured: false,
        shortSummary:
          'Developed interactive web systems for distance education courses with accessibility requirements.',
        highlights: [
          'Built backend services using Java, Maven, Spring and Hibernate.',
          'Implemented interfaces with AngularJS, Angular 7 and SASS.',
        ],
        details: [
          'Implemented tools following national and international accessibility standards.',
          'Used JPA and PostgreSQL for data persistence.',
          'Worked with JavaScript, NodeJS and Git for interactivity, server-side execution and source control.',
        ],
        technologies: [
          'Java',
          'Maven',
          'Spring',
          'Hibernate',
          'AngularJS',
          'Angular 7',
          'SASS',
          'JPA',
          'PostgreSQL',
          'JavaScript',
          'NodeJS',
          'Git',
        ],
      },
      {
        company: 'Pague Logo',
        role: 'Software Engineer',
        period: 'June 2019 - December 2020',
        location: 'Fortaleza region, Brazil',
        isFeatured: false,
        shortSummary:
          'Developed and maintained an integrated system for tickets, accreditations and level 2 support.',
        highlights: [
          'Built modules for recording, monitoring and resolving tickets.',
          'Developed workflows for accreditation management.',
        ],
        details: [
          'Implemented tracking tools to provide transparency across service processes.',
          'Created clear documentation for users, support teams and system changes.',
          'Introduced internal controls to support data security and integrity.',
        ],
      },
      {
        company: 'Jardins Distribuidora de Cereais e Representações LTDA',
        role: 'Software Engineer',
        period: 'June 2018 - September 2019',
        location: 'Fortaleza region, Brazil',
        isFeatured: false,
        shortSummary:
          'Developed, maintained and integrated systems for construction control, finance and merchandise management.',
        highlights: [
          'Built modules for internal construction control.',
          'Integrated financial and merchandise management tools.',
        ],
        details: [
          'Automated financial processes to reduce errors and provide a real-time business view.',
          'Implemented systems to control the life cycle of goods from acquisition to distribution.',
          'Provided continuous support and adaptive updates for changing operational needs.',
        ],
      },
      {
        company: 'Prefeitura Municipal de Fortaleza',
        role: 'Software Engineer',
        period: 'July 2017 - April 2018',
        location: 'HDEAM - Hospital Distrital Doutor Evandro Ayres de Moura',
        isFeatured: false,
        shortSummary:
          'Designed and developed a web application for management inventory control in a hospital context.',
        highlights: [
          'Developed a web application using JSF and Primefaces.',
          'Hosted the application on AWS infrastructure.',
        ],
        details: [
          'Implemented features for efficient management inventory control.',
          'Integrated automated email alerts for critical stock quantities.',
          'Designed an interface tailored to end-user needs.',
        ],
        technologies: ['JSF', 'Primefaces', 'AWS', 'Email'],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        id: 'full-cycle',
        title: 'MBA in Full Cycle Architecture',
        institution: 'Full Cycle',
        statusOrYear: '2024 - 2025',
        url: 'https://mba.fullcycle.com.br/mba/',
        logoSrc: '/images/education/fctech-mark.webp',
        logoAlt: 'Faculdade Full Cycle de Tecnologia logo',
      },
      {
        id: 'estacio',
        title: 'Graduate Degree in Systems Analysis and Development',
        institution: 'Estácio University',
        statusOrYear: '2010 - 2015',
        url: 'https://estacio.br/a-estacio/sobre-a-estacio',
        logoSrc: '/images/education/estacio-mark.webp',
        logoAlt: 'Estácio University logo',
      },
    ],
  },
  courses: {
    title: 'Courses & Continuous Learning',
    detailsLabel: 'View courses and studies',
    items: [
      { label: 'Full Cycle 3.0', url: 'https://fullcycle.com.br/' },
      { label: 'Curso.dev', url: 'https://curso.dev/' },
      { label: 'Confraria Dev', url: 'https://confrariadev.com/cdv/' },
      {
        label: 'DevOps Ninja: Docker, Kubernetes and Rancher - Udemy',
        url: 'https://www.udemy.com/course/devops-mao-na-massa-docker-kubernetes-rancher/?srsltid=AfmBOooZeN1ud8FqRha0akipF-SlE7Bp0oI4T7K4ktAX6LZOzuhb8WPD&couponCode=MT260602G3',
      },
      {
        label: 'Web Development with Quarkus - Basic',
        url: 'https://www.udemy.com/course/des-web-quarkus-basico/?src=sac&kw=Desenvolvimento+Web+com+Quarkus+-+B%C3%A1sico',
      },
      { label: 'Angular 9 - Essencial', url: 'https://www.udemy.com/course/angular-9-essencial/' },
      {
        label: 'Angular 9 + Spring Boot 2.2: Fullstack',
        url: 'https://www.udemy.com/course/full-stack-angular9-spring-boot/?couponCode=MT260602G3',
      },
      { label: 'TDD - Automated Testing with Java - TriadWorks' },
      { label: 'Java Programmer Training - Evolution Institute' },
    ],
  },
  languages: {
    title: 'Languages',
    items: [
      { name: 'Portuguese', level: 'Native or Bilingual' },
      { name: 'English', level: 'Intermediate, focused on technical conversations' },
    ],
  },
  projects: {
    title: 'Projects',
    intro:
      'Production software and technical studies that demonstrate architecture decisions, backend development and continuous delivery.',
    liveTitle: 'Live Projects',
    liveIntro:
      'Real solutions that are published and continuously operated, with technical ownership from product to infrastructure.',
    liveProject: {
      title: 'DescontoVivo',
      statusLabel: 'Live in production',
      subtitle: 'A promotion platform built around context, transparency, and trust signals.',
      description:
        'An application designed to gather offers from different stores and help users evaluate each opportunity with information about the store, seller, delivery, coupons, and community participation.',
      ownership:
        'Product ideation, architecture, and end-to-end delivery, with a primary focus on Java backend engineering and production operations.',
      stack: ['Java', 'Quarkus', 'Angular', 'PostgreSQL', 'Keycloak', 'Cloudflare R2'],
      imageAlt: 'Official DescontoVivo visual identity',
      caseStudyLabel: 'View case study',
      websiteLabel: 'Visit DescontoVivo',
    },
    labTitle: 'Technical Lab and Studies',
    labIntro:
      'Projects being structured to explore specific backend, quality, and cloud engineering decisions.',
    items: [
      {
        id: 'rest-tests',
        title: 'REST APIs and automated testing',
        statusLabel: 'In progress',
        description:
          'Practical study focused on backend architecture decisions, code quality and test scenarios.',
      },
      {
        id: 'messaging-cloud',
        title: 'Messaging and cloud',
        statusLabel: 'In progress',
        description:
          'Practical study to demonstrate asynchronous communication, cloud services and backend integrations.',
      },
    ],
  },
  descontoVivo: {
    seo: {
      title: 'DescontoVivo | Full Stack Project by Gabriel Veras',
      description:
        'DescontoVivo case study: a live promotion platform built with Java, Quarkus, Angular, PostgreSQL, Keycloak, and Cloudflare.',
      imageAlt: 'DescontoVivo, a promotion platform created by Gabriel Veras',
    },
    backLabel: 'Back to portfolio',
    statusLabel: 'Live in production',
    title: 'DescontoVivo',
    subtitle: 'A promotion platform built around context, transparency, and trust signals.',
    summary:
      'DescontoVivo gathers offers from different stores in one place and provides information that helps users evaluate each opportunity. It is a real application, live in production, and under continuous development.',
    imageAlt: 'Official DescontoVivo visual identity',
    websiteLabel: 'Visit DescontoVivo',
    stackLabel: 'Core stack',
    stack: [
      'Java 25',
      'Quarkus 3',
      'Angular 21',
      'PostgreSQL',
      'Flyway',
      'Hibernate/Panache',
      'Keycloak',
      'Docker',
      'Cloudflare R2',
      'GitHub Actions',
      'REST',
      'SSE',
    ],
    overview: {
      title: 'Overview',
      paragraphs: [
        'A low price alone is not always enough to support a purchase decision. DescontoVivo complements each promotion with context about the offer, store, seller, delivery, and available coupons.',
        'The platform serves people who want to discover and share promotions with greater transparency. Offers move through publishing and moderation workflows before becoming part of the public experience.',
      ],
    },
    role: {
      title: 'My role',
      paragraphs: [
        'I am responsible for the product ideation and end-to-end delivery of DescontoVivo, with a primary technical focus on backend engineering and secure production operations.',
      ],
      items: [
        'Product decisions and software architecture',
        'Java API and Angular interface development',
        'Authentication, authorization, and moderation workflows',
        'Persistence, storage, and image processing',
        'Infrastructure, pipelines, SEO, analytics, and observability',
        'Deployment, monitoring, and continuous production development',
        'Marketplace importers and automation',
      ],
    },
    architecture: {
      title: 'Architecture',
      intro:
        'The solution separates the web experience, API, identity, persistence, and object storage. The backend is a modular monolith with pragmatic separation of responsibilities, not a microservices architecture.',
      flowLabel: 'Simplified DescontoVivo architecture flow',
      items: [
        {
          id: 'angular',
          title: 'Angular interface',
          description:
            'Standalone Angular application with prerendered public pages, route-level SEO, accessibility, and authenticated areas.',
        },
        {
          id: 'quarkus-api',
          title: 'Java + Quarkus API',
          description:
            'REST API organized into promotion, engagement, store, moderation, account, notification, and upload modules.',
        },
        {
          id: 'persistence',
          title: 'PostgreSQL + Flyway',
          description:
            'Relational persistence with Hibernate ORM/Panache and versioned migrations applied during the application lifecycle.',
        },
        {
          id: 'identity',
          title: 'Keycloak',
          description:
            'OIDC authentication and role-based authorization for users, moderators, and administrators.',
        },
        {
          id: 'object-storage',
          title: 'Cloudflare R2',
          description:
            'S3-compatible storage for processed images, temporary uploads, and controlled publication.',
        },
        {
          id: 'operations',
          title: 'Automation and operations',
          description:
            'Docker and GitHub Actions support testing, application images, deployments, and production health checks.',
        },
      ],
    },
    capabilities: {
      title: 'Core capabilities',
      paragraphs: [
        'The following workflows are implemented across the public DescontoVivo ecosystem.',
      ],
      items: [
        'Promotion creation, publishing, search, and detail pages',
        'Approval, rejection, editing, and removal through moderation workflows',
        'OIDC authentication and role-based authorization',
        'Votes, comments, and replies on promotions',
        'Coupons and store, seller, and delivery context',
        'Trust and curation signals displayed in the interface',
        'Image upload, WebP processing, and object storage',
        'Server-Sent Events updates for public and administrative areas',
      ],
    },
    decisions: {
      title: 'Technical decisions',
      intro:
        'The choices prioritize productivity, security, maintainability, and operations appropriate to the product’s current stage.',
      items: [
        {
          id: 'java-quarkus',
          title: 'Java + Quarkus',
          description:
            'A typed foundation for business rules and APIs, including validation, OIDC security, OpenAPI documentation, and health checks.',
        },
        {
          id: 'modular-monolith',
          title: 'Modular monolith',
          description:
            'Keeps clear domain boundaries without introducing distributed-service operational complexity before it is needed.',
        },
        {
          id: 'postgres-flyway',
          title: 'PostgreSQL + Flyway',
          description:
            'Combines relational persistence with explicit and reproducible database schema evolution.',
        },
        {
          id: 'keycloak',
          title: 'Keycloak',
          description:
            'Centralizes login and authorization while the API enforces JWT Bearer tokens and access roles on protected resources.',
        },
        {
          id: 'rest-sse',
          title: 'REST + SSE',
          description:
            'REST handles operations and queries; SSE delivers lightweight updates without requiring bidirectional connections.',
        },
        {
          id: 'r2-images',
          title: 'R2 + image processing',
          description:
            'Avoids image hotlinking and keeps storage under application control, with validation and WebP conversion.',
        },
      ],
    },
    operations: {
      title: 'Production operations',
      paragraphs: [
        'The application is published and maintained as a real product, with separate processes for the interface, API, and automation.',
      ],
      items: [
        'Automated builds and validation through GitHub Actions',
        'Docker images and controlled API deployment',
        'Production application health checks',
        'Swagger UI and OpenAPI disabled in the production profile',
        'Consent-aware analytics and product events in the interface',
        'Metadata, sitemap, and structured data for public pages',
        'Continuous development backed by automated tests for core workflows',
      ],
    },
    currentStatus: {
      title: 'Current status',
      paragraphs: [
        'DescontoVivo is live in production and continues to evolve. This case study describes only capabilities verified in the code and project configuration, without attributing unverified business metrics.',
      ],
    },
    repositories: {
      title: 'Public code',
      intro:
        'The application and its architecture are the focus of this case study. For additional technical review, the public backend and frontend repositories are available separately.',
      backendLabel: 'View backend on GitHub',
      frontendLabel: 'View frontend on GitHub',
    },
    finalCtaTitle: 'Explore the live application',
    finalCtaText:
      'Visit DescontoVivo or return to the portfolio to learn more about my experience with Java, backend architecture, and enterprise systems.',
  },
  contact: {
    title: 'Contact',
    intro:
      'Open to conversations about senior Java backend opportunities, API architecture, microservices and enterprise systems.',
    footerText:
      'Professional portfolio focused on Java backend engineering, architecture and scalable systems.',
    emailLabel: 'Send email',
    linkedinLabel: 'View LinkedIn',
    githubLabel: 'View GitHub',
    resumePtLabel: 'Download resume',
    resumeEnLabel: 'Download resume',
  },
} as const;
