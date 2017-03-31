import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Crisis } from '../shared/model/crisis.model';
import { CrisisActions } from './crisis.actions';
import { CrisisService } from './crisis.service';
import { ComposeMessageComponent } from '../shared/compose-message.component';
import { DynamicComponentDirective } from '../shared/dynamic-component.directive';
import { DynamicComponentService } from '../shared/dynamic-component.service';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './crisis.component.html'
})
export class CrisisComponent implements OnInit {

  data: Observable<Crisis[]>;
  initialized: Observable<boolean>;

  @ViewChild(DynamicComponentDirective)
  dynamicComponent: DynamicComponentDirective;

  constructor(private store: Store<AppState>,
              private crisisActions: CrisisActions,
              private crisisService: CrisisService,
              private dynamicComponentService: DynamicComponentService) {
    this.data = this.store.select(state => state.crisis.data);
    this.initialized = this.store.select(state => state.crisis.initialized);
  }

  contact(): void {
    this.dynamicComponentService.createComponent(ComposeMessageComponent, this.dynamicComponent,
      instance => {
        instance.message = 'Add your text here...';
      });
  }

  ngOnInit(): void {
    this.crisisService
        .findAll()
        .then((data) => this.store.dispatch(this.crisisActions.refresh(data)));
  }
}
