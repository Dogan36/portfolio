import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillsComponent } from '../skills/skills.component';
import { StartingPageComponent } from '../starting-page/starting-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, PortfolioComponent, SkillsComponent, ContactComponent, StartingPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
