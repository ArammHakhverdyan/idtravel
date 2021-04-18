import React from 'react';
import logo from '../components/logo.jpeg'


const style = {
    width: "130px",
    height: "130px",

}

function Logo() {
    return (
        <div>
            <img style={style} src={logo} alt="Logo" />
        </div>
    )
}


export default Logo