import { Avatar, Box, Button, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { signOut } from '../../actions/AuthActions'
import { db } from '../../config/config'
import { selectLoggedInUserId, selectLoggedInUserInfo } from '../../redux/selectors'



const SignedInLInks = (props) => {
    const classes = useStyles()
    const history = useHistory()


    const { initials } = useSelector(selectLoggedInUserInfo) || {}


    const signOutClick = () => {
        props.signOut();
        history.push("/")
    }


    return (
        // <Container>
        <Box>
            <Button className={classes.loginBtn} fullWidth={false} variant="contained" onClick={signOutClick}>Log Out</Button>
            <Button component={Link} to="/user" className={classes.linkText}>
                <Avatar className={classes.avatar}> {initials}</Avatar>
            </Button>
        </Box>
        // </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLInks)


const useStyles = makeStyles({
    loginForm: {
        maxWidth: "400px",
        margin: "auto",
        '& .MuiTextField-root': {
            marginBottom: '20px',
        },
    },
    loginBtn: {
        backgroundColor: "#94c93d",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#9bd934",
        }
    },
    linkText: {
        color: "#82b440",
        margin: "0px 8px",
        fontSize: "18px",
        textTransform: "none",
    },
    avatar: {
        backgroundColor: "#94c93d",
        color: "#fff",
        fontSize: "16px",
    }
});

