import { Component, inject, output, ChangeDetectionStrategy } from '@angular/core';

import { EXTERNAL_LINKS } from '../../../../core/constants/external-links';
import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private readonly languageService = inject(LanguageService);

  readonly content = this.languageService.content;
  readonly externalLinks = EXTERNAL_LINKS;
  readonly profilePhotoOpen = output<void>();
}
