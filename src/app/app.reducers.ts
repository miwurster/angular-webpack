import { combineReducers, State, ActionReducer } from '@ngrx/store';

import * as fromCrisis from './crisis/crisis.reducer';

export interface AppState {
  crisis: fromCrisis.CrisisState;
}

export const reducers = {
  crisis: fromCrisis.crisisReducer,
};

export function rootReducer(state: any, action: any) {
  return combineReducers(reducers)(state, action);
}
