export const selectLoggedInUser = (state) => state.auth.loggedInUser;

export const selectLoggedInUserId = (state) => state.auth.loggedInUser?.uid;

export const selectLoggedInUserInfo = (state) => state.auth.loggedInUser?.info;

