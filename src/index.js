import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBBadZVp9nHbJGfvAsbk9P_b_dWOmubliE",
  authDomain: "idtravel-df51e.firebaseapp.com",
  projectId: "idtravel-df51e",
  storageBucket: "idtravel-df51e.appspot.com",
  messagingSenderId: "320272449368",
  appId: "1:320272449368:web:a95458854f8387402cef2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
