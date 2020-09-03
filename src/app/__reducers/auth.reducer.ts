import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {routerReducer} from '@ngrx/router-store';
import { User } from '../models/user';
import { AuthActions } from '../actions/action-types';

export interface AuthState {
  currentUser: User;

}

export const initialAuthState: AuthState = {
  currentUser: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      currentUser: action.user
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      currentUser: undefined
    };
  }),
);

export function logger(reducer: ActionReducer<any>)
    : ActionReducer<any> {
  return (state, action) => {
    // console.log('state before: ', state);
    // console.log('action', action);
    return reducer(state, action);
  };

}


export const metaReducers: MetaReducer<AuthState>[] =
    !environment.production ? [logger] : [];
