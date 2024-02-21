import { Component } from '@angular/core';


import { NgxTranslateModule } from './../translate/translate.module'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgxTranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
