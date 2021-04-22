import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List, makeStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import SignedInLInks from './signedInLInks'
import SignedOutLInks from './signedOutLinks'



const Navbar = (props) => {
    const classes = useStyles();

    const { auth, profile } = props;
    console.log(auth)
    const links = auth.uid ? <SignedInLInks /> : <SignedOutLInks />

    return (
        <List className={classes.navCont}>
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
            {links}
        </List>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }

}

export default connect(mapStateToProps)(Navbar)


const useStyles = makeStyles({
    linkText: {
        color: "#272727",
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
