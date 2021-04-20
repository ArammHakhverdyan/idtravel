import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_v.png'


function Logo() {
    return (
        <Link to="/">
            <img style={{ display: "flex", width: "220px", }} src={logo} alt="Logo" />
        </Link>
    )
}


export default Logo