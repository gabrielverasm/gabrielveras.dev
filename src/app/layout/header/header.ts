import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-header',
  imports: [LanguageSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly content = inject(LanguageService).content;
}
