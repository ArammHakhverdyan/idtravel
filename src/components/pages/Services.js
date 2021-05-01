import React from 'react';
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
    const servicesImg = "https://c4.wallpaperflare.com/wallpaper/348/100/853/nature-landscape-mist-trees-wallpaper-preview.jpg"
    const tourPackages = "https://c4.wallpaperflare.com/wallpaper/205/801/285/tunnel-arch-railway-bricks-wallpaper-preview.jpg"
    const hotelReservation = "https://www.studyandgoabroad.com/wp-content/uploads/2016/10/tourism.jpg"
    const transportImg = "https://c4.wallpaperflare.com/wallpaper/742/363/803/armenia-shaghap-wallpaper-preview.jpg"

    return (
        <>

            <CssBaseline />
            <ImageHeader text="Services" backgroundImage={servicesImg} />
            <Grid container justify="center" spacing={0} >
                <Card className={classes.root} variant="outlined">
                    <CardActionArea component={Link} to="/tours">

                        <CardMedia
                            className={classes.media}
                            image={tourPackages}
                            title="See Tours"

                        ></CardMedia>
                        <CardContent title="See Tours">

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
                        <CardMedia
                            className={classes.media}
                            image={hotelReservation}
                            title="Book Hotel"
                        />
                        <CardContent title="Book Hotel">
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
                        <CardMedia
                            className={classes.media}
                            image={transportImg}
                            title="See Vehicles"
                        />
                        <CardContent title="See Vehicles">
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
        </>
    );

}




export default Services