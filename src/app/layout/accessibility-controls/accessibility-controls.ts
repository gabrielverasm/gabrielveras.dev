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
  readonly currentTheme = this.preferences.currentTheme;
  readonly isHighContrast = this.preferences.isHighContrast;
  readonly canDecreaseFontSize = () => this.preferences.canDecreaseFontSize();
  readonly canIncreaseFontSize = () => this.preferences.canIncreaseFontSize();
  readonly canResetFontSize = () => this.preferences.canResetFontSize();

  toggleTheme(): void {
    this.preferences.toggleTheme();
  }

  decreaseFontSize(): void {
    this.preferences.decreaseFontSize();
  }

  increaseFontSize(): void {
    this.preferences.increaseFontSize();
  }

  resetFontSize(): void {
    this.preferences.resetFontSize();
  }

  toggleHighContrast(): void {
    this.preferences.toggleHighContrast();
  }
}
