import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';


const SignedOutLInks = () => {
    const classes = useStyles();

    return (
        <>
            <Button component={Link} to="/signup" className={classes.linkBtn} variant="outlined" color="primary">
                Sign Up
            </Button>
            <Button component={Link} to="/signin" className={classes.linkBtn} variant="contained" color="primary">
                Login
            </Button>
        </>
    )
}

export default SignedOutLInks;


const useStyles = makeStyles({
    linkBtn: {
        marginLeft: "15px",
    },
});