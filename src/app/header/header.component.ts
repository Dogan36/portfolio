import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateModule } from './../translate/translate.module'
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  activeSection!: string;

  sections: string[] = ['startingPage', 'reference', 'aboutMe', 'skills', 'portfolio']
  
constructor(public languages: LanguagesService) {}

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
      this.activeSection = section;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // Überprüfen Sie, welcher Abschnitt im sichtbaren Bereich ist und aktualisieren Sie activeSection
    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          this.activeSection = section;
        }
      }
    }
  }


}

