import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    TestBed.inject(LanguageService).setLanguage('pt-BR');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render DescontoVivo as a live production project', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const project = compiled.querySelector('.live-project');

    expect(project?.textContent).toContain('DescontoVivo');
    expect(project?.textContent).toContain('Em produção');
    expect(project?.querySelector('a[href="/projects/descontovivo"]')).toBeTruthy();
    expect(project?.querySelector('img')?.getAttribute('src')).toBe(
      '/images/projects/descontovivo-og.jpg',
    );
  });

  it('should set indexable canonical metadata and profile JSON-LD', () => {
    fixture.detectChanges();
    const document = TestBed.inject(DOCUMENT);
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const structuredData = JSON.parse(
      document.getElementById('portfolio-structured-data')?.textContent ?? '',
    ) as { '@graph': { '@type': string }[] };
    const graphTypes = structuredData['@graph'].map((item) => item['@type']);

    expect(document.title).toBe('Gabriel Veras Miranda | Engenheiro Backend Java Sênior');
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(canonical?.href).toBe('https://gabrielveras.dev/');
    expect(robots?.content).toBe('index, follow');
    expect(graphTypes).toEqual(expect.arrayContaining(['Person', 'WebSite', 'ProfilePage']));
  });
});
