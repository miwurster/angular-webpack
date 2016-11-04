import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { APP_ROUTING } from './app.routing';
import { AppComponent } from './app.component';

import { HeroService, HERO_WEB_API_MODULE } from './hero/hero.service';
import { HeroListComponent } from './hero-list';
import { HeroDetailComponent } from './hero-detail';

import { DashboardComponent } from './dashboard';

import { HeroSearchService, HeroSearchComponent } from './hero-search';

import { SortPipe } from './sort';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    HERO_WEB_API_MODULE,
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    SortPipe,
  ],
  providers: [
    HeroService,
    HeroSearchService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
