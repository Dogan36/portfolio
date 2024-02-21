
  import { Injectable } from '@angular/core';
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
      // Weitere Sprachen hinzufügen...
    ];
    
  currentLanguage:string= "en";
  
    constructor(private translate: TranslateService) { }
    changeSiteLanguage(localeCode: string): void {
      const selectedLanguage = this.languageList
        .find((language) => language.code === localeCode)
        ?.label.toString();
      if (selectedLanguage) {
        this.siteLanguage = selectedLanguage;
        this.translate.use(localeCode);
      }
      this.currentLanguage = this.translate.currentLang;
      console.log('currentLanguage', this.currentLanguage);
    }
  
   
  }
  
