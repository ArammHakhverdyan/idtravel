import { auth, db } from "../config/config";
import { selectLoggedInUserId } from "../redux/selectors";

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        auth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        auth.signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}


export const signUp = (newUser) => {
    return (dispatch, getState) => {
        auth.createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return db.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(error => {
            dispatch({ type: 'SIGNUP_ERROR', error })
        })
    }
}



export const updateLoggedInUserInfo = (newInfo) => {
    return (dispatch, getState) => {
        // const uId = getState().auth.loggedInUser.uid
        const uId = selectLoggedInUserId(getState());
        const docRef = db.collection('users').doc(uId);
        docRef.update(newInfo).then((doc) => {
            dispatch({ type: "UPDATE_LOGGEDIN_USER_INFO", payload: newInfo })
        })
    }
}

