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
  resumes: {
    ptBr: {
      label: 'Currículo em português',
      href: null,
    },
    en: {
      label: 'Resume in English',
      href: null,
    },
  },
} as const;
