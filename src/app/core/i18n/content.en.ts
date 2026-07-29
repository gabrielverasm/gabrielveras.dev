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
    title: 'Gabriel Veras Miranda | Senior Backend Software Engineer | Java',
    description:
      'Senior Backend Software Engineer with 9 years of experience in Java, Spring Boot, Quarkus, AWS, REST APIs, microservices, messaging systems, automated testing, and mission-critical enterprise systems.',
  },
  notFound: {
    seoTitle: 'Page not found | Gabriel Veras',
    description: 'The requested page was not found in Gabriel Veras’s professional portfolio.',
    eyebrow: 'Error 404',
    title: 'Page not found',
    message:
      'The address does not exist or may have changed. Return to the portfolio to continue browsing.',
    homeLabel: 'Back to portfolio',
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
    role: 'Senior Backend Software Engineer | Java',
    stackSubtitle: 'Java 8/11/17/21 | Spring Boot | Quarkus | AWS | Microservices',
    location: 'Fortaleza, CE, Brazil | Remote',
    summary: [
      'Senior Backend Software Engineer with 9 years of experience developing, enhancing, and supporting REST APIs, microservices, and mission-critical enterprise systems, particularly in the financial sector.',
      'Strong experience with Java, Spring Boot, Quarkus, AWS, messaging systems, relational databases, automated testing, and CI/CD. Proven ability to act as a key technical and functional point of contact in requirements analysis, implementation, troubleshooting, testing, and release preparation.',
    ],
    linkedinActionLabel: 'LinkedIn',
    githubActionLabel: 'GitHub',
    resumePtActionLabel: 'Download CV (PT-BR)',
    resumeEnActionLabel: 'Download resume (EN)',
    experienceActionLabel: 'View experience',
  },
  skills: {
    title: 'Technical skills',
    featuredLabel: 'Featured',
    experienceValue: '9',
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
        items: ['Java 8/11/17/21', 'Spring Boot', 'Quarkus', 'REST APIs', 'Microservices'],
      },
      {
        title: 'Cloud & Messaging',
        description: 'Messaging, cloud and integrations for distributed systems.',
        iconKind: 'cloud',
        items: ['AWS', 'AWS SQS', 'AWS S3', 'AWS DynamoDB', 'Apache Kafka'],
      },
      {
        title: 'Data',
        description: 'Persistence, ORM and relational databases in critical systems.',
        iconKind: 'data',
        items: ['JPA', 'Hibernate', 'SQL', 'PostgreSQL', 'Oracle', 'IBM DB2'],
      },
      {
        title: 'Quality & Delivery',
        description: 'Testing, automation and practices for continuous delivery.',
        iconKind: 'delivery',
        items: ['JUnit', 'Mockito', 'TDD', 'Git', 'CI/CD', 'Jenkins', 'Argo CD'],
      },
      {
        title: 'Infrastructure',
        description: 'Containers and orchestration for consistent, scalable environments.',
        iconKind: 'infrastructure',
        items: ['Docker', 'Kubernetes', 'OpenShift', 'Rancher'],
      },
      {
        title: 'Frontend',
        description: 'Technologies for building web interfaces.',
        iconKind: 'frontend',
        items: ['Angular', 'TypeScript'],
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
        company: 'Stefanini',
        role: 'Senior Systems Analyst',
        period: 'February 2024 - Present',
        location: 'Fortaleza, Ceará, Brazil',
        isFeatured: true,
        shortSummary:
          'Develop and support Java APIs using Spring Boot for mission-critical enterprise systems.',
        highlights: [
          'Integrate legacy and mainframe systems using REST APIs, JPA, Hibernate, SQL, and IBM DB2.',
          "Serve as the project's primary technical and functional point of contact, supporting requirements analysis, implementation, and troubleshooting.",
          'Create and maintain automated tests with JUnit and participate in SIT and UAT cycles.',
        ],
        details: [
          'Develop and support Java APIs using Spring Boot for mission-critical enterprise systems.',
          'Integrate legacy and mainframe systems using REST APIs, JPA, Hibernate, SQL, and IBM DB2.',
          "Serve as the project's primary technical and functional point of contact, supporting requirements analysis, implementation, and troubleshooting.",
          'Create and maintain automated tests with JUnit and participate in SIT and UAT cycles.',
          'Prepare and support deployments across development, staging, and production environments.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'REST APIs',
          'JPA',
          'Hibernate',
          'SQL',
          'IBM DB2',
          'JUnit',
          'SIT',
          'UAT',
          'CI/CD',
        ],
      },
      {
        company: 'K2 Partnering Solutions',
        role: 'Senior Java Backend Consultant — Independent Contractor',
        period: 'March 2024 - August 2024',
        location: 'Fortaleza, Ceará, Brazil',
        isFeatured: true,
        shortSummary:
          'Worked through Binário Digital on a HITSS project for Claro Pay, developing and supporting Java APIs and microservices using Quarkus.',
        highlights: [
          'Integrated AWS services including SQS, DynamoDB, and S3, supporting asynchronous processing and message management.',
          'Implemented automated tests with JUnit and used Docker to standardize development environments.',
          'Performed application monitoring, troubleshooting, and code reviews within a cross-functional team.',
        ],
        details: [
          'Worked through Binário Digital on a HITSS project for Claro Pay, developing and supporting Java APIs and microservices using Quarkus.',
          'Integrated AWS services including SQS, DynamoDB, and S3, supporting asynchronous processing and message management.',
          'Implemented automated tests with JUnit and used Docker to standardize development environments.',
          'Performed application monitoring, troubleshooting, and code reviews within a cross-functional team.',
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
          'Asynchronous Processing',
          'Code Review',
          'Troubleshooting',
        ],
      },
      {
        company: 'Capgemini / Coopersystem',
        role: 'Systems Analyst / Senior Systems Analyst',
        period: 'June 2021 - October 2023',
        location: 'Banco do Brasil Project | Brazil',
        isFeatured: true,
        shortSummary:
          'Developed and supported Java APIs and microservices using Quarkus for Banco do Brasil enterprise systems.',
        highlights: [
          'Implemented asynchronous service integration using Apache Kafka and developed automated tests with JUnit and Mockito.',
          'Served as a technical reference, supporting developers, conducting code reviews, validating commits, and resolving technical issues.',
          'Contributed to CI/CD processes, release preparation, and deployments across Kubernetes and OpenShift environments.',
        ],
        details: [
          'Developed and supported Java APIs and microservices using Quarkus.',
          'Implemented asynchronous service integration using Apache Kafka and developed automated tests with JUnit and Mockito.',
          'Served as a technical reference, supporting developers, conducting code reviews, validating commits, and resolving technical issues.',
          'Contributed to CI/CD processes, release preparation, and deployments across Kubernetes and OpenShift environments.',
          'Later worked on a corporate project for CASSI.',
          'Capgemini: June 2021 to December 2021.',
          'Coopersystem: December 2021 to October 2023.',
        ],
        technologies: [
          'Java',
          'Quarkus',
          'REST APIs',
          'Microservices',
          'Apache Kafka',
          'JUnit',
          'Mockito',
          'Jenkins',
          'Argo CD',
          'Kubernetes',
          'OpenShift',
          'JPA',
          'Hibernate',
          'CI/CD',
        ],
      },
      {
        company: 'PicBuy',
        role: 'Systems Analyst',
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
        role: 'Systems Analyst',
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
        role: 'Systems Analyst',
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
        role: 'Systems Analyst',
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
        role: 'Systems Analyst',
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
        institution: 'Faculdade Full Cycle de Tecnologia',
        statusOrYear: 'Completed | 600 hours | 2024–2025',
        url: 'https://mba.fullcycle.com.br/mba/',
        logoSrc: '/images/education/fctech-mark.webp',
        logoAlt: 'Faculdade Full Cycle de Tecnologia logo',
      },
      {
        id: 'estacio',
        title: 'Technologist Degree in Systems Analysis and Development',
        institution: 'Universidade Estácio de Sá',
        statusOrYear: 'Completed | 2015',
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
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Intermediate (B1)' },
    ],
  },
  projects: {
    title: 'Featured Project',
    intro:
      'Production software and technical studies that demonstrate architecture decisions, backend development and continuous delivery.',
    liveTitle: 'Live Projects',
    liveIntro:
      'Real solutions that are published and continuously operated, with technical ownership from product to infrastructure.',
    liveProject: {
      title: 'DescontoVivo',
      statusLabel: 'Live in production',
      descriptor: 'Founder and Full-Stack Developer',
      period: '2026 - Present',
      summary: [
        'Designed and developed an end-to-end promotions platform using Java, Quarkus, Angular, and PostgreSQL.',
        'Built and maintained REST APIs, authentication, automated tests, CI/CD pipelines, technical SEO, observability, third-party integrations, and cloud infrastructure.',
        'Led the product’s technical architecture, deployment, monitoring, and continuous evolution in production.',
      ],
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
      title: 'DescontoVivo | Java Backend Case Study by Gabriel Veras',
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
    resumePtLabel: 'Download CV (PT-BR)',
    resumeEnLabel: 'Download resume (EN)',
  },
} as const;
