import React, { useEffect, useState } from 'react';
import { makeStyles, Container, Box, TextField, Button, Grid } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
//import jermuk from '../../assets/images/jermuk.jpg';
import { db } from '../../config/config';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SimpleMap from './Map';
//import { Map, GoogleApiWrapper } from 'google-maps-react';
import { storageRef } from '../../config/config';


// admin.firestore().collection('messages').add({
//     to: 'arammyan@gmail.com',
//     message: {
//       subject: 'Hello from Firebase!',
//       html: 'This is an <code>HTML</code> email body.',
//     },
//   })
/*const useStyles = makeStyles({
    
    },
});*/

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    contactForm: {
        //backgroundColor: "rgb(185 178 178 / 60%)",
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
}));


function Contact() {
    const classes = useStyles();
    const background ="https://wallpaperaccess.com/full/3200384.jpg"
    const [url, setUrl] = useState("")
    const [open, setOpen] = React.useState(false);
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
                default: {
                    return
                }
            }
        })
    }, [])



    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const sendMessage = async (event) => {
        //setOpen(true);
        event.preventDefault();
        try {
            const messages = await db.collection("messages");
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
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);

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
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <Container>
                <Box py={5} className={classes.contactForm}>
                    <TextField style={{backgroundColor: "white"}} fullWidth={true} id="name" label="Name" variant="outlined" onChange={onChange} />
                    <TextField style={{backgroundColor: "white"}} fullWidth={true} id="email" label="Email" variant="outlined" onChange={onChange} />
                    <TextField style={{backgroundColor: "white"}} fullWidth={true} id="phone" label="Phone Number" variant="outlined" onChange={onChange} />
                    <TextField style={{backgroundColor: "white"}} fullWidth={true} id="message" label="Message" variant="outlined" multiline rows={4} onChange={onChange} />
                    <Button className={classes.sendBtn} fullWidth={true} variant="contained" onClick={sendMessage}>Send</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">Your message sent successfully</Alert>
                    </Snackbar>
                    
                </Box>
                <Grid item style={{float: "left"}}>
                    <SimpleMap></SimpleMap>
                </Grid>
            </Container>
            </div>
        </>
    )
}
export default Contact;