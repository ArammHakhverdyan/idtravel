import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/AuthActions';
import { makeStyles, Container, Box, TextField, Button, Typography } from '@material-ui/core/';


const SignIn = (props) => {
    const classes = useStyles();
    const { authError, loggedInUser } = props;

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
        e.preventDefault();
        props.signIn(value);
    }

    if (loggedInUser) return null

    return (
        <Container>
            <Box py={5} className={classes.loginForm} textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>Sign In</Typography>
                {authError && <Typography color="secondary" gutterBottom>{authError}</Typography>}
                <TextField id="email" error={authError} fullWidth={true} label="Email" variant="outlined" value={value.email} onChange={handleChange} />
                <TextField type="password" error={authError} id="password" fullWidth={true} label="Password" variant="outlined" value={value.password} onChange={handleChange} />
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
