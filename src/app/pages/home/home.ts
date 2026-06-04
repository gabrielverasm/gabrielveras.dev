import { DOCUMENT } from '@angular/common';
import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { LanguageService } from '../../core/i18n/language.service';
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
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly content = this.languageService.content;
  readonly isProfilePreviewOpen = signal(false);

  constructor() {
    effect(() => {
      const seo = this.content().seo;

      this.document.documentElement.lang = this.content().language;
      this.title.setTitle(seo.title);
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({ property: 'og:title', content: seo.title });
      this.meta.updateTag({ property: 'og:description', content: seo.description });
      this.meta.updateTag({ name: 'twitter:title', content: seo.title });
      this.meta.updateTag({ name: 'twitter:description', content: seo.description });
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
}
