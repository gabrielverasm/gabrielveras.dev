import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { APP_VERSION } from '../../core/constants/app-version';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.scss',
})
export class Footer {
  readonly appVersion = APP_VERSION;
  readonly content = inject(LanguageService).content;
  readonly currentYear = new Date().getFullYear();
}
