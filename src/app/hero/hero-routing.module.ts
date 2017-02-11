import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail';
import { HeroResolver } from './hero-resolver.service';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroComponent,
    children: [
      {
        path: ':id',
        component: HeroDetailComponent,
        resolve: {
          hero: HeroResolver,
        },
      },
      { path: 'new', component: HeroDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {
}
