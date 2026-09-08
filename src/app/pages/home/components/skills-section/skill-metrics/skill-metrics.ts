import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import type { SkillMetric } from '../featured-skill-card/featured-skill-card';

@Component({
  selector: 'app-skill-metrics',
  templateUrl: './skill-metrics.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skill-metrics.scss',
})
export class SkillMetrics {
  readonly metrics = input.required<readonly SkillMetric[]>();
}
