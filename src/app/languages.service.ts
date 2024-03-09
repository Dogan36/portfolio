
  import { Injectable, importProvidersFrom } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';


  
  @Injectable({
    providedIn: 'root'
  })
  export class LanguagesService {
    siteLanguage = 'English';
    
    languageList = [
      { code: 'en', label: 'English', imageSrc: '/assets/gbFlag.png' },
      { code: 'de', label: 'Deutsch', imageSrc: '/assets/gerFlag.png' },
      // Weitere Sprachen hinzufügen...
    ];
    
    currentLanguage: string = "en";

    constructor(private translate: TranslateService) { }
    
    changeSiteLanguage(): void {
      const newLanguage = this.currentLanguage === "en" ? "de" : "en";
      
      this.currentLanguage = newLanguage;
      debugger
      this.translate.use(newLanguage);
    
      console.log('currentLanguage', this.currentLanguage);
    }
  }
