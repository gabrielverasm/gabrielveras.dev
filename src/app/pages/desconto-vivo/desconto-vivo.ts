import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EXTERNAL_LINKS } from '../../core/constants/external-links';
import { LanguageService } from '../../core/i18n/language.service';
import { PortfolioLanguage } from '../../core/models/portfolio-content.model';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-desconto-vivo',
  imports: [RouterLink],
  templateUrl: './desconto-vivo.html',
  styleUrl: './desconto-vivo.scss',
})
export class DescontoVivo {
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);

  protected readonly content = this.languageService.content;
  protected readonly links = EXTERNAL_LINKS.descontoVivo;

  constructor() {
    effect(() => {
      const content = this.content();
      const project = content.descontoVivo;

      this.seoService.setPage({
        ...project.seo,
        path: '/projects/descontovivo',
        language: content.language,
        imageUrl: this.links.socialImage.href,
        imageWidth: 1200,
        imageHeight: 630,
        structuredData: this.buildStructuredData(content.language),
      });
    });
  }

  private buildStructuredData(language: PortfolioLanguage): object {
    const pageUrl = 'https://gabrielveras.dev/projects/descontovivo';
    const portfolioUrl = 'https://gabrielveras.dev/';
    const personId = `${portfolioUrl}#person`;
    const websiteId = `${portfolioUrl}#website`;

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': personId,
          name: 'Gabriel Veras Miranda',
          alternateName: 'Gabriel Veras',
          url: portfolioUrl,
          jobTitle:
            language === 'pt-BR'
              ? 'Engenheiro Backend Java Sênior'
              : 'Senior Java Backend Engineer',
          sameAs: [EXTERNAL_LINKS.linkedin.href, EXTERNAL_LINKS.github.href],
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: portfolioUrl,
          name: 'Gabriel Veras',
          publisher: { '@id': personId },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': `${pageUrl}#software`,
          name: 'DescontoVivo',
          url: this.links.website.href,
          image: this.links.socialImage.href,
          applicationCategory: 'WebApplication',
          description: this.content().descontoVivo.summary,
          author: { '@id': personId },
          creator: { '@id': personId },
          inLanguage: language,
          keywords: [
            'Java',
            'Quarkus',
            'Angular',
            'PostgreSQL',
            'Keycloak',
            'Cloudflare R2',
            'REST APIs',
            'Server-Sent Events',
          ],
        },
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: this.content().descontoVivo.seo.title,
          description: this.content().descontoVivo.seo.description,
          inLanguage: language,
          isPartOf: { '@id': websiteId },
          author: { '@id': personId },
          mainEntity: { '@id': `${pageUrl}#software` },
          breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: language === 'pt-BR' ? 'Portfólio' : 'Portfolio',
              item: portfolioUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'DescontoVivo',
              item: pageUrl,
            },
          ],
        },
      ],
    };
  }
}
