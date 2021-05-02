
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, makeStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import SignedInLInks from './signedInLInks'
import SignedOutLInks from './signedOutLinks'



const Navbar = (props) => {
    const classes = useStyles();

    const { auth } = props;
    const links = auth ? <SignedInLInks /> : <SignedOutLInks />

    return (
        <Box className={classes.navCont}>
            <Button component={NavLink} to="/aboutUs" activeClassName={classes.selt} className={classes.linkText}>
                About Us
            </Button>
            <Button component={NavLink} to="/services" activeClassName={classes.selt} className={classes.linkText}>
                Services
            </Button>
            <Button component={NavLink} to="/tours" activeClassName={classes.selt} className={classes.linkText}>
                Tours
            </Button>
            <Button component={NavLink} to="/contact" activeClassName={classes.selt} className={classes.linkText}>
                Contact
            </Button>
            {links}
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.loggedInUser,
    }

}

export default connect(mapStateToProps)(Navbar)


const useStyles = makeStyles({
    linkText: {
        color: "#fff",
        margin: "0px 8px",
        fontSize: "18px",
        textTransform: "none",
    },
    selt: {
        color: "#94c93d"
    },
    navCont: {
        display: "flex",
        alignItems: "center",
    },
    linkBtn: {
        marginLeft: "15px",
    },
});
