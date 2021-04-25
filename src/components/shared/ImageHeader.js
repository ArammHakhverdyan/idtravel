import React from 'react';
import { makeStyles, Container, Box, Typography } from '@material-ui/core/';


const ImageHeader = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.bgContact}
            style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className={classes.overlay}>
                <Container>
                    <Typography component="h1" variant="h2">
                        {props.text}
                    </Typography>
                </Container>
            </div>
        </Box>
    )
}

export default ImageHeader;


const useStyles = makeStyles({
    bgContact: {
        position: 'relative',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: "center",
        width: '100%',
        height: "55vh",
        textAlign: "center",
        color: "white",
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0 0 0 / 25%)',
        display: 'flex',
        alignItems: 'center',
    }
});
