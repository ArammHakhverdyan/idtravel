import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List, makeStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import SignedInLInks from './signedInLInks'
import SignedOutLInks from './signedOutLinks'



const Navbar = (props) => {
    const { auth, profile } = props;
    console.log(auth)
    const links = auth.uid ? <SignedInLInks /> : <SignedOutLInks />
    return (
        <nav className=" grey-darken-3">
            <div className="container">
                {links}
                <Link to="/" className="brand-logo" > IDTravel</Link>
                <ul className="right">
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/services"> Services</NavLink></li>
                    <li><NavLink to="/tours"> Tours</NavLink></li>
                    <li><NavLink to="/contact"> Contact</NavLink></li>
                </ul>

            </div>
        </nav>
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
