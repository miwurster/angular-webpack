import { Action } from '@ngrx/store';
import { Crisis } from '../shared/model/crisis.model';

export const REFRESH = 'CRISIS_REFRESH';

export class RefreshAction implements Action {
  readonly type = REFRESH;

  constructor(public payload: Crisis[]) {}
}

export type All = RefreshAction;
