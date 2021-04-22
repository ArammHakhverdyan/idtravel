import { firebaseReducer, firestoreReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";




const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer