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
});
