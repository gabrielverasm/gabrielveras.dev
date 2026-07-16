import { Component, HostListener, effect, inject, signal } from '@angular/core';

import { EXTERNAL_LINKS } from '../../core/constants/external-links';
import { LanguageService } from '../../core/i18n/language.service';
import { SeoService } from '../../core/seo/seo.service';
import { ContactSection } from './components/contact-section/contact-section';
import { EducationSection } from './components/education-section/education-section';
import { ExperienceSection } from './components/experience-section/experience-section';
import { HeroSection } from './components/hero-section/hero-section';
import { ProfilePhotoModal } from './components/profile-photo-modal/profile-photo-modal';
import { ProjectsSection } from './components/projects-section/projects-section';
import { SkillsSection } from './components/skills-section/skills-section';

@Component({
  selector: 'app-home',
  imports: [
    ContactSection,
    EducationSection,
    ExperienceSection,
    HeroSection,
    ProfilePhotoModal,
    ProjectsSection,
    SkillsSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);

  readonly content = this.languageService.content;
  readonly isProfilePreviewOpen = signal(false);

  constructor() {
    effect(() => {
      const content = this.content();

      this.seoService.setPage({
        ...content.seo,
        path: '/',
        language: content.language,
        imageUrl: 'https://gabrielveras.dev/images/social/og-cover-square.webp',
        imageAlt: 'Gabriel Veras Miranda - Senior Java Backend Engineer',
        imageWidth: 1200,
        imageHeight: 1200,
        structuredData: this.buildStructuredData(content.language),
      });
    });
  }

  openProfilePreview(): void {
    this.isProfilePreviewOpen.set(true);
  }

  closeProfilePreview(): void {
    this.isProfilePreviewOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeProfilePreview();
  }

  private buildStructuredData(language: 'pt-BR' | 'en'): object {
    const profileUrl = 'https://gabrielveras.dev/';
    const personId = `${profileUrl}#person`;
    const websiteId = `${profileUrl}#website`;

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': personId,
          name: 'Gabriel Veras Miranda',
          alternateName: 'Gabriel Veras',
          url: profileUrl,
          image: 'https://gabrielveras.dev/images/profile.webp',
          jobTitle:
            language === 'pt-BR'
              ? 'Engenheiro Backend Java Sênior'
              : 'Senior Java Backend Engineer',
          email: EXTERNAL_LINKS.email.href,
          sameAs: [EXTERNAL_LINKS.linkedin.href, EXTERNAL_LINKS.github.href],
          knowsAbout: [
            'Java',
            'Spring Boot',
            'Quarkus',
            'REST APIs',
            'PostgreSQL',
            'AWS',
            'Docker',
            'Kubernetes',
            'Apache Kafka',
            'Keycloak',
            'CI/CD',
            'Observability',
            'Software Architecture',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: profileUrl,
          name: 'Gabriel Veras',
          inLanguage: ['pt-BR', 'en'],
          publisher: { '@id': personId },
        },
        {
          '@type': 'ProfilePage',
          '@id': `${profileUrl}#profile`,
          url: profileUrl,
          name:
            language === 'pt-BR'
              ? 'Gabriel Veras Miranda | Engenheiro Backend Java Sênior'
              : 'Gabriel Veras Miranda | Senior Java Backend Engineer',
          inLanguage: language,
          isPartOf: { '@id': websiteId },
          mainEntity: { '@id': personId },
        },
      ],
    };
  }
}
