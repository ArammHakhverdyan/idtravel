import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { signOut } from '../../actions/AuthActions'

const SignedInLInks = (props) => {
    return (
        <ul className="right">
            {/* <li><NavLink to="/">Register</NavLink></li> */}
            <li><a onClick={props.signOut}>Log Out</a></li>

            <li>
                <NavLink to="/" className="btn-floating btn-large waves-effect waves-light aquablue">
                    {/* {props.profile.initials} */}
                </NavLink>

            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLInks)