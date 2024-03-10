
  import { Injectable, importProvidersFrom } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateModule } from './translate/translate.module';

  
  @Injectable({
    providedIn: 'root'
  })
  export class LanguagesService {
    siteLanguage = 'English';
    
    languageList = [
      { code: 'en', label: 'English', imageSrc: '/assets/gbFlag.png' },
      { code: 'de', label: 'Deutsch', imageSrc: '/assets/gerFlag.png' },
    ];
    
    currentLanguage: string = "en";

    constructor(private translate: TranslateService) {console.log('instanz of lang serv') }
    
    changeSiteLanguage(): void {
      const newLanguage = this.currentLanguage === "en" ? "de" : "en";
      
      this.translate.use(newLanguage);
      this.currentLanguage = newLanguage;
    }
  }
