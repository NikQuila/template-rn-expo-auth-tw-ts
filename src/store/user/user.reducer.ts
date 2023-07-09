import { User } from '../../utils/types';
import { UserAction } from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import { AnyAction } from '@reduxjs/toolkit';

export interface UserState {
  currentUser: User | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: UserAction | AnyAction
): UserState => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
