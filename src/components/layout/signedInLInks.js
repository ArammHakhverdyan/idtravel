import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { signOut } from '../../actions/AuthActions'
import { db } from '../../config/config'



const SignedInLInks = (props) => {
    const uId = useSelector((state) => state.firebase?.auth?.uid);
    console.log(uId)
    const [initials, setInitials] = useState('')
    useEffect(() => {
        if (uId) {
            const docRef = db.collection('users').doc(uId);
            docRef.get().then((doc) => {
                setInitials(doc.data().initials)
            })
        }
    }, [uId])

    return (
        <ul className="right">
            {/* <li><NavLink to="/">Register</NavLink></li> */}
            <li><a onClick={props.signOut}>Log Out</a></li>

            <li>
                <NavLink to="/" className="btn-floating btn-large waves-effect waves-light aquablue">
                    {initials}
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