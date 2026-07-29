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
    expect(project?.textContent).toContain('Produto próprio em produção');
    expect(project?.textContent).toContain('2026 - Atual');
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
    ) as { '@graph': { '@type': string; jobTitle?: string; name?: string }[] };
    const graphTypes = structuredData['@graph'].map((item) => item['@type']);
    const person = structuredData['@graph'].find((item) => item['@type'] === 'Person');
    const profilePage = structuredData['@graph'].find((item) => item['@type'] === 'ProfilePage');

    expect(document.title).toBe(
      'Gabriel Veras Miranda | Engenheiro de Software Backend Sênior Java',
    );
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(canonical?.href).toBe('https://gabrielveras.dev/');
    expect(robots?.content).toBe('index, follow');
    expect(graphTypes).toEqual(expect.arrayContaining(['Person', 'WebSite', 'ProfilePage']));
    expect(person?.jobTitle).toBe('Engenheiro de Software Backend Sênior Java');
    expect(profilePage?.name).toBe(
      'Gabriel Veras Miranda | Engenheiro de Software Backend Sênior Java',
    );
  });

  it('should render the updated Portuguese profile and both resume downloads', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heroDownloads = compiled.querySelectorAll<HTMLAnchorElement>(
      'app-hero-section a[type="application/pdf"][download]',
    );
    const contactDownloads = compiled.querySelectorAll<HTMLAnchorElement>(
      '#contact a[type="application/pdf"][download]',
    );

    expect(compiled.textContent).toContain('Engenheiro de Software Backend Sênior | Java');
    expect(compiled.textContent).toContain('9 anos de experiência');
    expect(compiled.textContent).toContain('Março/2024 - Agosto/2024');
    expect(compiled.textContent).toContain('Contrato PJ');
    expect(compiled.textContent).not.toContain('Outubro/2023 - Março/2024');
    expect(compiled.textContent).toContain('Concluído | 600 horas | 2024–2025');
    expect(compiled.textContent).toContain('Concluído | 2015');
    expect(heroDownloads).toHaveLength(2);
    expect(contactDownloads).toHaveLength(2);
    expect([...heroDownloads].map((link) => link.textContent?.trim())).toEqual([
      'Baixar currículo (PT-BR)',
      'Baixar resume (EN)',
    ]);
    expect([...heroDownloads].map((link) => link.getAttribute('href'))).toEqual([
      '/resume/Gabriel-Veras-Miranda-Curriculo-Java-Backend-Senior.pdf',
      '/resume/Gabriel-Veras-Miranda-Senior-Java-Backend-Engineer-Resume.pdf',
    ]);
  });

  it('should render the updated English profile without removing either resume download', () => {
    TestBed.inject(LanguageService).setLanguage('en');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const heroDownloads = compiled.querySelectorAll<HTMLAnchorElement>(
      'app-hero-section a[type="application/pdf"][download]',
    );
    const contactDownloads = compiled.querySelectorAll<HTMLAnchorElement>(
      '#contact a[type="application/pdf"][download]',
    );

    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe('Gabriel Veras Miranda | Senior Backend Software Engineer | Java');
    expect(compiled.textContent).toContain('Senior Backend Software Engineer | Java');
    expect(compiled.textContent).toContain('9 years of experience');
    expect(compiled.textContent).toContain('March 2024 - August 2024');
    expect(compiled.textContent).toContain('Independent Contractor');
    expect(compiled.textContent).toContain('Founder and Full-Stack Developer');
    expect(compiled.textContent).toContain('2026 - Present');
    expect(heroDownloads).toHaveLength(2);
    expect(contactDownloads).toHaveLength(2);
    expect([...heroDownloads].map((link) => link.textContent?.trim())).toEqual([
      'Download CV (PT-BR)',
      'Download resume (EN)',
    ]);
  });

  it('should consolidate Capgemini and Coopersystem into one experience', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const companyHeadings = [...compiled.querySelectorAll('.experience-card h3')].map((heading) =>
      heading.textContent?.trim(),
    );

    expect(
      companyHeadings.filter((company) => company === 'Capgemini / Coopersystem'),
    ).toHaveLength(1);
    expect(companyHeadings).not.toContain('Capgemini');
    expect(companyHeadings).not.toContain('Coopersystem');
  });
});
