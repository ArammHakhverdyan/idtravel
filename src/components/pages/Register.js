import React, { useState } from 'react';
import { makeStyles, Button, Typography, TextField, Container, Box } from "@material-ui/core";
import { auth } from "../app/App"

const useStyles = makeStyles((theme) => ({
    conatiner: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1.5),
            width: 450,
        },
    },
}));

const Register = () => {

    const classes = useStyles();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")
    //const [buttonText, setButtonText] = useState("Sign In");
    //const changeText = (text) => setButtonText(text);

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
        <Container>
            <Box className={classes.conatiner} display="flex" flexDirection="column" alignItems="center" py={4}>
                <Typography variant="h4">Sign Up</Typography>
                <TextField variant="outlined" label="FirstName" type="text"
                    value={firstName} onChange={e => setFirstName(e.target.value)} />
                <TextField variant="outlined" label="LastName" type="text"
                    value={lastName} onChange={e => setLastName(e.target.value)} />
                <TextField variant="outlined" label="Email" type="text"
                    value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
                <TextField variant="outlined" label="Password" type="password"
                    value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} />
                <Box py={2}>
                    <Button style={{ marginRight: "10px" }} variant="contained" color="primary" onClick={signUp}>
                        Sign Up
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => auth.signOut()}>
                        Log out
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Register;