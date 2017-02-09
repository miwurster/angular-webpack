import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroService } from './hero.service';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list';
import { HeroDetailComponent } from './hero-detail';
import { HeroSearchComponent } from './hero-search';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    HttpModule,
    HeroRoutingModule,
  ],
  declarations: [
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  providers: [HeroService],
})
export class HeroModule {
}
