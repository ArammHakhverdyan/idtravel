import React from 'react';
import { makeStyles, Container, Box, TextField, Button } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
import jermuk from '../../assets/images/jermuk.jpg';

function Contact() {
    const classes = useStyles();

    return (
        <>
            <ImageHeader text="Contact Us" backgroundImage={jermuk} />
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
