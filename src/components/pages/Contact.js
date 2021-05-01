import React, { useState } from 'react';
import { makeStyles, Container, Box, TextField, Button } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
import jermuk from '../../assets/images/jermuk.jpg';
import { db } from '../../config/config';

// const admin = require("firebase-admin");

// admin.firestore().collection('users').add({
//     to: 'arammyan@gmail.com',
//     message: {
//       subject: 'Hello from Firebase!',
//       html: 'This is an <code>HTML</code> email body.',
//     },
//   })

function Contact() {
    const classes = useStyles();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const sendMessage = async (event) => {
        event.preventDefault();
        try {
            const messages = await db.collection("messages");
            messages.doc("Zo7SYnSQek73Dbegy515: "  + contact.email).set(contact);
            
            } catch (e) {
            console.error("Error: ", e);
            }
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
            <ImageHeader text="Contact Us" backgroundImage={jermuk} />
            <Container>
                <Box py={5} className={classes.contactForm}>
                    <TextField fullWidth={true} id="name" label="Name" variant="outlined" onChange={onChange} />
                    <TextField fullWidth={true} id="email" label="Email" variant="outlined" onChange={onChange} />
                    <TextField fullWidth={true} id="phone" label="Phone Number" variant="outlined" onChange={onChange} />
                    <TextField fullWidth={true} id="message" label="Message" variant="outlined" multiline rows={4} onChange={onChange} />
                    <Button className={classes.sendBtn} fullWidth={true} variant="contained" onClick={sendMessage}>Send</Button>
                </Box>
            </Container>
        </>
    )
}

export default Contact;


const useStyles = makeStyles({
    contactForm: {
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
});
