import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
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
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly content = inject(LanguageService).content;
  readonly showBackToTop = signal(false);

  constructor() {
    inject(AccessibilityPreferencesService);

    if (this.isBrowser) {
      globalThis.setTimeout(() => this.updateBackToTopVisibility());
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateBackToTopVisibility();
  }

  backToTop(): void {
    if (!this.isBrowser) {
      return;
    }

    const mainContent = this.document.getElementById('main-content');
    mainContent?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    mainContent?.focus({ preventScroll: true });
    this.showBackToTop.set(false);
  }

  private updateBackToTopVisibility(): void {
    if (!this.isBrowser) {
      return;
    }

    this.showBackToTop.set(globalThis.scrollY > 80);
  }
}
