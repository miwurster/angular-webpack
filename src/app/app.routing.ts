import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { HeroListComponent } from './hero-list';
import { HeroDetailComponent } from './hero-detail';

const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'heroes',
    component: HeroListComponent,
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
