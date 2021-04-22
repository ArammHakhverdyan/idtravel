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


// const config = {
//     apiKey: "AIzaSyDe2tXXyUNm5sesgGRPB2qul8MMKQmkii8",
//     authDomain: "example-596ba.firebaseapp.com",
//     projectId: "example-596ba",
//     storageBucket: "example-596ba.appspot.com",
//     messagingSenderId: "420454727595",
//     appId: "1:420454727595:web:36c2b630fe6aef8959dcee"
// };


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;