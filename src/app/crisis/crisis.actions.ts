import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Crisis } from '../shared/model/crisis.model';

@Injectable()
export class CrisisActions {

  static REFRESH = 'CRISIS_REFRESH';

  refresh(data: Crisis[]): Action {
    return {
      type: CrisisActions.REFRESH,
      payload: data,
    };
  }
}
