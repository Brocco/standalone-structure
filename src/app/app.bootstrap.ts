import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app-routes';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApplicationRef } from '@angular/core';

export function bootstrap(): Promise<ApplicationRef> {
  return bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes), provideHttpClient()],
  });
}
