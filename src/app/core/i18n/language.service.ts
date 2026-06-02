import { isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

import { PortfolioContent, PortfolioLanguage } from '../models/portfolio-content.model';
import { CONTENT_EN } from './content.en';
import { CONTENT_PT } from './content.pt';

const LANGUAGE_KEY = 'portfolio.language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly language = signal<PortfolioLanguage>(this.readLanguage());

  readonly currentLanguage = this.language.asReadonly();
  readonly content = computed<PortfolioContent>(() =>
    this.language() === 'pt-BR' ? CONTENT_PT : CONTENT_EN,
  );

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        try {
          globalThis.localStorage.setItem(LANGUAGE_KEY, this.language());
        } catch {
          return;
        }
      }
    });
  }

  setLanguage(language: PortfolioLanguage): void {
    this.language.set(language);
  }

  private readLanguage(): PortfolioLanguage {
    if (!this.isBrowser) {
      return 'pt-BR';
    }

    try {
      return globalThis.localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'pt-BR';
    } catch {
      return 'pt-BR';
    }
  }
}
