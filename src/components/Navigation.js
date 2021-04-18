import { createMuiTheme, List, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    navDisplayFlex: {

    },
    linkText: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: "black",
        margin: 20,
        fontFamily: '"Crimson Pro", cursive',
        fontSize: 24,
        marginTop: 20
    }
});


function Navigation() {
    const classes = useStyles()
    return (
        <List component="nav" aria-labelledby="main navigation">
            <Link className={classes.linkText} to="/home">Home</Link>
            <Link className={classes.linkText} to="/menu">Menu</Link>
            <Link className={classes.linkText} to="/aboutUs">About Us</Link>
            <Link className={classes.linkText} to="/tours">Tours</Link>
            <Link className={classes.linkText} to="/auth">Sign in</Link>


        </List>
    )
}

export default Navigation