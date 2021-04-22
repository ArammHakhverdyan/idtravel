import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCXvaWuFa9T9q0S7ZABa0OccH-fWGdmuJc",
    authDomain: "idtravel-450d9.firebaseapp.com",
    projectId: "idtravel-450d9",
    storageBucket: "idtravel-450d9.appspot.com",
    messagingSenderId: "502379513308",
    appId: "1:502379513308:web:eb45ced472dc7a72a37b19",
    measurementId: "G-ZM1TVZQQ6M"
};



firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })


export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase;