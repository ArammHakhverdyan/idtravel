import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import firebase from "firebase";
import Header from '../Header';
import Footer from '../Footer';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Tours from '../pages/Tours';
import Services from '../pages/Services';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

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

function App() {

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("Sign Up", user)
    })
  })

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/tours" component={Tours} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
