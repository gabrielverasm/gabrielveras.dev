import { Component, input } from '@angular/core';

import type {
  HeroMetricIconKind,
  SkillGroupIconKind,
  TechnologyIconKind,
} from '../../../core/models/portfolio-content.model';

export type PortfolioIconKind = HeroMetricIconKind | SkillGroupIconKind | TechnologyIconKind;

@Component({
  selector: 'app-portfolio-icon',
  templateUrl: './portfolio-icon.html',
  styleUrl: './portfolio-icon.scss',
  host: {
    'aria-hidden': 'true',
  },
})
export class PortfolioIcon {
  readonly kind = input.required<PortfolioIconKind>();
}
