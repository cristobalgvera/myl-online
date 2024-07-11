import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import {
  provideHttpCache,
  provideHttpCacheLocalStorageStrategy,
  withHttpCacheInterceptor,
} from '@ngneat/cashew';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([withHttpCacheInterceptor()]),
    ),
    provideHttpCache(),
    provideHttpCacheLocalStorageStrategy(),
    provideAnimations(),
    provideClientHydration(),
  ],
};
