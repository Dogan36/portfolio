import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NgxTranslateModule } from './translate/translate.module';
import { FooterComponent } from './footer/footer.component';
import { LanguagesService } from './languages.service';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MainContentComponent, NgxTranslateModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
constructor(public languagesService: LanguagesService) {}
}
