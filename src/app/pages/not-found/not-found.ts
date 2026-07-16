import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);

  protected readonly content = this.languageService.content;

  constructor() {
    effect(() => {
      const content = this.content();

      this.seoService.setNotFoundPage({
        title: content.notFound.seoTitle,
        description: content.notFound.description,
        language: content.language,
      });
    });
  }
}
