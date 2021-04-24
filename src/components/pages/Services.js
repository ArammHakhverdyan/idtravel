import React from 'react';
import { Container, Box, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CheckboxList from './HotelsList';
import Tours from './Tours';
import { Link } from 'react-router-dom';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Services() {
    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Tour Packages
        </Typography>
                    {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
                    <Typography className={classes.pos} color="textSecondary">
                        The company "Armenia Travel" offers travel packages designed by professionals, including accommodation in hotels in Yerevan and other Armenian regions, guide services, transfers on comfortable transport, meals, entrance tickets to museums and much more. We offer the following types of tours to Armenia:
        </Typography>
                    <Typography variant="body2" component="p">
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
- Combined tours in Armenia and other countries of the region (Georgia, Turkey, Iran)
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
          {/* <br />
          {'"a benevolent smile"'} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" component={Link} to="/tours">Our Tours --</Button>
                </CardActions>
            </Card>

            {/* ----------- */}

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        HOTEL RESERVATION
        </Typography>
                    {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
                    <Typography className={classes.pos} color="textSecondary">
                        We have been working in the tourism market of Armenia for many years and we have concluded contracts at special prices with leading hotels in the country. Our experience and knowledge of the market allows us to professionally guided in the hotel industry of Armenia and recommend the best accommodation options in Yerevan and outside the capital.  You can book through us one of the proposed accommodation options.
        </Typography>
                    {/* <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" component={Link} to="/hotelsList">Send Request</Button>
                </CardActions>
            </Card>

            {/* /////////////////////////////////////// */}
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        TRANSPORT
        </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Here you can order airport-hotel-airport transfers, transport for trips to Armenia. We offer modern cars and buses of various categories that meet all necessary safety requirements. All vehicles provided by us are equipped with air conditioning. Our drivers are experienced professionals.
        </Typography>
                    <Typography variant="body2" component="p">
                        FOR RENT
        </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" component={Link} to="/carRental">CAR RENTAL</Button>
                    <Button variant="contained" size="small" component={Link} to="/vehicles">Our vehicles</Button>
                </CardActions>
            </Card>
        </>
    );

}




export default Services