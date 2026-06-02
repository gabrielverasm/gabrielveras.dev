import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

type FontScale = 'compact' | 'normal' | 'large';

const FONT_SCALE_KEY = 'portfolio.fontScale';
const HIGH_CONTRAST_KEY = 'portfolio.highContrast';

@Injectable({
  providedIn: 'root',
})
export class AccessibilityPreferencesService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly fontScale = signal<FontScale>(this.readFontScale());
  private readonly highContrast = signal<boolean>(this.readBoolean(HIGH_CONTRAST_KEY));

  readonly currentFontScale = this.fontScale.asReadonly();
  readonly isHighContrast = this.highContrast.asReadonly();

  constructor() {
    effect(() => {
      const scale = this.fontScale();
      const contrast = this.highContrast();

      this.document.documentElement.dataset['fontScale'] = scale;
      this.document.documentElement.dataset['contrast'] = contrast ? 'high' : 'default';
      this.writeStorage(FONT_SCALE_KEY, scale);
      this.writeStorage(HIGH_CONTRAST_KEY, String(contrast));
    });
  }

  decreaseFontSize(): void {
    this.fontScale.update((scale) => (scale === 'large' ? 'normal' : 'compact'));
  }

  increaseFontSize(): void {
    this.fontScale.update((scale) => (scale === 'compact' ? 'normal' : 'large'));
  }

  toggleHighContrast(): void {
    this.highContrast.update((enabled) => !enabled);
  }

  private readFontScale(): FontScale {
    const stored = this.readStorage(FONT_SCALE_KEY);

    return stored === 'compact' || stored === 'large' ? stored : 'normal';
  }

  private readBoolean(key: string): boolean {
    return this.readStorage(key) === 'true';
  }

  private readStorage(key: string): string | null {
    if (!this.isBrowser) {
      return null;
    }

    try {
      return globalThis.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private writeStorage(key: string, value: string): void {
    if (!this.isBrowser) {
      return;
    }

    try {
      globalThis.localStorage.setItem(key, value);
    } catch {
      return;
    }
  }
}
