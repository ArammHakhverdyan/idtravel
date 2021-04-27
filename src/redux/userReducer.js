import { initialState } from "./initialState";

const initState = initialState.users

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error)
            return state;
        default:
            return state
    }
}

export default userReducer