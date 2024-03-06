import { Component, Renderer2, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  animations: [
    trigger('toggle', [
      state('open', style({ height: '*' })),
      state('closed', style({
        'padding-top': '0',
        'padding-bottom': '0',
        height: '0',
      })),
      transition('open <=> closed', [
        animate('0.125s')
      ]),

    ]),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  isOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
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
