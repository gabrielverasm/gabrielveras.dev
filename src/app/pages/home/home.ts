import { Component, computed, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { EXTERNAL_LINKS } from '../../core/constants/external-links';
import { LanguageService } from '../../core/i18n/language.service';
import { ExperienceCard } from '../../shared/components/experience-card/experience-card';

@Component({
  selector: 'app-home',
  imports: [ExperienceCard],
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
}
