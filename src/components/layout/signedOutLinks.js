import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';


const SignedOutLInks = () => {
    const classes = useStyles();

    return (
        <>
            <Button component={Link} to="/signup" className={classes.signBtn} variant="outlined" color="primary">
                Sign Up
            </Button>
            <Button component={Link} to="/signin" className={classes.loginBtn} variant="contained" color="primary">
                Login
            </Button>
        </>
    )
}

export default SignedOutLInks;


const useStyles = makeStyles({
    signBtn: {
        marginLeft: "15px",
        borderColor: "#94c93d",
        color: "#94c93d",
        '&:hover': {
            borderColor: "#9bd934",
        },
    },
    loginBtn: {
        marginLeft: "15px",
        backgroundColor: "#94c93d",
        '&:hover': {
            backgroundColor: "#9bd934",
        },
    }
});