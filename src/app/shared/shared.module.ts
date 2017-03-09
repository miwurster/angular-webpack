import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DummyDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModalModule } from 'ng2-bootstrap';
import { SortPipe } from './sort.pipe';
import { SpinnerComponent } from './spinner.component';
import { PageNotFoundComponent } from '../page-not-found.component';
import { DynamicComponentsDirective } from './dynamic-components.directive';
import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(DummyDataService, { delay: 600, apiBase: 'api/' }),
    ModalModule.forRoot(), // ng2 Bootstrap
  ],
  declarations: [
    SortPipe,
    SpinnerComponent,
    ComposeMessageComponent,
    DynamicComponentsDirective,
  ],
  exports: [
    CommonModule,
    SortPipe,
    SpinnerComponent,
    ComposeMessageComponent,
    DynamicComponentsDirective,
  ]
})
export class SharedModule {
}
