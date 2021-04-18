import React from 'react';
import { useEffect } from 'react';
import { TextField, Typography } from '@material-ui/core/';
import Auth from './Auth';
import {auth} from "../index"


function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        console.log("Sign Up",user)
        
    })
  })
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
