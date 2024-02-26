import { Component } from '@angular/core';
import { NgxTranslateModule } from '../translate/translate.module';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgxTranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(public languagesService: LanguagesService) { }
}
