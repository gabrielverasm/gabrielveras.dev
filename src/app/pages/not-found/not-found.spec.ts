import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import { NotFound } from './not-found';

describe('NotFound', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render an accessible Portuguese 404 with noindex metadata', async () => {
    const fixture = TestBed.createComponent(NotFound);
    TestBed.inject(LanguageService).setLanguage('pt-BR');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const document = TestBed.inject(DOCUMENT);

    expect(compiled.querySelector('h1')?.textContent).toContain('Página não encontrada');
    expect(compiled.querySelector('a[href="/"]')?.textContent).toContain('Voltar ao portfólio');
    expect(document.title).toBe('Página não encontrada | Gabriel Veras');
    expect(document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content).toBe(
      'noindex, follow',
    );
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.getElementById('portfolio-structured-data')).toBeNull();
  });

  it('should update visible content and metadata in English', async () => {
    const fixture = TestBed.createComponent(NotFound);
    TestBed.inject(LanguageService).setLanguage('en');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const document = TestBed.inject(DOCUMENT);

    expect(compiled.querySelector('h1')?.textContent).toContain('Page not found');
    expect(document.title).toBe('Page not found | Gabriel Veras');
    expect(document.documentElement.lang).toBe('en');
  });
});
