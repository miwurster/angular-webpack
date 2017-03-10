import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CrisisComponent } from './crisis.component';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisActions } from './crisis.actions';
import { CrisisService } from './crisis.service';

@NgModule({
  imports: [SharedModule, CrisisRoutingModule],
  declarations: [CrisisComponent],
  providers: [CrisisActions, CrisisService],
})
export class CrisisModule {
}
