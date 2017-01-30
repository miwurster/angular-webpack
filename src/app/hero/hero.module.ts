import { NgModule }    from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from '../shared/shared.module';

import { HeroRoutingModule } from './hero-routing.module';

import { HeroService, HeroDataService } from './hero.service';
import { HeroComponent } from './hero.component';
import { HeroDashboardComponent } from './hero-dashboard';
import { HeroSearchService, HeroSearchComponent } from './hero-search';
import { HeroListComponent } from './hero-list';
import { HeroDetailComponent } from './hero-detail';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    HttpModule,
    HeroRoutingModule,
    InMemoryWebApiModule.forRoot(HeroDataService),
  ],
  declarations: [
    HeroComponent,
    HeroDashboardComponent,
    HeroSearchComponent,
    HeroListComponent,
    HeroDetailComponent,
  ],
  providers: [
    HeroService,
    HeroSearchService,
  ],
})
export class HeroModule { }
