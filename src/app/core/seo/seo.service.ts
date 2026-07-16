import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PortfolioLanguage } from '../models/portfolio-content.model';

const SITE_URL = 'https://gabrielveras.dev';

export interface SeoPage {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly language: PortfolioLanguage;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly structuredData: object;
}

export interface NotFoundSeoPage {
  readonly title: string;
  readonly description: string;
  readonly language: PortfolioLanguage;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  setPage(page: SeoPage): void {
    const canonicalUrl = new URL(page.path, SITE_URL).href;
    const locale = page.language === 'pt-BR' ? 'pt_BR' : 'en_US';

    this.document.documentElement.lang = page.language;
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ name: 'author', content: 'Gabriel Veras Miranda' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: 'Gabriel Veras' });
    this.meta.updateTag({ property: 'og:locale', content: locale });
    this.meta.updateTag({ property: 'og:image', content: page.imageUrl });
    this.meta.updateTag({ property: 'og:image:width', content: String(page.imageWidth) });
    this.meta.updateTag({ property: 'og:image:height', content: String(page.imageHeight) });
    this.meta.updateTag({ property: 'og:image:alt', content: page.imageAlt });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: page.imageUrl });
    this.meta.updateTag({ name: 'twitter:image:alt', content: page.imageAlt });

    this.setCanonical(canonicalUrl);
    this.setStructuredData(page.structuredData);
  }

  setNotFoundPage(page: NotFoundSeoPage): void {
    this.document.documentElement.lang = page.language;
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ name: 'author', content: 'Gabriel Veras Miranda' });
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });

    this.document.querySelectorAll('link[rel="canonical"]').forEach((canonical) => {
      canonical.remove();
    });
    this.document
      .querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]')
      .forEach((tag) => {
        tag.remove();
      });
    this.document.getElementById('portfolio-structured-data')?.remove();
  }

  private setCanonical(url: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = url;
  }

  private setStructuredData(data: object): void {
    const scriptId = 'portfolio-structured-data';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data).replaceAll('<', '\\u003c');
  }
}
