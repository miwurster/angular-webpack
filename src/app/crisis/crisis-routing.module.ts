import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisComponent } from './crisis.component';

const routes: Routes = [
  {
    path: 'crisis',
    component: CrisisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrisisRoutingModule {
}
