import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import { DescontoVivo } from './desconto-vivo';

describe('DescontoVivo', () => {
  let fixture: ComponentFixture<DescontoVivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescontoVivo],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DescontoVivo);
    TestBed.inject(LanguageService).setLanguage('pt-BR');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should render the verified architecture and production status in Portuguese', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('DescontoVivo');
    expect(compiled.textContent).toContain('Em produção');
    expect(compiled.textContent).toContain('monólito modular');
    expect(compiled.textContent).toContain('Java 25');
    expect(compiled.textContent).toContain('Cloudflare R2');
  });

  it('should update the visible content and metadata in English', () => {
    const consoleWarning = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    TestBed.inject(LanguageService).setLanguage('en');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const document = TestBed.inject(DOCUMENT);
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const structuredData = JSON.parse(
      document.getElementById('portfolio-structured-data')?.textContent ?? '',
    ) as { '@graph': { '@type': string; inLanguage?: string }[] };
    const softwareApplication = structuredData['@graph'].find(
      (item) => item['@type'] === 'SoftwareApplication',
    );
    const webPage = structuredData['@graph'].find((item) => item['@type'] === 'WebPage');

    expect(compiled.textContent).toContain('Live in production');
    expect(compiled.textContent).toContain('Modular monolith');
    expect(document.title).toBe('DescontoVivo | Java Backend Case Study by Gabriel Veras');
    expect(description?.content).toContain('DescontoVivo case study');
    expect(document.documentElement.lang).toBe('en');
    expect(softwareApplication?.inLanguage).toBe('en');
    expect(webPage?.inLanguage).toBe('en');
    expect(consoleWarning.mock.calls.flat().join(' ')).not.toContain('NG0956');

    consoleWarning.mockRestore();
  });

  it('should set canonical metadata and valid JSON-LD', () => {
    const document = TestBed.inject(DOCUMENT);
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicals = document.querySelectorAll('link[rel="canonical"]');
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const structuredData = document.getElementById('portfolio-structured-data');
    const graph = JSON.parse(structuredData?.textContent ?? '') as {
      '@graph': { '@type': string }[];
    };
    const graphTypes = graph['@graph'].map((item) => item['@type']);

    expect(canonical?.href).toBe('https://gabrielveras.dev/projects/descontovivo');
    expect(canonicals).toHaveLength(1);
    expect(robots?.content).toBe('index, follow');
    expect(structuredData?.textContent).toBeTruthy();
    expect(() => JSON.parse(structuredData?.textContent ?? '')).not.toThrow();
    expect(graphTypes).toEqual(
      expect.arrayContaining([
        'Person',
        'WebSite',
        'SoftwareApplication',
        'WebPage',
        'BreadcrumbList',
      ]),
    );
  });
});
