import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ColorTheme = 'dark' | 'light';

const MIN_FONT_LEVEL = -8;
const DEFAULT_FONT_LEVEL = 0;
const MAX_FONT_LEVEL = 8;

const THEME_KEY = 'portfolio.theme';
const FONT_SCALE_KEY = 'portfolio.fontScale';
const HIGH_CONTRAST_KEY = 'portfolio.highContrast';

@Injectable({
  providedIn: 'root',
})
export class AccessibilityPreferencesService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly theme = signal<ColorTheme>(this.readTheme());
  private readonly fontLevel = signal<number>(this.readFontLevel());
  private readonly highContrast = signal<boolean>(this.readBoolean(HIGH_CONTRAST_KEY));

  readonly currentTheme = this.theme.asReadonly();
  readonly currentFontLevel = this.fontLevel.asReadonly();
  readonly isHighContrast = this.highContrast.asReadonly();

  constructor() {
    effect(() => {
      const theme = this.theme();
      const level = this.fontLevel();
      const contrast = this.highContrast();

      this.document.documentElement.dataset['theme'] = theme;
      this.document.documentElement.dataset['fontLevel'] = String(level);
      this.document.documentElement.dataset['contrast'] = contrast ? 'high' : 'default';
      this.document.documentElement.style.colorScheme = contrast ? 'light' : theme;
      this.writeStorage(THEME_KEY, theme);
      this.writeStorage(FONT_SCALE_KEY, String(level));
      this.writeStorage(HIGH_CONTRAST_KEY, String(contrast));
    });
  }

  setTheme(theme: ColorTheme): void {
    this.theme.set(theme);
  }

  toggleTheme(): void {
    this.theme.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }

  decreaseFontSize(): void {
    this.fontLevel.update((level) => Math.max(MIN_FONT_LEVEL, level - 1));
  }

  increaseFontSize(): void {
    this.fontLevel.update((level) => Math.min(MAX_FONT_LEVEL, level + 1));
  }

  resetFontSize(): void {
    this.fontLevel.set(DEFAULT_FONT_LEVEL);
  }

  canDecreaseFontSize(): boolean {
    return this.fontLevel() > MIN_FONT_LEVEL;
  }

  canIncreaseFontSize(): boolean {
    return this.fontLevel() < MAX_FONT_LEVEL;
  }

  canResetFontSize(): boolean {
    return this.fontLevel() !== DEFAULT_FONT_LEVEL;
  }

  toggleHighContrast(): void {
    this.highContrast.update((enabled) => !enabled);
  }

  private readTheme(): ColorTheme {
    const stored = this.readStorage(THEME_KEY);

    if (stored === 'dark' || stored === 'light') {
      return stored;
    }

    if (!this.isBrowser) {
      return 'dark';
    }

    try {
      return globalThis.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }

  private readFontLevel(): number {
    const stored = this.readStorage(FONT_SCALE_KEY);
    const parsed = stored === null ? DEFAULT_FONT_LEVEL : Number.parseInt(stored, 10);

    if (Number.isNaN(parsed)) {
      return DEFAULT_FONT_LEVEL;
    }

    return Math.min(MAX_FONT_LEVEL, Math.max(MIN_FONT_LEVEL, parsed));
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
