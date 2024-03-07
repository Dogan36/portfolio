import { Component, OnInit } from '@angular/core';
import { NgxTranslateModule } from '../translate/translate.module';
import { LanguagesService } from '../languages.service';
import AOS from "aos";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgxTranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  constructor(public languagesService: LanguagesService) { }
  ngOnInit() {
    console.log('init2')
    AOS.init();
  }
}
