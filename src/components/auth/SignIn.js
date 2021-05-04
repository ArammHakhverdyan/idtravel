import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/AuthActions';
import { makeStyles, Container, Box, TextField, Button, Typography } from '@material-ui/core/';


const SignIn = (props) => {
    const classes = useStyles();
    const { authError, loggedInUser } = props;
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        setPasswordError("");
        setEmailError("");
        if (!value.password) {
            setPasswordError("This field can't be blank");
        }
        if (!value.email) {
            setEmailError("This field can't be blank");
        } else if (value.password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        } else {
            e.preventDefault();
            props.signIn(value);
        }

    }

    if (loggedInUser) return null

    return (
        <Container>
            <Box py={5} className={classes.loginForm} textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>Sign In</Typography>
                {authError && <Typography color="secondary" gutterBottom>{authError}</Typography>}
                <TextField id="email" helperText={emailError} error={emailError ? true : false} fullWidth={true} label="Email" variant="outlined" value={value.email} onChange={handleChange} />
                <TextField helperText={passwordError} error={passwordError ? true : false} type="password" id="password" fullWidth={true} label="Password" variant="outlined" value={value.password} onChange={handleChange} />
                <Button className={classes.loginBtn} fullWidth={true} variant="contained" onClick={handleSubmit}>Login</Button>
            </Box>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        loggedInUser: state.auth.loggedInUser,
    }
}

const mapDispatchToProps = (dipsatch) => {
    return {
        signIn: (creds) => dipsatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);



const useStyles = makeStyles({
    loginForm: {
        maxWidth: "400px",
        margin: "auto",
        '& .MuiTextField-root': {
            marginBottom: '20px',
        },
    },
    loginBtn: {
        backgroundColor: "#94c93d",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#8cc927",
        }
    },
});
