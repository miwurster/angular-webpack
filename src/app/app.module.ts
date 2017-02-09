import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { HeroModule } from './hero';
import { CrisisModule } from './crisis';
import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(), // ng2 Bootstrap
    SharedModule,
    HeroModule,
    CrisisModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
