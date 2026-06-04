import { Component, computed, inject, output } from '@angular/core';

import { EXTERNAL_LINKS } from '../../../../core/constants/external-links';
import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private readonly languageService = inject(LanguageService);

  readonly content = this.languageService.content;
  readonly externalLinks = EXTERNAL_LINKS;
  readonly profilePhotoOpen = output<void>();
  readonly resumeHref = computed(() => {
    const resumes = this.externalLinks.resumes;

    return this.content().language === 'pt-BR'
      ? resumes.ptBr.href || resumes.en.href
      : resumes.en.href || resumes.ptBr.href;
  });
  readonly resumeLabel = computed(() =>
    this.content().language === 'pt-BR'
      ? this.content().contact.resumePtLabel
      : this.content().contact.resumeEnLabel,
  );
}
