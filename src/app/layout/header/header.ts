import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

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
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly content = inject(LanguageService).content;
  readonly isMobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobileMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node | null;

    if (this.isMobileMenuOpen() && target && !this.host.nativeElement.contains(target)) {
      this.closeMobileMenu();
    }
  }
}
