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

  constructor() {}
  jobTitles = ['FRONTEND\u00A0', '\u00A0BACKEND\u00A0\u00A0', 'FULLSTACK'];
currentJobTitle = this.jobTitles[0];
currentIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.jobTitles.length;
    this.currentJobTitle = this.jobTitles[this.currentIndex];
  }, 3000);
}
  languagesService = inject(LanguagesService)

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
    }
  }
}
