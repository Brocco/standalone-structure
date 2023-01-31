import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'details', component: DetailsComponent },
];
