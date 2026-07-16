export interface ExternalLink {
  readonly label: string;
  readonly href: string;
}

export interface OptionalExternalLink {
  readonly label: string;
  readonly href: string | null;
}

export interface ResumeLinks {
  readonly ptBr: OptionalExternalLink;
  readonly en: OptionalExternalLink;
}

export interface ExternalLinks {
  readonly email: ExternalLink;
  readonly linkedin: ExternalLink;
  readonly github: OptionalExternalLink;
  readonly descontoVivo: {
    readonly website: ExternalLink;
    readonly backend: ExternalLink;
    readonly frontend: ExternalLink;
    readonly socialImage: ExternalLink & {
      readonly localHref: string;
    };
  };
  readonly resumes: ResumeLinks;
}

export const EXTERNAL_LINKS: ExternalLinks = {
  email: {
    label: 'gabrielverasm@gmail.com',
    href: 'mailto:gabrielverasm@gmail.com',
  },
  linkedin: {
    label: 'linkedin.com/in/gabrielveras',
    href: 'https://www.linkedin.com/in/gabrielveras/',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/gabrielverasm',
  },
  descontoVivo: {
    website: {
      label: 'DescontoVivo',
      href: 'https://descontovivo.com',
    },
    backend: {
      label: 'DescontoVivo API',
      href: 'https://github.com/gabrielverasm/descontovivo-api',
    },
    frontend: {
      label: 'DescontoVivo UI',
      href: 'https://github.com/gabrielverasm/descontovivo-ui',
    },
    socialImage: {
      label: 'DescontoVivo social image',
      href: 'https://gabrielveras.dev/images/projects/descontovivo-og.jpg',
      localHref: '/images/projects/descontovivo-og.jpg',
    },
  },
  resumes: {
    ptBr: {
      label: 'Currículo em português',
      href: 'resume/Gabriel-Veras-Miranda-Curriculo-Java-Backend-Senior.pdf',
    },
    en: {
      label: 'Resume in English',
      href: 'resume/Gabriel-Veras-Miranda-Senior-Java-Backend-Engineer-Resume.pdf',
    },
  },
} as const;
