import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';
import { CONTENT_EN } from '../../core/i18n/content.en';
import { CONTENT_PT } from '../../core/i18n/content.pt';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
  private readonly languageService = inject(LanguageService);

  readonly currentLanguage = this.languageService.currentLanguage;
  readonly content = this.languageService.content;
  readonly tooltipLabel = computed(() =>
    this.currentLanguage() === 'en'
      ? CONTENT_PT.accessibility.languageSwitcherLabel
      : CONTENT_EN.accessibility.languageSwitcherLabel,
  );

  toggleLanguage(): void {
    this.languageService.setLanguage(this.currentLanguage() === 'pt-BR' ? 'en' : 'pt-BR');
  }
}
