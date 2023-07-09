import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../reducer/reducer';
import { User } from '../../utils/types';
import { UserState } from './user.reducer';

export const setCurrentUser = (user: User | null) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export interface UserAction {
  type: typeof USER_ACTION_TYPES.SET_CURRENT_USER;
  payload: User | null;
}
