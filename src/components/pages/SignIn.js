import React, { useState } from 'react';
import { auth } from "../app/App";
import { makeStyles, Button, TextField, Container, Box, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    conatiner: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1.5),
            width: 450,
        },
    },
}));

const SignIn = () => {
    const classes = useStyles();
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

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

    return (
        <Container>
            <Box className={classes.conatiner} display="flex" flexDirection="column" alignItems="center" py={4}>
                <Typography variant="h4">Sign In</Typography>
                <TextField label="Email" variant="outlined" type="text" value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
                <TextField label="Password" variant="outlined" type="password" value={signInPassword} onChange={e => setSignInPassword(e.target.value)} />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Sign In
                </Button>
            </Box>
        </Container>
    )
}

export default SignIn;