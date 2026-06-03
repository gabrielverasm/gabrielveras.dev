import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../../core/i18n/language.service';
import { ExperienceCard } from '../../../../shared/components/experience-card/experience-card';

@Component({
  selector: 'app-experience-section',
  imports: [ExperienceCard],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSection {
  private readonly languageService = inject(LanguageService);

  readonly content = this.languageService.content;
  readonly featuredExperience = computed(() =>
    this.content().experience.items.filter((item) => item.isFeatured),
  );
  readonly olderExperience = computed(() =>
    this.content().experience.items.filter((item) => !item.isFeatured),
  );
}
