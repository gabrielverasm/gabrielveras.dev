import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';

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

  setPortuguese(): void {
    this.languageService.setLanguage('pt-BR');
  }

  setEnglish(): void {
    this.languageService.setLanguage('en');
  }
}
