import { Crisis } from '../shared/model/crisis.model';
import * as CrisisActions from './crisis.actions';

export type Action = CrisisActions.All;

export interface CrisisState {
  data: Crisis[];
  initialized: boolean;
}

export const initialState: CrisisState = {
  data: [],
  initialized: false,
};

export function crisisReducer(state = initialState, action: Action): CrisisState {
  switch (action.type) {
    case CrisisActions.REFRESH: {
      return Object.assign({}, state, {
        data: action.payload,
        initialized: true,
      });
    }
    default:
      return state;
  }
}
