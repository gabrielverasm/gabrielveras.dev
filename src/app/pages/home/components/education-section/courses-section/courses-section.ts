import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { LanguageService } from '../../../../../core/i18n/language.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './courses-section.scss',
})
export class CoursesSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
}
