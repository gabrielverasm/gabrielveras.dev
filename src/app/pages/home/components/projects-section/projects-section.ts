import { Component, inject } from '@angular/core';

import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
}
