import {Component, OnInit} from '@angular/core'; 
import { LanguagesService } from '../languages.service';
import { NgxTranslateModule } from '../translate/translate.module';
import { NgClass} from '@angular/common';
import AOS from 'aos';
@Component({
  selector: 'app-starting-page',
  standalone: true,
  imports: [NgxTranslateModule, NgClass],
  templateUrl: './starting-page.component.html',
  styleUrl: './starting-page.component.scss'
})
export class StartingPageComponent implements OnInit{
  constructor(public languagesService: LanguagesService) { }
  ngOnInit() {
    console.log('init')
   AOS.init();
  }
  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView();
     
    }
  }
}
