import { Component, input } from '@angular/core';

import { PortfolioIcon } from '../../../../../shared/components/portfolio-icon/portfolio-icon';
import { technologyIconKind } from '../technology-icon';

@Component({
  selector: 'app-skill-chip-list',
  imports: [PortfolioIcon],
  templateUrl: './skill-chip-list.html',
  styleUrl: './skill-chip-list.scss',
})
export class SkillChipList {
  readonly items = input.required<readonly string[]>();

  protected readonly technologyIconKind = technologyIconKind;
}
