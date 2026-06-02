import { Component, inject } from '@angular/core';

import { LanguageService } from '../../core/i18n/language.service';
import { AccessibilityControls } from '../accessibility-controls/accessibility-controls';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-header',
  imports: [AccessibilityControls, LanguageSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly content = inject(LanguageService).content;
}
