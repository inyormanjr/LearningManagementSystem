import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../__reducers/appReducer';
import { AuthState } from '../__reducers/auth.reducer';


export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const currentUser = createSelector(
  selectAuthState,
  (mainApp) => mainApp.currentUser
);

export const isLoggedIn = createSelector(
  selectAuthState, auth => !!auth.currentUser
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
)
