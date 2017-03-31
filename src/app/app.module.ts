import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { rootReducer } from './app.reducers';
import { SharedModule } from './shared/shared.module';
import { HeroModule } from './hero/hero.module';
import { CrisisModule } from './crisis/crisis.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HeroModule,
    CrisisModule,
    AppRoutingModule,
    StoreModule.provideStore(rootReducer),
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
