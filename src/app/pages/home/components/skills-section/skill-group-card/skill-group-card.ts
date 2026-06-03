import { Component, input } from '@angular/core';

import type { SkillGroup } from '../../../../../core/models/portfolio-content.model';
import { PortfolioIcon } from '../../../../../shared/components/portfolio-icon/portfolio-icon';
import { SkillChipList } from '../skill-chip-list/skill-chip-list';

export type SkillCardAccent = 'primary' | 'purple' | 'green' | 'yellow';

@Component({
  selector: 'app-skill-group-card',
  imports: [PortfolioIcon, SkillChipList],
  templateUrl: './skill-group-card.html',
  styleUrl: './skill-group-card.scss',
})
export class SkillGroupCard {
  readonly group = input.required<SkillGroup>();
  readonly accent = input<SkillCardAccent>('primary');
}
