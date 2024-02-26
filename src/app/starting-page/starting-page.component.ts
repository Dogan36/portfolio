import { Component } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { NgxTranslateModule } from '../translate/translate.module';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-starting-page',
  standalone: true,
  imports: [NgxTranslateModule, NgClass],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.scss'
})
export class StartingPageComponent {
  constructor(public languagesService: LanguagesService) { }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
     
    }
  }
}
