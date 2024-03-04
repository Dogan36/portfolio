import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

import { NgxTranslateModule } from './../translate/translate.module'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgxTranslateModule, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
