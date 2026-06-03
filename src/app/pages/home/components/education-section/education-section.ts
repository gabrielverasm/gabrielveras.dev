import { Component, inject } from '@angular/core';

import { LanguageService } from '../../../../core/i18n/language.service';
import { CoursesSection } from './courses-section/courses-section';
import { LanguagesSection } from './languages-section/languages-section';

@Component({
  selector: 'app-education-section',
  imports: [CoursesSection, LanguagesSection],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
})
export class EducationSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
}
