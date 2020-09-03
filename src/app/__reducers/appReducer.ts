import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppActions } from '../actions/action-types';
import { User } from '../models/user';


export interface AppState {
  isLoading: boolean;
}

export const initialAppState: AppState = {
  isLoading: false,
};

export const reducer = createReducer(
  initialAppState,
  on(AppActions.loading, (state, action) => {
    return {
      isLoading: action.isLoading,
    };
  }),
);
