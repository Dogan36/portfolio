import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../languages.service';
import { NgxTranslateModule } from '../translate/translate.module';

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgxTranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  activeSection!: string;

  sections: string[] = ['startingPage', 'aboutMe', 'skills', 'portfolio', 'contact']

  burgerMenuOpen: boolean = false

  constructor(public languagesService: LanguagesService) { }


 

  @HostListener('window:scroll', ['$event'])
onScrollEnd(event: any): void {
  // Überprüfen Sie, welcher Abschnitt im sichtbaren Bereich ist und aktualisieren Sie activeSection
  for (const section of this.sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Überprüfen, ob die Mitte der Sektion im sichtbaren Bereich ist
      if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
        this.activeSection = section;
      }
    }
  }
}

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
      this.activeSection = section;
    }
  }
  toggleBurger() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
    const body = document.body;
    if (this.burgerMenuOpen) {
      body.classList.add('bodyNoScroll');
    } else {
      body.classList.remove('bodyNoScroll');
    }
  }

  toggleBurgerWithDelay(){
    setTimeout(() => this.toggleBurger(), 500);
  }

}

