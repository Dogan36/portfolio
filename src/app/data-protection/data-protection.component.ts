import { Component, inject } from '@angular/core';
import { NgxTranslateModule } from '../translate/translate.module';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-data-protection',
  standalone: true,
  imports: [NgxTranslateModule],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})

export class DataProtectionComponent {
languagesService=inject(LanguagesService)
}
