import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { Authentication } from './services/authentication';
import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    authInterceptProvider
    //Authentication
  ]

};
