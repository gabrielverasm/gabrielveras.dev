import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EXTERNAL_LINKS } from '../../../../core/constants/external-links';
import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-projects-section',
  imports: [RouterLink],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  private readonly languageService = inject(LanguageService);

  protected readonly content = this.languageService.content;
  protected readonly links = EXTERNAL_LINKS.descontoVivo;
}
