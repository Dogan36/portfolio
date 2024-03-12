import { Component, inject } from '@angular/core';
import { NgxTranslateModule } from '../translate/translate.module';
import { LanguagesService } from '../languages.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data-protection',
  standalone: true,
  imports: [NgxTranslateModule],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})

export class DataProtectionComponent {
languagesService=inject(LanguagesService)
constructor(private  titleService: Title){
 this.titleService.setTitle("Dogan Celik | Privacy Policy")
}

}
