import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signUp } from '../../actions/AuthActions';

const SignUp = (props) => {
    const classes = useStyles()
    const { auth, authError } = props;
    const [value, setValue] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });



    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(value)
    }

    if (auth.uid) return <Redirect to='/' />
    return (

        <Container>
            <Box py={5} className={classes.loginForm} textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>Sign Up</Typography>
                {authError && <Typography color="secondary" gutterBottom>{authError}</Typography>}
                <TextField id="email" fullWidth={true} label="Email" variant="outlined" value={value.email} onChange={handleChange} />
                <TextField type="password" id="password" fullWidth={true} label="Password" variant="outlined" value={value.password} onChange={handleChange} />
                <TextField id="firstName" fullWidth={true} label="FirstName" variant="outlined" value={value.firstName} onChange={handleChange} />
                <TextField id="lastName" fullWidth={true} label="LastName" variant="outlined" value={value.lastName} onChange={handleChange} />
                <Button className={classes.loginBtn} fullWidth={true} variant="contained" onClick={handleSubmit}>Sign Up</Button>
            </Box>
        </Container>

    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        authError: state.auth.authError
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)



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