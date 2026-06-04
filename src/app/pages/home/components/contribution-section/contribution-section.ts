import { Component, inject } from '@angular/core';

import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-contribution-section',
  templateUrl: './contribution-section.html',
  styleUrl: './contribution-section.scss',
})
export class ContributionSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
}
