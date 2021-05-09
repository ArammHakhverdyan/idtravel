import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, List, makeStyles, Snackbar, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUserId, selectLoggedInUserInfo } from '../../redux/selectors';
import userImg from '../../assets/images/user.png';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import { updateLoggedInUserInfo } from '../../actions/AuthActions';
import MuiAlert from '@material-ui/lab/Alert';




const User = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const uId = useSelector(selectLoggedInUserId);
  const userInfo = useSelector(selectLoggedInUserInfo) || {};
  const [fullName] = useState(`${userInfo.firstName} ${userInfo.lastName}`);
  const [firstName, setFirstName] = useState(userInfo.firstName || "");
  const [lastName, setLastName] = useState(userInfo.lastName || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [expanded, setExpanded] = React.useState(false);
  const [openSuccessButton, setOpenSuccessButton] = React.useState(false);
  const [openErrorButton, setOpenErrorButton] = React.useState(false)
  const [openWarningButton, setWarningButton] = React.useState(false)
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  }
  const emailChange = (e) => {
    setEmail(e.target.value);
  }



  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);


  const handleSubmit = (e, message) => {
    e.preventDefault();
    if (uId) {
      const newInfo = { email, firstName, lastName, initials: firstName[0] + lastName[0] }
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
      if (userInfo.firstName === newInfo.firstName && userInfo.email === newInfo.email && userInfo.lastName === newInfo.lastName) {
        setOpenErrorButton(true)
      } else if (newInfo.firstName === "" || newInfo.email === "" || newInfo.lastName === "") {
        setWarningButton(true)
      } else {
        setOpenSuccessButton(true);
        dispatch(updateLoggedInUserInfo(newInfo));

      }
    }
  }




  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {
      return;
    }
    setOpenErrorButton(false);
    setOpenSuccessButton(false)
    setWarningButton(false)
  };
  const handleChange = (panel) => (event, isExpanded) => {


    setExpanded(isExpanded ? panel : false);
  };



  return (
    <div className="backg-img">
      <Box className={classes.user} color="white" bgcolor="" p={1}>
        <img className={classes.userImg} src={userImg} alt="" />
        <Typography className="text" component={"span"}>
          <div style={{ textAlign: "center" }}>{fullName}</div>

        </Typography>
      </Box>

      <List component="nav" className={classes.accordionItems}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<InboxIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading} component={"span"}>History</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
              You haven't booked any tour yet
                    </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<SettingsIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} component={"span"}>Settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box py={3} className={classes.loginForm}>
              <TextField id="name" fullWidth label="Name" value={firstName} onChange={firstNameChange} variant="outlined" />
              <TextField id="surname" fullWidth label="Surname" value={lastName} variant="outlined" onChange={lastNameChange} />
              <TextField id="email" fullWidth label="Email" value={email} variant="outlined" onChange={emailChange} />
              <Button className={classes.loginBtn} fullWidth={false} variant="contained" onClick={handleSubmit}>Save</Button>
            </Box>

            <Snackbar open={openSuccessButton} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" className={classes.alert}>
                Settings changed!
                            </Alert>
            </Snackbar>
            <Snackbar open={openErrorButton} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" className={classes.alert}>
                You haven't changed anything yet!!!
                            </Alert>
            </Snackbar>
            <Snackbar open={openWarningButton} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="warning" className={classes.alert}>
                The fields can't be blank!!!
                            </Alert>
            </Snackbar>
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
  alert: {
    width: '100%',
  },
  loginBtn: {
    backgroundColor: "#94c93d",
    color: "#fff",
    '&:hover': {
      backgroundColor: "#8cc927",
    }
  },
  userImg: {
    width: "200px",
    height: "200px",
    padding: "30px",
  },
  userImgCont: {
    width: "200px",
    height: "200px",
    margin: "10px 50px",
  },
  root: {
    display: "flex",
    justifyContent: "space-around"
  },
  user: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  accordionItems: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }

});