import { Component, computed, inject } from '@angular/core';

import { EXTERNAL_LINKS } from '../../../../core/constants/external-links';
import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
  protected readonly externalLinks = EXTERNAL_LINKS;
  protected readonly resumeHref = computed(() => {
    const resumes = this.externalLinks.resumes;

    return this.content().language === 'pt-BR'
      ? resumes.ptBr.href || resumes.en.href
      : resumes.en.href || resumes.ptBr.href;
  });
  protected readonly resumeLabel = computed(() =>
    this.content().language === 'pt-BR'
      ? this.content().contact.resumePtLabel
      : this.content().contact.resumeEnLabel,
  );
}
