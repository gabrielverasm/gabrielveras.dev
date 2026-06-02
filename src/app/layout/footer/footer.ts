import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly content = inject(LanguageService).content;
  readonly currentYear = new Date().getFullYear();
}
