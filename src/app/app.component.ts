import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { SkillsComponent } from './skills/skills.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { NgxTranslateModule } from './translate/translate.module';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, ContactComponent, FooterComponent, HeaderComponent, PortfolioComponent, SkillsComponent, StartingPageComponent, NgxTranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
