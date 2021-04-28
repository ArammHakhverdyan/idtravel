import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { auth, db } from '../../config/config';
import { selectLoggedInUserId } from '../../redux/selectors';
import userImg from '../img/user.png';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { save } from '../../actions/AuthActions';



const User = (props) => {
    const classes = useStyles()
    const uId = useSelector(selectLoggedInUserId);
    const [fullName, setFullName] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [value, setValue] = useState({})
    const [value, setValue] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    useEffect(() => {
        if (uId) {
            const docRef = db.collection('users').doc(uId);
            docRef.get().then((doc) => {
                setFullName(doc.data()?.firstName + " " + doc.data()?.lastName);
                // setFirstName(doc.data()?.firstName);
                // setLastName(doc.data()?.lastName);
                // setEmail(doc.data()?.email)
            })
        }
    }, [uId])

    // const firstNameChange = (e) => {
    //     setFirstName(e.target.firstName);
    // }
    // const lastNameChange = (e) => {
    //     setLastName(e.target.lastName);
    // }
    // const emailChange = (e) => {
    //     setEmail(e.target.email);
    // }

    const handleChange = (e) => {
        setValue({
            ...value.firstName,
            [e.target.id]: e.target.state
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.save(value)
    }



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.save(firstName)
    // }

    if (auth.loggedInUser === null) return <Redirect to='/' />
    return (
        <div className="backg-img">
            <Card className={classes.userImgCont} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image='../img/user.png'
                    />
                    <CardContent>
                        <img className={classes.userImg} src={userImg} />
                        <Typography>
                            {fullName}
                        </Typography>
                        {/* </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>

            <List component="nav" aria-label="main mailbox folders">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="History" />
                        </ListItem>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You haven't booked any tour yet
                            </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box py={3} textAlign="center" className={classes.loginForm}>
                            <TextField fullWidth={true} id="name" label="Name" value={value.firstName} onChange={handleChange} variant="outlined" />
                            <TextField fullWidth={true} id="surname" label="Surname" value={value.lastName} variant="outlined" onChange={handleChange} />
                            <TextField fullWidth={true} id="email" label="Email" value={value.email} variant="outlined" onChange={handleChange} />
                            <Button className={classes.loginBtn} fullWidth={false} variant="contained" onClick={handleSubmit}>Save</Button>
                        </Box>
                    </AccordionDetails>
                    <Divider />
                </Accordion>
            </List>
        </div>

    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        save: (creds) => dispatch(save(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        // authError: state.auth.authError
    }
}


export default connect(mapDispatchToProps, mapStateToProps)(User)



const useStyles = makeStyles({
    loginForm: {
        fontSize: "32px",
        '& .MuiTextField-root': {
            marginBottom: '20px',
        },
    },
    loginBtn: {
        backgroundColor: "#94c93d",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#8cc927",
        }
    },
    userImg: {
        width: "150px",
        height: "150px"
    },
    userImgCont: {
        width: "200px",
        height: "200px",
        margin: "10px"
    },
    root: {
        display: "flex",
        justifyContent: "space-around"
    }

});