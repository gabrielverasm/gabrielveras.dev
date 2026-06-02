import { computed, Injectable, signal } from '@angular/core';

import { PortfolioContent, PortfolioLanguage } from '../models/portfolio-content.model';
import { CONTENT_EN } from './content.en';
import { CONTENT_PT } from './content.pt';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly language = signal<PortfolioLanguage>('pt-BR');

  readonly currentLanguage = this.language.asReadonly();
  readonly content = computed<PortfolioContent>(() =>
    this.language() === 'pt-BR' ? CONTENT_PT : CONTENT_EN,
  );

  setLanguage(language: PortfolioLanguage): void {
    this.language.set(language);
  }
}
