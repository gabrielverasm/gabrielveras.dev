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
  readonly isSettingsOpen = signal(false);
  readonly isCompact = signal(false);

  constructor() {
    this.updateHeaderState();
  }

  toggleSettings(): void {
    this.isSettingsOpen.update((isOpen) => !isOpen);
  }

  closeSettings(): void {
    this.isSettingsOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target;

    if (target instanceof Node && !this.host.nativeElement.contains(target)) {
      this.closeSettings();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeSettings();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateHeaderState();
  }

  private updateHeaderState(): void {
    this.isCompact.set(globalThis.scrollY > 96);
  }
}
