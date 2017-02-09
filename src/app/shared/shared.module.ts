import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { DummyDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SortPipe } from './sort.pipe';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    InMemoryWebApiModule.forRoot(DummyDataService, { delay: 600, apiBase: 'api/' }),
  ],
  declarations: [
    SortPipe,
    SpinnerComponent,
  ],
  exports: [
    SortPipe,
    SpinnerComponent,
    CommonModule,
  ]
})
export class SharedModule {
}
