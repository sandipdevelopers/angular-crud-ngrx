import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './core/reducer/user.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserEffects } from './core/effects/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()), 
    provideRouter(routes),
    provideClientHydration(),
    provideStore({ users: userReducer }), provideEffects([UserEffects])]
};

