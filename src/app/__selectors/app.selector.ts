import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../__reducers/appReducer';


export const selectAppState = createFeatureSelector<AppState>('mainApp');


export const isLoading = createSelector(selectAppState, app => app.isLoading);

