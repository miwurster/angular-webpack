import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './hero.component';
import { HeroDashboardComponent } from './hero-dashboard';
import { HeroListComponent } from './hero-list';
import { HeroDetailComponent } from './hero-detail';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroComponent,
    children: [
      { path: '', component: HeroDashboardComponent },
      { path: 'all', component: HeroListComponent },
      { path: ':id', component: HeroDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
