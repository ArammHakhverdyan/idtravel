import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUserId, selectLoggedInUserInfo } from '../../redux/selectors';
import userImg from '../img/user.png';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { updateLoggedInUserInfo } from '../../actions/AuthActions';



const User = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const uId = useSelector(selectLoggedInUserId);
    const userInfo = useSelector(selectLoggedInUserInfo) || {};
    const [fullName, setFullName] = useState(`${userInfo.firstName} ${userInfo.lastName}`);
    const [firstName, setFirstName] = useState(userInfo.firstName || "");
    const [lastName, setLastName] = useState(userInfo.lastName || "");
    const [email, setEmail] = useState(userInfo.email || "");

    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (uId) {
            const newInfo = { email, firstName, lastName, initials: firstName[0] + lastName[0] }
            dispatch(updateLoggedInUserInfo(newInfo))
        }
    }


    return (
        <div className="backg-img">
            <Card className={classes.userImgCont} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image='../img/user.png'
                    />
                    <CardContent>
                        <img className={classes.userImg} src={userImg} alt="" />
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
                            <TextField id="name" label="Name" value={firstName} onChange={firstNameChange} variant="outlined" />
                            <TextField id="surname" label="Surname" value={lastName} variant="outlined" onChange={lastNameChange} />
                            <TextField id="email" label="Email" value={email} variant="outlined" onChange={emailChange} />
                            <Button className={classes.loginBtn} fullWidth={false} variant="contained" onClick={handleSubmit}>Save</Button>
                        </Box>
                    </AccordionDetails>
                    <Divider />
                </Accordion>
            </List>
        </div>

    )
}



export default User



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