import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroService } from './hero.service';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroResolver } from './hero-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HeroRoutingModule,
  ],
  declarations: [
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent,
  ],
  providers: [HeroService, HeroResolver],
})
export class HeroModule {
}
