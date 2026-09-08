import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { ExperienceItem } from '../../../core/models/portfolio-content.model';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  readonly experience = input.required<ExperienceItem>();
  readonly detailsLabel = input.required<string>();
  readonly technologiesLabel = input.required<string>();
}
