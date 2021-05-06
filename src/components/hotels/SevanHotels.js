import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { storageRef } from '../../config/config';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: "1000px",
        marginTop: "15px"
    },
    image: {
        width: "200px",
        height: "128px",
    }
}));

export default function SevanHotels() {

    const [url, setUrl] = useState(["", "", "", "", "", ""])

    useEffect(() => {
        const a = storageRef.child('Images/hotels/SevanHotels/header.jpg')
        const d = storageRef.child('Images/hotels/SevanHotels/1.jpg')
        const b = storageRef.child('Images/hotels/SevanHotels/2.jpg')
        const c = storageRef.child('Images/hotels/SevanHotels/3.jpg')
        const e = storageRef.child('Images/hotels/SevanHotels/4.jpg')
        const f = storageRef.child('Images/hotels/SevanHotels/5.jpg')



        const images = [a, b, c, d, e, f]

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
                    default:
                        return
                }
            })
        )
    }, [])




    const classes = useStyles();
    // const [five] = React.useState(5)
    const [four] = React.useState(4)
    const [three] = React.useState(3)
    const [two] = React.useState(2)
    // const [one] = React.useState(1)
    const [zero] = React.useState(0)
    const background = url[0]
    const hotels = [
        {
            imgUrl: url[1],
            imgText: "complex",
            hotelName: "Tsovasar Family Rest Complex",
            location: "Gegharkunik, Norashen, Armenia, 0411 Sevan, Armenia",
            description: "Tsovasar Family Rest Complex is located in Sevan and offers self-catering accommodations with an access to a private beach area and free WiFi. It is only a few steps away from Sevan Lake. All of the accommodations at Tsovasar Family Rest Complex offer a seating area with a cable flat-screen TV and a DVD player. The bathroom includes a bath or shower and a hairdryer. The kitchen is furnished with a microwave, refrigerator and stovetop. Meals can be taken in the dining area. Some have a terrace with outdoor furniture. Extra facilities include a tour desk, a shared barbecue, luggage storage and a children’s playground. The property offers free parking. The centre of Tsovazard is located 1 km away and Norashen is 4 km from this apartHotel. Zvartnots Airport is 84 km away. Couples particularly like the location — they rated it 9.1 for a two-person trip. We speak your language!",
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 44,000",
            includes: "Includes taxes and charges",
            star: four
        },
        {
            imgUrl: url[2],
            imgText: "complex",
            hotelName: "Blue Sevan Hotel",
            location: "Gegharkunik Marz Chambarak, 0004 Sevan, Armenia",
            description: "Offering a restaurant and a private beach area, Blue Sevan Hotel is located 2,000 m above sea level, right by Lake Sevan. Free private parking is available.The rooms feature a flat-screen TV and a fridge. The bathroom comes with a hairdryer and free toiletries.At Blue Sevan Hotl you will find a garden, barbecue facilities and a terrace. Other facilities offered at the property include a nightclub, grocery deliveries and water sports facilities. An array of activities can be enjoyed on site or in the surroundings, including cycling and horse riding.Zvartnots International Airport is Yerevan is 98.5 km away.Couples particularly like the location — they rated it 8.5 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 20,000",
            includes: "Includes taxes and charges",
            star: three
        },
        {
            imgUrl: url[3],
            imgText: "complex",
            hotelName: "Edem Sevan",
            location: "M14 ,7KM, 1512 Sevan, Armenia",
            description: "Facing the beachfront in Sevan, EDEM SEVAN has a garden and a private beach area. Among the facilities of this property are a restaurant, a 24-hour front desk and a shared kitchen, along with free WiFi. There is free private parking and the property features paid airport shuttle service.All rooms at the hotel are fitted with a seating area, a flat-screen TV with satellite channels and a private bathroom with a hairdryer and a bath or shower. All units will provide guests with a desk and a kettle.A à la carte breakfast is available each morning at EDEM SEVAN.The accommodation offers a terrace. You can play table tennis at EDEM SEVAN.Tsaghkadzor is 40 km from the hotel. The nearest airport is Zvartnots International Airport, 74 km from EDEM SEVAN.Couples particularly like the location — they rated it 9.6 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 21,600",
            includes: "Includes taxes and charges",
            star: three
        },
        {
            imgUrl: url[4],
            imgText: "complex",
            hotelName: "Sevan Writers House",
            location: "Peninsula, 1505 Sevan, Armenia",
            description: "Facing the beachfront in Sevan, Sevan Writers House features a garden and a terrace. Among the facilities of this property are a restaurant, room service and a shared lounge, along with free WiFi. Free private parking is available and the hostel also offers bike hire for guests who want to explore the surrounding area.At the hostel, every room includes a balcony with a lake view.Sevan Writers House offers a continental or buffet breakfast.You can play table tennis at the accommodation, and car hire is available.Tsaghkadzor is 29 km from Sevan Writers House. The nearest airport is Zvartnots International, 69 km from the hostel, and the property offers a paid airport shuttle service.Couples particularly like the location — they rated it 9.2 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 15,000",
            includes: "Includes taxes and charges",
            star: two
        },
        {
            imgUrl: url[5],
            imgText: "complex",
            hotelName: "Mountain Lake Villa B&B",
            location: "Ashota erkata 29, 1502 Sevan, Armenia",
            description: "Situated in Sevan, 22 km from Tsaghkadzor, Mountain Lake Villa B&B features free bikes and free WiFi.A patio with garden views is offered in all units.Guests at the bed and breakfast can enjoy a continental or a vegetarian breakfast.Mountain Lake Villa B&B offers a terrace.After a day of hiking or cycling, guests can relax in the garden or in the shared lounge area.The nearest airport is Zvartnots International, 63 km from the accommodation, and the property offers a paid airport shuttle service.Couples particularly like the location — they rated it 8.6 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 8,000",
            includes: "Includes taxes and charges",
            star: zero
        }

    ]
    return (
        <>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className={classes.root}>
                    <h1 style={{ textAlign: "center" }}>We cooperate with the following hotels:</h1>
                    {hotels.map((value, index) => (
                        <Paper key={index} className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className="hotelImg" alt={value.imgText} src={value.imgUrl} />
                                    </ButtonBase>
                                </Grid>

                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Box component="fieldset" mb={3} borderColor="transparent">
                                                <Rating name="read-only" value={value.star} readOnly />
                                            </Box>
                                            <Typography gutterBottom style={{ fontSize: "20px", color: "black" }}>
                                                {value.hotelName}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom style={{ fontSize: "12px", color: "black" }}>
                                                {value.location}
                                            </Typography>
                                            <ReactReadMoreReadLess
                                                charLimit={200}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                                readMoreClassName="read-more-less--more"
                                                readLessClassName="read-more-less--less"
                                            >
                                                {value.description}
                                            </ReactReadMoreReadLess>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ fontSize: "12px", color: "black" }}>{value.night}</Typography>
                                        <Typography style={{ fontSize: "25px", color: "#94c93d" }}>{value.price}</Typography>
                                        <Typography style={{ fontSize: "10px", color: "black" }}>{value.includes}</Typography>
                                    </Grid>

                                    <Grid item style={{ marginTop: "15%" }}>
                                        <Grid item style={{ width: "70px" }}>
                                            <ButtonBase component={Link} to="/contact">
                                                <Typography variant="caption" display="block">
                                                    For details please contact with us
                                </Typography>


                                                <ArrowForwardIosIcon></ArrowForwardIosIcon>
                                            </ButtonBase>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </div>
            </div>
        </>
    );
}
