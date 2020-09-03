import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';



export const setCurrentUser = createAction(
  '[Root MainApp] User Login',
  props<{ user: User }>()
);

export const loading = createAction(
  '[Root Page] User Transaction',
  props<{isLoading: boolean}>()
);

