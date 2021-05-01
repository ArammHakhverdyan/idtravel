import React, { useEffect, useState } from 'react';
import { makeStyles, Container, Box, TextField, Button } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
import jermuk from '../../assets/images/jermuk.jpg';
import { storageRef } from '../../config/config';

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



    return (
        <>
            <ImageHeader text="Contact Us" backgroundImage={url} />
            <Container>
                <Box py={5} className={classes.contactForm}>
                    <TextField fullWidth={true} label="Name" variant="outlined" />
                    <TextField fullWidth={true} label="Email" variant="outlined" />
                    <TextField fullWidth={true} label="Phone Number" variant="outlined" />
                    <TextField fullWidth={true} label="Message" variant="outlined" multiline rows={4} />
                    <Button className={classes.sendBtn} fullWidth={true} variant="contained">Send</Button>
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
