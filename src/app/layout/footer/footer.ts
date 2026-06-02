import { Component, inject } from '@angular/core';

import { EXTERNAL_LINKS } from '../../core/constants/external-links';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly content = inject(LanguageService).content;
  readonly externalLinks = EXTERNAL_LINKS;
  readonly currentYear = new Date().getFullYear();
}
