import { RootState } from '../store'; // Import your RootState here

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
