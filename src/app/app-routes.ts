import { Routes } from '@angular/router';
import { EagerComponent } from './eager/eager.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./lazy/lazy.component').then((mod) => mod.LazyComponent),
  },
  {
    path: 'child-routes',
    loadChildren: () =>
      import('./child/child-routes').then((mod) => mod.routes),
  },
];
