import { Component, inject } from '@angular/core';

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
}
