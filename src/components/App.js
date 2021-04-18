import React from 'react';
import { useEffect } from 'react';
import { TextField, Typography } from '@material-ui/core/';
import Auth from './Auth';
import { auth } from "../index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CssBaseline } from "@material-ui/core"
import '../Style/nav-style.css'
import AboutUs from './AboutUs';
import Header from './Header';
import Tours from './Tours';
import Menu from './Menu';



function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("Sign Up", user)
    })
  })
  return (
    <div>
      {/* <Auth /> */}
      <Router>
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/home" />
          <Route path="/menu" component={Menu} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/tours" component={Tours} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
