import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../../../core/i18n/language.service';
import { FeaturedSkillCard } from './featured-skill-card/featured-skill-card';
import { SkillCardAccent, SkillGroupCard } from './skill-group-card/skill-group-card';

@Component({
  selector: 'app-skills-section',
  imports: [FeaturedSkillCard, SkillGroupCard],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  private readonly languageService = inject(LanguageService);

  readonly content = this.languageService.content;
  readonly featuredSkillGroup = computed(() => this.content().skills.groups[0]);
  readonly supportingSkillGroups = computed(() => this.content().skills.groups.slice(1));
  readonly learningMetrics = computed(() => {
    const skillGroups = this.content().skills.groups;
    const metricLabels = this.content().skills.learning.metricLabels;

    return [
      { value: '8+', label: metricLabels.experience },
      { value: String(skillGroups.length), label: metricLabels.technicalAreas },
      {
        value: String(skillGroups.reduce((total, group) => total + group.items.length, 0)),
        label: metricLabels.listedTechnologies,
      },
    ];
  });

  skillCardAccent(index: number): SkillCardAccent {
    return (['primary', 'purple', 'green', 'yellow'] as const)[index] ?? 'primary';
  }
}
