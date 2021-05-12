import React, { useEffect, useState } from 'react';
import { makeStyles, Container, Box, TextField, Button, Grid } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
import { db } from '../../config/config';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/core/Alert';
import SimpleMap from './Map';
import { storageRef } from '../../config/config';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  contactForm: {
    float: "right",
    marginRight: "150px",
    maxWidth: "400px",
    margin: "auto",
    '& .MuiTextField-root': {
      marginBottom: '20px',
    },
  },
  sendBtn: {
    backgroundColor: "#94c93d",
    color: "#fff",
    '&:hover': {
      backgroundColor: "#8cc927",
    }
  },
  alert: {
    width: '100%',
  },
}));


function Contact() {
  const classes = useStyles();
  const [url, setUrl] = useState(["", ""])
  const [open, setOpen] = React.useState(false);
  const [openErrorButton, setOpenErrorButton] = React.useState(false)
  const [snackPack, setSnackPack] = React.useState([]);
  const [messageInfo, setMessageInfo] = React.useState(undefined);


  useEffect(() => {

    const a = storageRef.child('Images/Contact/header.jpg')
    const b = storageRef.child('Images/Contact/Sevan-5.jpg');
    const images = [a, b]

    images.map((item, index) =>
      item.getDownloadURL().then((downloadURL) => {
        setUrl((old) => {
          const newSt = [...old];
          newSt[index] = downloadURL;
          return newSt;
        });
      }).catch((error) => {
        switch (error.code) {
          case 'storage/object-not-found':
            break;
          default: {
            return
          }
        }
      })
    )
  }, []);

  // const background = url[1]

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

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


  const sendMessage = (event, message) => {
    if (contact.name && contact.email && contact.phone && contact.message) {
      event.preventDefault();
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
      try {
        const messages = db.collection("messages");
        messages.doc("From: " + contact.email).set(contact);
      } catch (e) {
        console.error("Error: ", e);
      }
      setOpen(true);
      setContact({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } else {
      setOpenErrorButton(true)
    }
    //setOpen(true);


  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenErrorButton(false);
  }

  const onChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;

    setContact(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <>
      <ImageHeader text="Contact Us" backgroundImage={url[0]} />
      <div style={{
        // backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#404040",
      }}>
        <Container>
          <Box py={5} className={classes.contactForm}>
            <TextField style={{ backgroundColor: "white" }} value={contact.name} fullWidth={true} id="name" label="Name" variant="outlined" onChange={onChange} />
            <TextField style={{ backgroundColor: "white" }} value={contact.email} fullWidth={true} id="email" label="Email" variant="outlined" onChange={onChange} />
            <TextField style={{ backgroundColor: "white" }} value={contact.phone} fullWidth={true} id="phone" label="Phone Number" variant="outlined" onChange={onChange} />
            <TextField style={{ backgroundColor: "white" }} value={contact.message} fullWidth={true} id="message" label="Message" variant="outlined" multiline rows={4} onChange={onChange} />
            <Button className={classes.sendBtn} fullWidth={true} variant="contained" onClick={sendMessage}>Send</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" className={classes.alert}>Your message sent successfully</Alert>
            </Snackbar>
            <Snackbar open={openErrorButton} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                Fields can't be blank
                            </Alert>
            </Snackbar>
          </Box>
          <Grid item style={{ float: "left" }}>
            <SimpleMap></SimpleMap>
          </Grid>
        </Container>
      </div>
    </>
  )
}
export default Contact;