import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

export const appConfig: ApplicationConfig = {
  providers:
    [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    importProvidersFrom(FormsModule),
      AuthGuard,
    provideRouter(routes),
    provideClientHydration()]
};
