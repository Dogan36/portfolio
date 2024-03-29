import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LanguagesService } from '../languages.service';
export function HttpLoaderFactory(http: HttpClient) {

  return new TranslateHttpLoader(http,
    './assets/i18n/',
    '.json');
}
@NgModule({
  exports: [TranslateModule],
})
export class NgxTranslateModule { }