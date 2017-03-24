import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Crisis } from '../shared/model/crisis.model';
import { CrisisActions } from './crisis.actions';
import { CrisisService } from './crisis.service';
import { ComposeMessageComponent } from '../shared/compose-message.component';
import { DynamicComponentsDirective } from '../shared/dynamic-components.directive';
import { DynamicComponentsService } from '../shared/dynamic-components.service';

@Component({
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.scss'],
})
export class CrisisComponent implements OnInit {

  data: Observable<Crisis[]>;
  initialized: Observable<boolean>;

  @ViewChild(DynamicComponentsDirective)
  dynamicComponents: DynamicComponentsDirective;

  constructor(private store: Store<AppState>,
              private crisisActions: CrisisActions,
              private crisisService: CrisisService,
              private dynamicComponentsService: DynamicComponentsService) {
    this.data = this.store.select(state => state.crisis.data);
    this.initialized = this.store.select(state => state.crisis.initialized);
  }

  contact(): void {
    this.dynamicComponentsService.createComponent(ComposeMessageComponent, this.dynamicComponents,
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
