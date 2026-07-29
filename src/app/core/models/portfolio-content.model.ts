export type PortfolioLanguage = 'pt-BR' | 'en';

export interface PortfolioContent {
  readonly language: PortfolioLanguage;
  readonly accessibility: AccessibilityContent;
  readonly seo: SeoContent;
  readonly notFound: NotFoundContent;
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroContent;
  readonly skills: SkillsContent;
  readonly experience: ExperienceContent;
  readonly education: EducationContent;
  readonly courses: CoursesContent;
  readonly languages: LanguagesContent;
  readonly projects: ProjectsContent;
  readonly descontoVivo: DescontoVivoContent;
  readonly contact: ContactContent;
}

export interface AccessibilityContent {
  readonly skipLinkLabel: string;
  readonly primaryNavigationLabel: string;
  readonly languageSwitcherLabel: string;
  readonly openMenuLabel: string;
  readonly closeMenuLabel: string;
  readonly profilePhotoAlt: string;
  readonly openProfilePhotoLabel: string;
  readonly closeProfilePhotoLabel: string;
  readonly accessibilityControlsLabel: string;
  readonly themeToggleLabel: string;
  readonly enableLightModeLabel: string;
  readonly enableDarkModeLabel: string;
  readonly decreaseFontSizeLabel: string;
  readonly decreaseFontSizeShortLabel: string;
  readonly increaseFontSizeLabel: string;
  readonly increaseFontSizeShortLabel: string;
  readonly resetFontSizeLabel: string;
  readonly highContrastLabel: string;
  readonly enableHighContrastLabel: string;
  readonly disableHighContrastLabel: string;
  readonly backToTopLabel: string;
}

export interface SeoContent {
  readonly title: string;
  readonly description: string;
}

export interface NotFoundContent {
  readonly seoTitle: string;
  readonly description: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly message: string;
  readonly homeLabel: string;
}

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly name: string;
  readonly role: string;
  readonly stackSubtitle: string;
  readonly location: string;
  readonly summary: readonly string[];
  readonly linkedinActionLabel: string;
  readonly githubActionLabel: string;
  readonly resumePtActionLabel: string;
  readonly resumeEnActionLabel: string;
  readonly experienceActionLabel: string;
}

export interface SkillsContent {
  readonly title: string;
  readonly featuredLabel: string;
  readonly experienceValue: string;
  readonly learning: LearningContent;
  readonly groups: readonly SkillGroup[];
}

export interface LearningContent {
  readonly title: string;
  readonly text: string;
  readonly metricLabels: LearningMetricLabels;
}

export interface LearningMetricLabels {
  readonly experience: string;
  readonly technicalAreas: string;
  readonly listedTechnologies: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly description?: string;
  readonly iconKind?: SkillGroupIconKind;
  readonly items: readonly string[];
}

export type SkillGroupIconKind =
  | 'backend'
  | 'cloud'
  | 'data'
  | 'delivery'
  | 'infrastructure'
  | 'frontend';

export type TechnologyIconKind =
  | 'angular'
  | 'argo'
  | 'aws'
  | 'cicd'
  | 'docker'
  | 'git'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'junit'
  | 'kafka'
  | 'kubernetes'
  | 'mysql'
  | 'oracle'
  | 'postgresql'
  | 'quarkus'
  | 'rancher'
  | 'spring'
  | 'typescript';

export interface ExperienceContent {
  readonly title: string;
  readonly detailsLabel: string;
  readonly fullHistoryLabel: string;
  readonly technologiesLabel: string;
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
  readonly id: 'full-cycle' | 'estacio';
  readonly title: string;
  readonly institution?: string;
  readonly statusOrYear: string;
  readonly url?: string;
  readonly logoSrc: string;
  readonly logoAlt: string;
}

export interface CoursesContent {
  readonly title: string;
  readonly detailsLabel: string;
  readonly items: readonly CourseItem[];
}

export interface CourseItem {
  readonly label: string;
  readonly url?: string;
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
  readonly liveTitle: string;
  readonly liveIntro: string;
  readonly liveProject: LiveProjectItem;
  readonly labTitle: string;
  readonly labIntro: string;
  readonly items: readonly PlannedProjectItem[];
}

export interface LiveProjectItem {
  readonly title: string;
  readonly statusLabel: string;
  readonly descriptor: string;
  readonly period: string;
  readonly summary: readonly string[];
  readonly stack: readonly string[];
  readonly imageAlt: string;
  readonly caseStudyLabel: string;
  readonly websiteLabel: string;
}

export interface PlannedProjectItem {
  readonly id: 'rest-tests' | 'messaging-cloud';
  readonly title: string;
  readonly statusLabel: string;
  readonly description: string;
}

export interface DescontoVivoContent {
  readonly seo: DescontoVivoSeoContent;
  readonly backLabel: string;
  readonly statusLabel: string;
  readonly title: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly imageAlt: string;
  readonly websiteLabel: string;
  readonly stackLabel: string;
  readonly stack: readonly string[];
  readonly overview: CaseSectionContent;
  readonly role: CaseListSectionContent;
  readonly architecture: ArchitectureSectionContent;
  readonly capabilities: CaseListSectionContent;
  readonly decisions: CaseDetailSectionContent;
  readonly operations: CaseListSectionContent;
  readonly currentStatus: CaseSectionContent;
  readonly repositories: RepositorySectionContent;
  readonly finalCtaTitle: string;
  readonly finalCtaText: string;
}

export interface DescontoVivoSeoContent {
  readonly title: string;
  readonly description: string;
  readonly imageAlt: string;
}

export interface CaseSectionContent {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export interface CaseListSectionContent extends CaseSectionContent {
  readonly items: readonly string[];
}

export interface CaseDetailSectionContent {
  readonly title: string;
  readonly intro: string;
  readonly items: readonly CaseDetailItem[];
}

export interface CaseDetailItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface ArchitectureSectionContent extends CaseDetailSectionContent {
  readonly flowLabel: string;
}

export interface RepositorySectionContent {
  readonly title: string;
  readonly intro: string;
  readonly backendLabel: string;
  readonly frontendLabel: string;
}

export interface ContactContent {
  readonly title: string;
  readonly intro: string;
  readonly footerText: string;
  readonly emailLabel: string;
  readonly linkedinLabel: string;
  readonly githubLabel: string;
  readonly resumePtLabel: string;
  readonly resumeEnLabel: string;
}
