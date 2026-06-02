import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AccessibilityPreferencesService } from './core/accessibility/accessibility-preferences.service';
import { LanguageService } from './core/i18n/language.service';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly content = inject(LanguageService).content;

  constructor() {
    inject(AccessibilityPreferencesService);
  }
}
