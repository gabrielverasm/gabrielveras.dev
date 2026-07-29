import { PortfolioContent } from '../models/portfolio-content.model';

export const CONTENT_PT: PortfolioContent = {
  language: 'pt-BR',
  accessibility: {
    skipLinkLabel: 'Pular para o conteúdo principal',
    primaryNavigationLabel: 'Navegação principal',
    languageSwitcherLabel: 'Trocar idioma',
    openMenuLabel: 'Abrir menu',
    closeMenuLabel: 'Fechar menu',
    profilePhotoAlt: 'Foto profissional de Gabriel Veras',
    openProfilePhotoLabel: 'Abrir foto profissional ampliada',
    closeProfilePhotoLabel: 'Fechar visualização da foto',
    accessibilityControlsLabel: 'Controles de acessibilidade',
    themeToggleLabel: 'Alternar tema',
    enableLightModeLabel: 'Ativar modo claro',
    enableDarkModeLabel: 'Ativar modo escuro',
    decreaseFontSizeLabel: 'Diminuir fonte',
    decreaseFontSizeShortLabel: 'A-',
    increaseFontSizeLabel: 'Aumentar fonte',
    increaseFontSizeShortLabel: 'A+',
    resetFontSizeLabel: 'Restaurar fonte',
    highContrastLabel: 'Alto contraste',
    enableHighContrastLabel: 'Ativar alto contraste',
    disableHighContrastLabel: 'Desativar alto contraste',
    backToTopLabel: 'Voltar ao topo',
  },
  seo: {
    title: 'Gabriel Veras Miranda | Engenheiro de Software Backend Sênior Java',
    description:
      'Engenheiro de Software Backend Sênior com 9 anos de experiência em Java, Spring Boot, Quarkus, AWS, APIs REST, microsserviços, mensageria, testes automatizados e sistemas corporativos críticos.',
  },
  notFound: {
    seoTitle: 'Página não encontrada | Gabriel Veras',
    description:
      'A página solicitada não foi encontrada no portfólio profissional de Gabriel Veras.',
    eyebrow: 'Erro 404',
    title: 'Página não encontrada',
    message:
      'O endereço informado não existe ou pode ter sido alterado. Volte ao portfólio para continuar navegando.',
    homeLabel: 'Voltar ao portfólio',
  },
  navigation: [
    { label: 'Experiência', href: '/#experience' },
    { label: 'Habilidades', href: '/#skills' },
    { label: 'Formação', href: '/#education' },
    { label: 'Projetos', href: '/#projects' },
    { label: 'Contato', href: '/#contact' },
  ],
  hero: {
    eyebrow: 'Portfólio profissional',
    name: 'Gabriel Veras Miranda',
    role: 'Engenheiro de Software Backend Sênior | Java',
    stackSubtitle: 'Java 8/11/17/21 | Spring Boot | Quarkus | AWS | Microsserviços',
    location: 'Fortaleza-CE | Remoto',
    summary: [
      'Engenheiro de Software Backend Sênior com 9 anos de experiência no desenvolvimento, evolução e sustentação de APIs REST, microsserviços e sistemas corporativos críticos, especialmente no setor financeiro.',
      'Experiência com Java, Spring Boot, Quarkus, AWS, mensageria, bancos relacionais, testes automatizados e CI/CD. Atuação como referência técnica e funcional no entendimento de requisitos, implementação, troubleshooting, testes e preparação de entregas.',
    ],
    linkedinActionLabel: 'LinkedIn',
    githubActionLabel: 'GitHub',
    resumePtActionLabel: 'Baixar currículo (PT-BR)',
    resumeEnActionLabel: 'Baixar resume (EN)',
    experienceActionLabel: 'Ver experiência',
  },
  skills: {
    title: 'Habilidades técnicas',
    featuredLabel: 'Destaque',
    experienceValue: '9',
    learning: {
      title: 'Sempre aprendendo',
      text: 'Evolução contínua, prática técnica e compartilhamento de conhecimento.',
      metricLabels: {
        experience: 'anos de experiência',
        technicalAreas: 'áreas técnicas',
        listedTechnologies: 'tecnologias listadas',
      },
    },
    groups: [
      {
        title: 'Backend',
        description:
          'APIs, serviços e arquitetura backend para sistemas corporativos escaláveis, seguros e de alta performance.',
        iconKind: 'backend',
        items: ['Java 8/11/17/21', 'Spring Boot', 'Quarkus', 'APIs REST', 'Microsserviços'],
      },
      {
        title: 'Cloud / Mensageria',
        description: 'Mensageria, cloud e integrações para sistemas distribuídos.',
        iconKind: 'cloud',
        items: ['AWS', 'AWS SQS', 'AWS S3', 'AWS DynamoDB', 'Apache Kafka'],
      },
      {
        title: 'Dados',
        description: 'Persistência, ORM e bancos relacionais em sistemas críticos.',
        iconKind: 'data',
        items: ['JPA', 'Hibernate', 'SQL', 'PostgreSQL', 'Oracle', 'IBM DB2'],
      },
      {
        title: 'Qualidade / Entrega',
        description: 'Testes, automação e práticas para entrega contínua.',
        iconKind: 'delivery',
        items: ['JUnit', 'Mockito', 'TDD', 'Git', 'CI/CD', 'Jenkins', 'Argo CD'],
      },
      {
        title: 'Infraestrutura',
        description: 'Contêineres e orquestração para ambientes consistentes e escaláveis.',
        iconKind: 'infrastructure',
        items: ['Docker', 'Kubernetes', 'OpenShift', 'Rancher'],
      },
      {
        title: 'Frontend',
        description: 'Tecnologias para construção de interfaces web.',
        iconKind: 'frontend',
        items: ['Angular', 'TypeScript'],
      },
    ],
  },
  experience: {
    title: 'Experiência profissional',
    detailsLabel: 'Ver detalhes',
    fullHistoryLabel: 'Ver histórico completo',
    technologiesLabel: 'Tecnologias',
    items: [
      {
        company: 'Stefanini',
        role: 'Analista de Sistemas Sênior',
        period: 'Fevereiro/2024 - Atual',
        location: 'Fortaleza, Ceará, Brasil',
        isFeatured: true,
        shortSummary:
          'Desenvolvimento e sustentação de APIs Java com Spring Boot para sistemas corporativos críticos.',
        highlights: [
          'Integração com sistemas legados e mainframe utilizando APIs REST, JPA, Hibernate, SQL e IBM DB2.',
          'Atuação como principal referência técnica e funcional do projeto, apoiando requisitos, implementação e troubleshooting.',
          'Criação e manutenção de testes automatizados com JUnit e participação nos ciclos de SIT e UAT.',
        ],
        details: [
          'Desenvolvimento e sustentação de APIs Java com Spring Boot para sistemas corporativos críticos.',
          'Integração com sistemas legados e mainframe utilizando APIs REST, JPA, Hibernate, SQL e IBM DB2.',
          'Atuação como principal referência técnica e funcional do projeto, apoiando requisitos, implementação e troubleshooting.',
          'Criação e manutenção de testes automatizados com JUnit e participação nos ciclos de SIT e UAT.',
          'Preparação e acompanhamento de entregas nos ambientes de desenvolvimento, homologação e produção.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'APIs REST',
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
        role: 'Consultor Backend Java Sênior — Contrato PJ',
        period: 'Março/2024 - Agosto/2024',
        location: 'Fortaleza, Ceará, Brasil',
        isFeatured: true,
        shortSummary:
          'Atuação via Binário Digital em projeto da HITSS para a Claro Pay, desenvolvendo e sustentando APIs e microsserviços Java com Quarkus.',
        highlights: [
          'Integração com AWS SQS, DynamoDB e S3, incluindo processamento assíncrono e gerenciamento de mensagens.',
          'Implementação de testes automatizados com JUnit e utilização de Docker para padronização de ambientes.',
          'Atuação com monitoramento, troubleshooting e code review em equipe multidisciplinar.',
        ],
        details: [
          'Atuação via Binário Digital em projeto da HITSS para a Claro Pay, desenvolvendo e sustentando APIs e microsserviços Java com Quarkus.',
          'Integração com AWS SQS, DynamoDB e S3, incluindo processamento assíncrono e gerenciamento de mensagens.',
          'Implementação de testes automatizados com JUnit e utilização de Docker para padronização de ambientes.',
          'Atuação com monitoramento, troubleshooting e code review em equipe multidisciplinar.',
        ],
        technologies: [
          'Java',
          'Quarkus',
          'Microsserviços',
          'AWS SQS',
          'AWS DynamoDB',
          'AWS S3',
          'Docker',
          'JUnit',
          'Processamento assíncrono',
          'Code Review',
          'Troubleshooting',
        ],
      },
      {
        company: 'Capgemini / Coopersystem',
        role: 'Analista de Sistemas / Analista de Sistemas Sênior',
        period: 'Junho/2021 - Outubro/2023',
        location: 'Projeto Banco do Brasil | Brasil',
        isFeatured: true,
        shortSummary:
          'Desenvolvimento e sustentação de APIs e microsserviços Java utilizando Quarkus em sistemas corporativos do Banco do Brasil.',
        highlights: [
          'Integração assíncrona entre serviços com Apache Kafka e desenvolvimento de testes com JUnit e Mockito.',
          'Atuação como referência técnica, apoiando desenvolvedores, code reviews, validação de commits e resolução de problemas.',
          'Participação em CI/CD, preparação de releases e acompanhamento de entregas em ambientes Kubernetes e OpenShift.',
        ],
        details: [
          'Desenvolvimento e sustentação de APIs e microsserviços Java utilizando Quarkus.',
          'Integração assíncrona entre serviços com Apache Kafka e desenvolvimento de testes com JUnit e Mockito.',
          'Atuação como referência técnica, apoiando desenvolvedores, code reviews, validação de commits e resolução de problemas.',
          'Participação em CI/CD, preparação de releases e acompanhamento de entregas em ambientes Kubernetes e OpenShift.',
          'Atuação posterior em projeto corporativo da CASSI.',
          'Capgemini: junho/2021 a dezembro/2021.',
          'Coopersystem: dezembro/2021 a outubro/2023.',
        ],
        technologies: [
          'Java',
          'Quarkus',
          'APIs REST',
          'Microsserviços',
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
        role: 'Analista de Sistemas',
        period: 'Abril/2021 - Maio/2021',
        location: 'Fortaleza, Ceará, Brasil',
        isFeatured: false,
        shortSummary:
          'Desenvolvimento de API para plataforma de comércio eletrônico com experiência de compra por imagens.',
        highlights: [
          'Desenvolvimento de API com Quarkus, MicroProfile, Kafka e Docker.',
          'Integração com frontend em Flutter.',
        ],
        details: [
          'Implementação de arquitetura voltada a respostas rápidas e gerenciamento eficiente de recursos.',
          'Implementação de testes automatizados e testes end-to-end para cenários reais de uso.',
          'Manutenção proativa para manter a API atualizada, segura e compatível com requisitos em evolução.',
        ],
        technologies: [
          'Quarkus',
          'MicroProfile',
          'Kafka',
          'Docker',
          'Flutter',
          'Testes automatizados',
          'E2E',
        ],
      },
      {
        company: 'Dell Lead',
        role: 'Analista de Sistemas',
        period: 'Maio/2020 - Fevereiro/2021',
        location: 'Fortaleza, Ceará, Brasil',
        isFeatured: false,
        shortSummary:
          'Desenvolvimento de sistemas web para cursos de educação a distância com foco em acessibilidade.',
        highlights: [
          'Construção de backend com Java, Maven, Spring e Hibernate.',
          'Implementação de interfaces com AngularJS, Angular 7 e SASS.',
        ],
        details: [
          'Criação de sistemas web interativos para experiências educacionais.',
          'Adoção de padrões nacionais e internacionais de acessibilidade.',
          'Persistência de dados com JPA e PostgreSQL, uso de JavaScript, NodeJS e Git.',
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
        role: 'Analista de Sistemas',
        period: 'Junho/2019 - Dezembro/2020',
        location: 'Fortaleza e Região, Brasil',
        isFeatured: false,
        shortSummary:
          'Desenvolvimento e manutenção de sistema integrado para chamados, credenciamentos e atendimento nível 2.',
        highlights: [
          'Criação de módulos para registro, acompanhamento e resolução de chamados.',
          'Desenvolvimento de funcionalidades para gestão de credenciamentos.',
        ],
        details: [
          'Implementação de ferramentas de rastreamento para transparência nos processos de atendimento.',
          'Documentação clara para usuários, equipe de suporte e mudanças do sistema.',
          'Introdução de controles internos para segurança e integridade dos dados.',
        ],
      },
      {
        company: 'Jardins Distribuidora de Cereais e Representações LTDA',
        role: 'Analista de Sistemas',
        period: 'Junho/2018 - Setembro/2019',
        location: 'Fortaleza e Região, Brasil',
        isFeatured: false,
        shortSummary:
          'Desenvolvimento, manutenção e integração de sistemas para obras, finanças e gestão de mercadorias.',
        highlights: [
          'Desenvolvimento de módulos para controle interno de obras.',
          'Integração de ferramentas financeiras e de gestão de mercadorias.',
        ],
        details: [
          'Automação de processos financeiros para reduzir erros e melhorar a visão operacional.',
          'Implementação de sistemas para controlar o ciclo de vida das mercadorias.',
          'Suporte contínuo e atualizações adaptativas para necessidades operacionais.',
        ],
      },
      {
        company: 'Prefeitura Municipal de Fortaleza',
        role: 'Analista de Sistemas',
        period: 'Julho/2017 - Abril/2018',
        location: 'HDEAM - Hospital Distrital Doutor Evandro Ayres de Moura',
        isFeatured: false,
        shortSummary:
          'Concepção e desenvolvimento de aplicação web para controle gerencial de estoque hospitalar.',
        highlights: ['Desenvolvimento com JSF e Primefaces.', 'Hospedagem em infraestrutura AWS.'],
        details: [
          'Implementação de funcionalidades para controle eficiente de estoque.',
          'Integração de alertas automatizados por e-mail para quantidades críticas.',
          'Criação de interface personalizada para as necessidades do usuário final.',
        ],
        technologies: ['JSF', 'Primefaces', 'AWS', 'E-mail'],
      },
    ],
  },
  education: {
    title: 'Formação',
    items: [
      {
        id: 'full-cycle',
        title: 'MBA em Arquitetura Full Cycle',
        institution: 'Faculdade Full Cycle de Tecnologia',
        statusOrYear: 'Concluído | 600 horas | 2024–2025',
        url: 'https://mba.fullcycle.com.br/mba/',
        logoSrc: '/images/education/fctech-mark.webp',
        logoAlt: 'Logo da Faculdade Full Cycle de Tecnologia',
      },
      {
        id: 'estacio',
        title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Estácio de Sá',
        statusOrYear: 'Concluído | 2015',
        url: 'https://estacio.br/a-estacio/sobre-a-estacio',
        logoSrc: '/images/education/estacio-mark.webp',
        logoAlt: 'Logo da Universidade Estácio de Sá',
      },
    ],
  },
  courses: {
    title: 'Cursos e estudos contínuos',
    detailsLabel: 'Ver cursos e estudos',
    items: [
      { label: 'Curso.dev - Felipe Deschamps', url: 'https://curso.dev/' },
      { label: 'Full Cycle 3.0', url: 'https://fullcycle.com.br/' },
      { label: 'Confraria Dev', url: 'https://confrariadev.com/cdv/' },
      {
        label: 'DevOps Ninja: Docker, Kubernetes e Rancher - Udemy',
        url: 'https://www.udemy.com/course/devops-mao-na-massa-docker-kubernetes-rancher/?srsltid=AfmBOooZeN1ud8FqRha0akipF-SlE7Bp0oI4T7K4ktAX6LZOzuhb8WPD&couponCode=MT260602G3',
      },
      {
        label: 'Desenvolvimento Web com Quarkus - Básico',
        url: 'https://www.udemy.com/course/des-web-quarkus-basico/?src=sac&kw=Desenvolvimento+Web+com+Quarkus+-+B%C3%A1sico',
      },
      { label: 'Angular 9 - Essencial', url: 'https://www.udemy.com/course/angular-9-essencial/' },
      {
        label: 'Angular 9 + Spring Boot 2.2: Fullstack Completo e Atualizado',
        url: 'https://www.udemy.com/course/full-stack-angular9-spring-boot/?couponCode=MT260602G3',
      },
      { label: 'TDD - Automated Testing with Java - TriadWorks' },
      { label: 'Java Programmer Training - Evolution Institute' },
    ],
  },
  languages: {
    title: 'Idiomas',
    items: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'Intermediário (B1)' },
    ],
  },
  projects: {
    title: 'Projeto em destaque',
    intro:
      'Software em produção e estudos técnicos que demonstram decisões de arquitetura, desenvolvimento backend e entrega contínua.',
    liveTitle: 'Projetos em produção',
    liveIntro:
      'Soluções reais publicadas e operadas continuamente, com responsabilidade técnica do produto à infraestrutura.',
    liveProject: {
      title: 'DescontoVivo',
      statusLabel: 'Em produção',
      descriptor: 'Produto próprio em produção',
      period: '2026 - Atual',
      summary: [
        'Idealização e desenvolvimento end-to-end de uma plataforma de promoções utilizando Java, Quarkus, Angular e PostgreSQL.',
        'Responsável por APIs REST, autenticação, testes automatizados, CI/CD, SEO técnico, observabilidade, integrações e operação em infraestrutura cloud.',
        'Responsável pela arquitetura técnica, deploy, monitoramento e evolução contínua do produto em produção.',
      ],
      stack: ['Java', 'Quarkus', 'Angular', 'PostgreSQL', 'Keycloak', 'Cloudflare R2'],
      imageAlt: 'Identidade visual oficial do DescontoVivo',
      caseStudyLabel: 'Ver estudo de caso',
      websiteLabel: 'Acessar o DescontoVivo',
    },
    labTitle: 'Laboratório e estudos técnicos',
    labIntro:
      'Projetos em estruturação para aprofundar decisões específicas de backend, qualidade e cloud.',
    items: [
      {
        id: 'rest-tests',
        title: 'APIs REST e testes automatizados',
        statusLabel: 'Em estruturação',
        description:
          'Estudo prático voltado a decisões de arquitetura backend, qualidade de código e cenários de teste.',
      },
      {
        id: 'messaging-cloud',
        title: 'Mensageria e cloud',
        statusLabel: 'Em estruturação',
        description:
          'Estudo prático para demonstrar comunicação assíncrona, serviços cloud e integrações backend.',
      },
    ],
  },
  descontoVivo: {
    seo: {
      title: 'DescontoVivo | Case Java Backend de Gabriel Veras',
      description:
        'Estudo de caso do DescontoVivo, plataforma em produção desenvolvida com Java, Quarkus, Angular, PostgreSQL, Keycloak e Cloudflare.',
      imageAlt: 'DescontoVivo, plataforma de promoções criada por Gabriel Veras',
    },
    backLabel: 'Voltar ao portfólio',
    statusLabel: 'Em produção',
    title: 'DescontoVivo',
    subtitle: 'Plataforma de promoções com mais contexto, transparência e sinais de confiança.',
    summary:
      'O DescontoVivo reúne ofertas de diferentes lojas em um só lugar e apresenta informações que ajudam o usuário a avaliar melhor cada oportunidade. É uma aplicação real, disponível em produção e em evolução contínua.',
    imageAlt: 'Identidade visual oficial do DescontoVivo',
    websiteLabel: 'Acessar o DescontoVivo',
    stackLabel: 'Stack principal',
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
      title: 'Visão geral',
      paragraphs: [
        'Encontrar um preço baixo nem sempre é suficiente para decidir uma compra. A proposta do DescontoVivo é complementar cada promoção com contexto sobre a oferta, a loja, o vendedor, a entrega e cupons disponíveis.',
        'A plataforma atende pessoas que desejam descobrir e compartilhar promoções com mais transparência. As ofertas passam por fluxos de publicação e moderação antes de compor a experiência pública.',
      ],
    },
    role: {
      title: 'Meu papel',
      paragraphs: [
        'Sou responsável pela idealização e pela entrega end-to-end do DescontoVivo, com prioridade técnica no backend e na operação segura da aplicação.',
      ],
      items: [
        'Decisões de produto e arquitetura de software',
        'Desenvolvimento da API Java e da interface Angular',
        'Autenticação, autorização e fluxos de moderação',
        'Persistência, armazenamento e processamento de imagens',
        'Infraestrutura, pipelines, SEO, analytics e observabilidade',
        'Publicação, acompanhamento e evolução em produção',
        'Importadores e automações para marketplaces',
      ],
    },
    architecture: {
      title: 'Arquitetura',
      intro:
        'A solução separa a experiência web, a API, identidade, persistência e armazenamento de objetos. O backend é um monólito modular com separação pragmática de responsabilidades, não uma arquitetura de microsserviços.',
      flowLabel: 'Fluxo simplificado da arquitetura do DescontoVivo',
      items: [
        {
          id: 'angular',
          title: 'Interface Angular',
          description:
            'Aplicação Angular standalone com páginas públicas prerenderizadas, SEO por rota, acessibilidade e áreas autenticadas.',
        },
        {
          id: 'quarkus-api',
          title: 'API Java + Quarkus',
          description:
            'API REST organizada em módulos de promoções, engajamento, lojas, moderação, contas, notificações e upload.',
        },
        {
          id: 'persistence',
          title: 'PostgreSQL + Flyway',
          description:
            'Persistência relacional com Hibernate ORM/Panache e migrações versionadas aplicadas no ciclo da aplicação.',
        },
        {
          id: 'identity',
          title: 'Keycloak',
          description:
            'Autenticação OIDC e autorização por perfis para usuários, moderadores e administradores.',
        },
        {
          id: 'object-storage',
          title: 'Cloudflare R2',
          description:
            'Armazenamento compatível com S3 para imagens processadas, uploads temporários e publicação controlada.',
        },
        {
          id: 'operations',
          title: 'Automação e operação',
          description:
            'Docker e GitHub Actions apoiam testes, imagens de aplicação, deploy e verificações de saúde em produção.',
        },
      ],
    },
    capabilities: {
      title: 'Capacidades principais',
      paragraphs: ['Os fluxos abaixo estão implementados no ecossistema público do DescontoVivo.'],
      items: [
        'Criação, publicação, busca e detalhamento de promoções',
        'Aprovação, rejeição, edição e remoção em fluxos de moderação',
        'Autenticação OIDC e autorização por perfis',
        'Votos, comentários e respostas em promoções',
        'Cupons e contexto de loja, vendedor e entrega',
        'Sinais de confiança e curadoria exibidos na interface',
        'Upload, processamento WebP e armazenamento de imagens',
        'Atualizações por Server-Sent Events para áreas públicas e administrativas',
      ],
    },
    decisions: {
      title: 'Decisões técnicas',
      intro:
        'As escolhas priorizam produtividade, segurança, manutenção e uma operação coerente com o estágio atual do produto.',
      items: [
        {
          id: 'java-quarkus',
          title: 'Java + Quarkus',
          description:
            'Base tipada para regras de negócio e APIs, com validação, segurança OIDC, documentação OpenAPI e health checks.',
        },
        {
          id: 'modular-monolith',
          title: 'Monólito modular',
          description:
            'Mantém limites claros entre domínios sem introduzir a complexidade operacional de serviços distribuídos antes da necessidade.',
        },
        {
          id: 'postgres-flyway',
          title: 'PostgreSQL + Flyway',
          description:
            'Combina persistência relacional com evolução explícita e reproduzível do esquema.',
        },
        {
          id: 'keycloak',
          title: 'Keycloak',
          description:
            'Centraliza login e autorização, enquanto a API aplica JWT Bearer e perfis de acesso nos recursos protegidos.',
        },
        {
          id: 'rest-sse',
          title: 'REST + SSE',
          description:
            'REST atende operações e consultas; SSE distribui atualizações leves sem exigir uma conexão bidirecional.',
        },
        {
          id: 'r2-images',
          title: 'R2 + processamento de imagens',
          description:
            'Evita hotlink de imagens e mantém o armazenamento sob controle da aplicação, com validação e conversão para WebP.',
        },
      ],
    },
    operations: {
      title: 'Operação em produção',
      paragraphs: [
        'A aplicação é publicada e acompanhada como um produto real, com processos separados para interface, API e automações.',
      ],
      items: [
        'Builds e validações automatizados com GitHub Actions',
        'Imagens Docker e deploy controlado da API',
        'Health checks da aplicação em produção',
        'Swagger e OpenAPI desativados no perfil de produção',
        'Analytics com consentimento e eventos de produto na interface',
        'Metadados, sitemap e dados estruturados para páginas públicas',
        'Evolução contínua com testes automatizados nos fluxos principais',
      ],
    },
    currentStatus: {
      title: 'Status atual',
      paragraphs: [
        'O DescontoVivo está disponível em produção e continua evoluindo. O case descreve somente capacidades verificadas no código e na configuração dos projetos, sem atribuir métricas de negócio não comprovadas.',
      ],
    },
    repositories: {
      title: 'Código público',
      intro:
        'A aplicação e sua arquitetura são a prioridade deste case. Para uma análise técnica adicional, os repositórios públicos do backend e do frontend estão disponíveis separadamente.',
      backendLabel: 'Ver backend no GitHub',
      frontendLabel: 'Ver frontend no GitHub',
    },
    finalCtaTitle: 'Conheça a aplicação em produção',
    finalCtaText:
      'Explore o DescontoVivo ou volte ao portfólio para conhecer minha experiência com Java, arquitetura backend e sistemas corporativos.',
  },
  contact: {
    title: 'Contato',
    intro:
      'Disponível para conversas sobre oportunidades backend Java sênior, arquitetura de APIs, microsserviços e sistemas corporativos.',
    footerText: 'Portfólio profissional focado em backend Java, arquitetura e sistemas escaláveis.',
    emailLabel: 'Enviar e-mail',
    linkedinLabel: 'Ver LinkedIn',
    githubLabel: 'Ver GitHub',
    resumePtLabel: 'Baixar currículo (PT-BR)',
    resumeEnLabel: 'Baixar resume (EN)',
  },
} as const;
