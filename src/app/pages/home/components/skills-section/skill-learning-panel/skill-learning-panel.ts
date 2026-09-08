import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import type { LearningContent } from '../../../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-skill-learning-panel',
  templateUrl: './skill-learning-panel.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skill-learning-panel.scss',
})
export class SkillLearningPanel {
  readonly learning = input.required<LearningContent>();
}
