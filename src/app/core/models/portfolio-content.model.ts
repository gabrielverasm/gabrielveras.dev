export type PortfolioLanguage = 'pt-BR' | 'en';

export interface PortfolioContent {
  readonly language: PortfolioLanguage;
  readonly seo: SeoContent;
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroContent;
  readonly about: AboutContent;
  readonly skills: SkillsContent;
  readonly experience: ExperienceContent;
  readonly education: EducationContent;
  readonly courses: CoursesContent;
  readonly languages: LanguagesContent;
  readonly projects: ProjectsContent;
  readonly contact: ContactContent;
}

export interface SeoContent {
  readonly title: string;
  readonly description: string;
}

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly summary: readonly string[];
  readonly primaryActionLabel: string;
  readonly secondaryActionLabel: string;
}

export interface AboutContent {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export interface SkillsContent {
  readonly title: string;
  readonly groups: readonly SkillGroup[];
}

export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface ExperienceContent {
  readonly title: string;
  readonly items: readonly ExperienceItem[];
}

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly isFeatured: boolean;
  readonly shortSummary: string;
  readonly highlights: readonly string[];
  readonly details: readonly string[];
  readonly location?: string;
  readonly technologies?: readonly string[];
}

export interface EducationContent {
  readonly title: string;
  readonly items: readonly EducationItem[];
}

export interface EducationItem {
  readonly title: string;
  readonly institution?: string;
  readonly statusOrYear: string;
}

export interface CoursesContent {
  readonly title: string;
  readonly items: readonly string[];
}

export interface LanguagesContent {
  readonly title: string;
  readonly items: readonly LanguageItem[];
}

export interface LanguageItem {
  readonly name: string;
  readonly level: string;
}

export interface ProjectsContent {
  readonly title: string;
  readonly intro: string;
  readonly items: readonly PlannedProjectItem[];
}

export interface PlannedProjectItem {
  readonly title: string;
  readonly statusLabel: string;
  readonly description: string;
}

export interface ContactContent {
  readonly title: string;
  readonly intro: string;
  readonly emailLabel: string;
  readonly linkedinLabel: string;
  readonly githubLabel: string;
  readonly resumePtLabel: string;
  readonly resumeEnLabel: string;
}
