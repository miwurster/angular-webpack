import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { DummyDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    InMemoryWebApiModule.forRoot(DummyDataService, { delay: 600, apiBase: 'api/' }),
  ],
  declarations: [SortPipe],
  exports: [SortPipe, CommonModule]
})
export class SharedModule {
}
