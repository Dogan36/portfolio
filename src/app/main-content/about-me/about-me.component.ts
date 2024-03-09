import { Component, HostListener, inject} from '@angular/core';
import { NgxTranslateModule } from '../../translate/translate.module';
import AOS from 'aos';
import { LanguagesService } from '../../languages.service';
import { appConfig } from '../../app.config';
import { AppComponent } from '../../app.component';
import { TranslateCompiler } from '@ngx-translate/core';




@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgxTranslateModule, ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent {
constructor() {}
;
  scrollRef: number = 0;

  ngAfterViewInit() {

    // Initialisieren Sie AOS nach der Initialisierung der Ansicht
    AOS.init();
  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.handleScrollEvent();
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.handleScrollEvent();
  
  }

  private handleScrollEvent(): void {
    // Erhöhen Sie den Wert bis zu 10, dann aktualisieren Sie AOS
    if (this.scrollRef <= 10) {
      this.scrollRef++;
    } else {
      AOS.refresh();
    }
    
  }
}
