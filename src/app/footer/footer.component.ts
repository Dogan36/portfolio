import { Component, Renderer2, ElementRef } from '@angular/core';
import { NgxTranslateModule } from '../translate/translate.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgxTranslateModule, RouterLink],
  animations: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isOpen = false;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }


  toggleImpressum() {
    this.isOpen = !this.isOpen;
    this.toggleScroll();
  }

  toggleScroll() {
    if (this.isOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
    }
  }
}
