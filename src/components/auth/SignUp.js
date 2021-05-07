import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signUp } from '../../actions/AuthActions';
import { storageRef } from '../../config/config';
import ImageHeader from '../shared/ImageHeader';


export const SignUp = (props) => {
    const classes = useStyles()
    const { auth } = props;
    const [url, setUrl] = useState([""])
    const [value, setValue] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");


    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        setFirstNameError("");
        setEmailError("");
        setPasswordError("");
        setLastNameError("")
        if (!value.firstName) {
            setFirstNameError("This field can't be blank");
        }
        if (!value.lastName) {
            setLastNameError("This field can't be blank");
        }
        if (!value.email) {
            setEmailError("This field can't be blank");
        } else if (!value.email.includes("@" && ".")) {
            setEmailError("Invalid email");
        }
        if (!value.password) {
            setPasswordError("This field can't be blank");
        } else if (value.password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        }
        if (value.firstName && value.lastName && value.email && value.password) {
            e.preventDefault();
            props.signUp(value);

        }

    }


    useEffect(() => {
        const a = storageRef.child('Images/signIn/pic.jpg')

        a.getDownloadURL().then((downloadURL) => {
            setUrl(() => {
                const newSt = downloadURL
                return newSt;
            });

        }).catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
                default: {
                    return
                }
            }
        })
    }, [])


    if (auth.uid) return <Redirect to='/' />


    return (
        <>
            <ImageHeader text="" backgroundImage={url} />
            <div className={classes.bg}>
                <Container className>
                    <Box py={5} className={classes.loginForm} textAlign="center">
                        <Typography variant="h4" component="h1" gutterBottom>Sign Up</Typography>
                        {/* {authError && <Typography color="secondary" gutterBottom>{authError}</Typography>} */}
                        <TextField id="email" fullWidth={true} label="Email" helperText={emailError} error={emailError ? true : false} variant="outlined" value={value.email} onChange={handleChange} />
                        <TextField type="password" helperText={passwordError} error={passwordError ? true : false} id="password" fullWidth={true} label="Password" variant="outlined" value={value.password} onChange={handleChange} />
                        <TextField id="firstName" helperText={firstNameError} error={firstNameError ? true : false} fullWidth={true} label="FirstName" variant="outlined" value={value.firstName} onChange={handleChange} />
                        <TextField id="lastName" helperText={lastNameError} error={lastNameError ? true : false} fullWidth={true} label="LastName" variant="outlined" value={value.lastName} onChange={handleChange} />
                        <Button className={classes.loginBtn} fullWidth={true} variant="contained" onClick={handleSubmit}>Sign Up</Button>
                    </Box>
                </Container>
            </div>
        </>
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
    bg: {
        backgroundImage: "url(https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-background-1.png?id=125)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "30px 0",
    }
});