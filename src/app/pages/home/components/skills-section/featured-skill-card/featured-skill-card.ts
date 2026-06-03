import { Component, input } from '@angular/core';

import type {
  LearningContent,
  SkillGroup,
} from '../../../../../core/models/portfolio-content.model';
import { PortfolioIcon } from '../../../../../shared/components/portfolio-icon/portfolio-icon';
import { SkillChipList } from '../skill-chip-list/skill-chip-list';
import { SkillLearningPanel } from '../skill-learning-panel/skill-learning-panel';
import { SkillMetrics } from '../skill-metrics/skill-metrics';
import { SkillOrbitVisual } from '../skill-orbit-visual/skill-orbit-visual';

export interface SkillMetric {
  readonly value: string;
  readonly label: string;
}

@Component({
  selector: 'app-featured-skill-card',
  imports: [PortfolioIcon, SkillChipList, SkillLearningPanel, SkillMetrics, SkillOrbitVisual],
  templateUrl: './featured-skill-card.html',
  styleUrl: './featured-skill-card.scss',
})
export class FeaturedSkillCard {
  readonly group = input.required<SkillGroup>();
  readonly featuredLabel = input.required<string>();
  readonly learning = input.required<LearningContent>();
  readonly metrics = input.required<readonly SkillMetric[]>();
}
