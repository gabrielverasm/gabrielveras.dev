import { Component, inject, output, ChangeDetectionStrategy } from '@angular/core';

import { LanguageService } from '../../../../core/i18n/language.service';

@Component({
  selector: 'app-profile-photo-modal',
  templateUrl: './profile-photo-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './profile-photo-modal.scss',
})
export class ProfilePhotoModal {
  readonly closeModal = output<void>();

  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
}
