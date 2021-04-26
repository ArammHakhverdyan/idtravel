import React from 'react';
import { Container, Box, Typography, CardActionArea } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CheckboxList from './HotelsList';
import Tours from './Tours';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ImageHeader from '../shared/ImageHeader';

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 700,
    },
});

function Services() {
    const classes = useStyles();
    const servicesImg = "https://asiatravelingexpert.com/images/slider/tour-and-services.jpg"
    const tourPackages = "https://www.southalltravel.co.uk/assets/images/tours/worldwide-tour-st.jpg"
    const hotelReservation = "https://lh3.googleusercontent.com/proxy/rXUUuDSdcji51IZ_EL8NuBKkWKdc04cZnaZPrPQvCghm8x1Tjh5Q09TehVuDA5KPdsPJTHxV307ezweR391dZwaIfAYuKHuIn6HE_q8iqQt2LmjNa2k_jNbpsPs3_JSe9lXtJ7w3CaqKqRDIWuypqqBu_8BQM5bWiYm3"
    const transportImg = "https://cdn5.vectorstock.com/i/1000x1000/76/94/transports-for-travel-vector-14267694.jpg"

    return (
        <>
            <CssBaseline />
            <ImageHeader text="Services" backgroundImage={servicesImg} />
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={tourPackages}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            TOUR PACKAGES
          </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            The company "Armenia Travel" offers travel packages designed by professionals,
                            including accommodation in hotels in Yerevan and other Armenian regions,
                            guide services, transfers on comfortable transport, meals,
                            entrance tickets to museums and much more.
                            We offer the following types of tours to Armenia:
        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            - Cultural and historical tours
<br />
- Religious and pilgrimage tours
<br />
- Archaeological tours
<br />
- Ecological tours
<br />
- Pedestrian programs - hiking, trekking Bicycle tours
<br />
- Combined tours in Armenia and other countries of the region (Georgia, Iran...)
<br />
- Gastronomic tours
<br />
- Wine tours
<br />
- Ski tours
<br />
- Educational tours
<br />
- Sports tours
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" component={Link} to="/tours">Our Tours --</Button>
                </CardActions>
            </Card>

            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={hotelReservation}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
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
                    <Button variant="contained" size="small" component={Link} to="/hotelsList">Send Request</Button>
                </CardActions>
            </Card>

            {/* /////////////////////////////////////// */}


            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={transportImg}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            TRANSPORT
          </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Here you can order airport-hotel-airport transfers,
                            transport for trips to Armenia. We offer modern cars and buses of various categories that meet all necessary safety requirements.
                            All vehicles provided by us are equipped with air conditioning. Our drivers are experienced professionals.
        </Typography>
                        <Typography variant="body2" component="p">
                            FOR RENT
        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" component={Link} to="/carRental">CAR RENTAL</Button>
                    <Button variant="contained" size="small" component={Link} to="/vehicles">Our vehicles</Button>
                </CardActions>
            </Card>
        </>
    );

}




export default Services