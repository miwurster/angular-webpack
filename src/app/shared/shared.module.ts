import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortPipe } from './sort.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SortPipe,
  ],
  exports: [
    SortPipe,
    CommonModule,
  ]
})
export class SharedModule { }
