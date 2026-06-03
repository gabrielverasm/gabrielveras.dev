import { DOCUMENT } from '@angular/common';
import { Component, HostListener, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { EXTERNAL_LINKS } from '../../core/constants/external-links';
import { LanguageService } from '../../core/i18n/language.service';
import type { TechnologyIconKind } from '../../core/models/portfolio-content.model';
import { ExperienceCard } from '../../shared/components/experience-card/experience-card';
import { PortfolioIcon } from '../../shared/components/portfolio-icon/portfolio-icon';

const TECHNOLOGY_ICON_BY_NAME = new Map<string, TechnologyIconKind>([
  ['angular', 'angular'],
  ['angular 2+', 'angular'],
  ['apis rest', 'cicd'],
  ['argo cd', 'argo'],
  ['aws dynamodb', 'aws'],
  ['aws s3', 'aws'],
  ['aws sqs', 'aws'],
  ['bancos relacionais', 'postgresql'],
  ['ci/cd', 'cicd'],
  ['docker', 'docker'],
  ['git', 'git'],
  ['hibernate', 'postgresql'],
  ['java', 'java'],
  ['java 8+', 'java'],
  ['javascript', 'javascript'],
  ['jenkins', 'jenkins'],
  ['jpa', 'postgresql'],
  ['junit', 'junit'],
  ['kafka', 'kafka'],
  ['kubernetes', 'kubernetes'],
  ['microservices', 'quarkus'],
  ['microsserviços', 'quarkus'],
  ['mysql', 'mysql'],
  ['oracle', 'oracle'],
  ['postgresql', 'postgresql'],
  ['quarkus', 'quarkus'],
  ['rancher', 'rancher'],
  ['relational databases', 'postgresql'],
  ['rest apis', 'cicd'],
  ['spring', 'spring'],
  ['spring boot', 'spring'],
  ['tdd', 'junit'],
  ['testes automatizados', 'junit'],
  ['automated tests', 'junit'],
  ['typescript', 'typescript'],
]);

@Component({
  selector: 'app-home',
  imports: [ExperienceCard, PortfolioIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly languageService = inject(LanguageService);
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly content = this.languageService.content;
  readonly externalLinks = EXTERNAL_LINKS;
  readonly featuredExperience = computed(() =>
    this.content().experience.items.filter((item) => item.isFeatured),
  );
  readonly olderExperience = computed(() =>
    this.content().experience.items.filter((item) => !item.isFeatured),
  );
  readonly isProfilePreviewOpen = signal(false);

  constructor() {
    effect(() => {
      const seo = this.content().seo;

      this.document.documentElement.lang = this.content().language;
      this.title.setTitle(seo.title);
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({ property: 'og:title', content: seo.title });
      this.meta.updateTag({ property: 'og:description', content: seo.description });
      this.meta.updateTag({ name: 'twitter:title', content: seo.title });
      this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    });
  }

  openProfilePreview(): void {
    this.isProfilePreviewOpen.set(true);
  }

  closeProfilePreview(): void {
    this.isProfilePreviewOpen.set(false);
  }

  technologyIconKind(item: string): TechnologyIconKind | null {
    return TECHNOLOGY_ICON_BY_NAME.get(item.toLowerCase()) ?? null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeProfilePreview();
  }
}
