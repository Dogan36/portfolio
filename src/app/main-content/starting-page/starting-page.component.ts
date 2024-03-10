import { Component, inject } from '@angular/core';
import { NgxTranslateModule } from '../../translate/translate.module';
import { NgClass } from '@angular/common';
import AOS from 'aos';
import { LanguagesService } from '../../languages.service';

@Component({
  selector: 'app-starting-page',
  standalone: true,
  imports: [NgxTranslateModule, NgClass],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.scss'
})
export class StartingPageComponent {

  constructor() { AOS.init(); }

  languagesService = inject(LanguagesService)

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
      console.log(this.languagesService.currentLanguage)
    }
  }
}
