import React, { useEffect, useState } from 'react';
import { Typography, CardActionArea, Icon } from '@material-ui/core/';
import NavigationIcon from '@material-ui/icons/Navigation'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ImageHeader from '../shared/ImageHeader';
import Grid from '@material-ui/core/Grid';
import { storageRef } from '../../config/config';
const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 30,
    },
    media: {
        height: 300,
    },
    iconStyle: {
        float: 'right',
        color: "white",
    },
    button: {
        backgroundColor: "#94c93d",
        color: "#fff",
        margin: "10px auto",
        "&:hover": {
            backgroundColor: "#9bd934",
        }
    },
    pos: {
        textAlign: "left"
    }
});

function Services() {
    const classes = useStyles();
    // const background = 
    const [url, setUrl] = useState(["", "", "", ""])

    useEffect(() => {
        const a = storageRef.child('Images/services/service-header.jpg')
        const b = storageRef.child('Images/services/tour-packages.jpg')
        const c = storageRef.child('Images/services/hotel-reservation.jpg')
        const d = storageRef.child('Images/services/transport.jpg')
        const images = [a, b, c, d]

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
    }, [])
    const img1 = url[1]
    const img2 = url[2]
    const img3 = url[3]
    return (
        <>
            <CssBaseline />
            <ImageHeader text="Services" backgroundImage={url[0]} />
            <div style={{
                // backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <Grid container justify="center" spacing={0} >
                    <Card className={classes.root} variant="outlined">
                        <CardActionArea component={Link} to="/tours">

                            <CardMedia title="See Tours">
                                <img src={img1} className={classes.media} alt="services" />
                            </CardMedia>
                            <CardContent title="See Tours" style={{ height: "300px", overFlow: "hidden" }}>

                                <Typography gutterBottom variant="h5" component="h2">
                                    TOUR PACKAGES
                            </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    The company "ID Travel" offers travel packages designed by professionals,
                                    including accommodation in hotels in Yerevan and other Armenian regions,
                                    guide services, transfers on comfortable transport, meals,
                                    entrance tickets to museums and much more.
                                    We offer the following types of tours to Armenia:
                            </Typography>
                                <br />
                            </CardContent>

                        </CardActionArea>
                        <CardActions>
                            <Button
                                component={Link} to="/tours"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Our Tours
        <NavigationIcon className={classes.extendedIcon} />
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root} variant="outlined">
                        <CardActionArea component={Link} to="/hotelsList">
                            <CardMedia title="Book Hotel">
                                <img src={img2} className={classes.media} alt="services" />
                            </CardMedia>
                            <CardContent title="Book Hotel" style={{ height: "300px", overFlow: "hidden" }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    HOTEL RESERVATION
          </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    We have been working in the tourism market of Armenia for many years
                                    and we have concluded contracts at special prices with leading hotels in the country.
                                    Our experience and knowledge of the market allows us to professionally guided in the hotel industry of Armenia
                                    and recommend the best accommodation options in Yerevan and outside the capital.
                                    You can book through us one of the proposed accommodation options.
        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                component={Link} to="/contact"
                                variant="contained"
                                //color="primary"
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                            >
                                Send Request
      </Button>
                        </CardActions>
                    </Card>

                    {/* /////////////////////////////////////// */}


                    <Card className={classes.root} variant="outlined">
                        <CardActionArea component={Link} to="/vehicles">
                            <CardMedia title="See Vehicles">
                                <img src={img3} className={classes.media} alt="services" /> </CardMedia>
                            <CardContent title="See Vehicles" style={{ height: "300px", overFlow: "hidden" }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    TRANSPORT
          </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Here you can order airport-hotel-airport transfers,
                                    transport for trips to Armenia. We offer modern cars and buses of various categories that meet all necessary safety requirements.
                                    All vehicles provided by us are equipped with air conditioning. Our drivers are experienced professionals.
        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Button variant="contained" size="small" component={Link} to="/carRental">CAR RENTAL</Button> */}
                            <Button
                                component={Link} to="/vehicles"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Our Vehicles
        <NavigationIcon className={classes.extendedIcon} />
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </div>
        </>
    );

}

export default Services;