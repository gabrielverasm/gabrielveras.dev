import { Component, inject } from '@angular/core';

import { AccessibilityPreferencesService } from '../../core/accessibility/accessibility-preferences.service';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-accessibility-controls',
  imports: [],
  templateUrl: './accessibility-controls.html',
  styleUrl: './accessibility-controls.scss',
})
export class AccessibilityControls {
  private readonly preferences = inject(AccessibilityPreferencesService);

  readonly content = inject(LanguageService).content;
  readonly isHighContrast = this.preferences.isHighContrast;

  decreaseFontSize(): void {
    this.preferences.decreaseFontSize();
  }

  increaseFontSize(): void {
    this.preferences.increaseFontSize();
  }

  toggleHighContrast(): void {
    this.preferences.toggleHighContrast();
  }
}
