import React, { useEffect, useState } from 'react';
import { makeStyles, Container, Box, TextField, Button } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
import jermuk from '../../assets/images/jermuk.jpg';
import { db, storageRef } from '../../config/config';



function Contact() {
    const classes = useStyles();
    const [url, setUrl] = useState("")

    useEffect(() => {
        const jermuk = storageRef.child('Images/jermuk.jpg')

        jermuk.getDownloadURL().then((downloadURL) => {
            setUrl(() => {
                const newSt = downloadURL
                return newSt;
            });

        }).catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
            }
        })
    })



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
            messages.doc("Zo7SYnSQek73Dbegy515: " + contact.email).set(contact);

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
            <ImageHeader text="Contact Us" backgroundImage={url} />
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
