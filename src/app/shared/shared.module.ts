import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DummyDataService } from './in-memory-data.service';
import { SortPipe } from './sort.pipe';
import { SpinnerComponent } from './spinner.component';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { ComposeMessageComponent } from './compose-message.component';
import { DynamicComponentService } from './dynamic-component.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(DummyDataService, { delay: 600, apiBase: 'api/' }),
    ModalModule.forRoot(),
  ],
  declarations: [
    SortPipe,
    SpinnerComponent,
    ComposeMessageComponent,
    DynamicComponentDirective,
  ],
  providers: [
    DynamicComponentService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SortPipe,
    SpinnerComponent,
    ComposeMessageComponent,
    DynamicComponentDirective,
  ]
})
export class SharedModule {
}
