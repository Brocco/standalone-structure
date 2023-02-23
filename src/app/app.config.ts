import { ApplicationConfig } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routes from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};

export default appConfig;
