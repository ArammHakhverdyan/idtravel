import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@material-ui/core"
import react, { useState } from "react"
import { auth } from "../index"
import React from 'react'

function Auth() {
    const [signInEmail, setSignInEmail] = useState("")
    const [signInPassword, setSignInPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")
    //const [buttonText, setButtonText] = useState("Sign In");
    //const changeText = (text) => setButtonText(text);
    const signIn = () => {
        auth.signInWithEmailAndPassword(signInEmail, signInPassword).then((userCredential) => {
            // Signed in 
            var user = userCredential.user;

            // setButtonText(text)
            //Button.innerText = "Sign Out"
            console.log("Yor are logged In", userCredential.id, user)
            // ...
        })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            })
    }
    const signUp = () => {
        auth.createUserWithEmailAndPassword(signUpEmail, signUpPassword).then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log("SignUp", userCredential.id, user)
            // ...
        })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            })
    }
    return (
        <div>
            <h2>Sign In</h2>
            <br />
            <TextField label="Email" variant="outlined" type="text" value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
            <br />
            <br />
            <TextField label="Password" variant="outlined" type="password" value={signInPassword} onChange={e => setSignInPassword(e.target.value)} />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={signIn}>
                Sign In
            </Button>
            <br />
            <br />
            <br />
            <h2>Sign Up</h2>
            <TextField label="FirstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            {/* <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder={"FirstName"}></input> */}
            <br />
            <TextField label="LastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            {/* <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder={"LastName"}></input> */}
            <br />
            <br />

            <form noValidate>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="1990-01-01"
                />
            </form>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <br />
            <TextField label="Email" type="text" value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
            {/* <input type="text" value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)}></input> */}
            <br />
            <TextField label="Password" type="password" value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} />
            {/* <input type="password" value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)}></input> */}
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={signUp}>
                Sign Up
            </Button>
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={() => auth.signOut()}>
                Log out
            </Button>
        </div>
    )
}

export default Auth
