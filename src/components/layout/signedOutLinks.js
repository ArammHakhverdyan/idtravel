import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const SignedOutLInks = () => {
    return (
        <ul className="right col s12">
            {/* <li><NavLink to="/">Login</NavLink></li> */}
            <li><NavLink to="/signup"> Sign Up</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>

        </ul>
    )
}

export default SignedOutLInks