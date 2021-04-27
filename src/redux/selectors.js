export const selectLoggedInUser = (state) => state.auth.loggedInUser;

export const selectLoggedInUserId = (state) => state.auth.loggedInUser?.uid;
