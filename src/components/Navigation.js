import React from 'react'
import { Link } from 'react-router-dom'
import { List, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
    linkText: {
        color: "#82b440",
        margin: "0px 8px",
        fontSize: "18px",
        textTransform: "none",
    },
    navCont: {
        display: "flex",
        alignItems: "center",
    },
    linkBtn: {
        marginLeft: "15px",
    },
});

function Navigation() {
    const classes = useStyles();

    return (
        <>
            <List className={classes.navCont} component="nav" aria-labelledby="main navigation">
                <Button component={Link} to="/aboutUs" className={classes.linkText}>
                    About Us
                </Button>
                <Button component={Link} to="/services" className={classes.linkText}>
                    Services
                </Button>
                <Button component={Link} to="/tours" className={classes.linkText}>
                    Tours
                </Button>
                <Button component={Link} to="/contact" className={classes.linkText}>
                    Contact
                </Button>
                <Button component={Link} to="/register" className={classes.linkBtn} variant="outlined" color="primary">
                    Register
                </Button>
                <Button component={Link} to="/signIn" className={classes.linkBtn} variant="contained" color="primary">
                    Sign In
                </Button>
                <Button component={Link} to="/user" className={classes.linkBtn} variant="contained" color="primary">
                    Sign In
                </Button>
            </List>
        </>
    )
}

export default Navigation