import { initialState } from "./initialState"

const initState = initialState.auth


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login or password is incorrect`'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.error.message
            }
        case "SET_LOGGEDIN_USER":
            return {
                ...state,
                loggedInUser: action.user
            }
        case "UPDATE_LOGGEDIN_USER_INFO":
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    info: action.payload
                }
            }

        default:
            return state
    }
}

export default authReducer