import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { LanguageService } from '../../../../../core/i18n/language.service';

@Component({
  selector: 'app-languages-section',
  templateUrl: './languages-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './languages-section.scss',
})
export class LanguagesSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
}
