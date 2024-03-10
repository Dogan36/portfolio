import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './translate/translate.module';
import { HttpClient } from '@angular/common/http';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};

