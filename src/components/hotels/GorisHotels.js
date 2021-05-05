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
        maxWidth: 800,
    },
    image: {
        width: "200px",
        height: "128px",
    }
}));

export default function GorisHotels() {

    const [url, setUrl] = useState(["", "", "", "", "", "", ""])

    useEffect(() => {
        const a = storageRef.child('Images/hotels/GorisHotels/header.jpg')
        const d = storageRef.child('Images/hotels/GorisHotels/1.jpg')
        const b = storageRef.child('Images/hotels/GorisHotels/2.jpg')
        const c = storageRef.child('Images/hotels/GorisHotels/3.jpg')
        const e = storageRef.child('Images/hotels/GorisHotels/4.jpg')
        const f = storageRef.child('Images/hotels/GorisHotels/5.jpg')
        const g = storageRef.child('Images/hotels/GorisHotels/6.jpg')


        const images = [a, b, c, d, e, f, g]

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
    // const [four] = React.useState(4)
    const [three] = React.useState(3)
    const [two] = React.useState(2)
    // const [one] = React.useState(1)
    const [zero] = React.useState(0)
    const background = url[0];
    const hotels = [
        {
            imgUrl: url[1],
            imgText: "complex",
            hotelName: "Diana Hotel",
            location: "Artsakhyan Highway 30, 3201 Goris, Armenia",
            describtion: "Located in the city of Goris, this hotel offers Wi-Fi, a swimming pool, and a games room. Free private parking and a fitness centre are available on site.Diana Hotel offers a variety of individually decorated rooms and suites. Each one includes a flat-screen TV, minibar, and private bathroom providing bathrobes and slippers.Guests are provided with a daily breakfast and can choose to enjoy the meal in their room. The hotel’s Restaurant Diana serves Armenian specialities in the evenings, and guests can also make use of on-site barbecue facilities.Yerevan Airport is 300 km away and shuttle services can be arranged for a fee.Couples particularly like the location — they rated it 8.8 for a two-person trip. We speak your language!",
            night: "1 night, 2 adults, All Inclusive",
            price: "AMD 27,000",
            includes: "Includes taxes and charges",
            star: three
        },
        {
            imgUrl: url[2],
            imgText: "complex",
            hotelName: "Goris Hotel",
            location: "Khorenatsi 53, 3201 Goris, Armenia",
            describtion: "Set in Goris, Goris Hotel features a restaurant, bar, garden, and free WiFi. This 4-star hotel offers room service. There is free private parking and the property offers paid airport shuttle service. Guests at the hotel can enjoy a buffet breakfast. Couples particularly like the location — they rated it 8.2 for a two-person trip. We speak your language!",
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 21,600",
            includes: "Includes taxes and charges",
            star: two
        },
        {
            imgUrl: url[3],
            imgText: "complex",
            hotelName: "Asour Hotel",
            location: "95/1 Mashtots Street, 3201 Goris, Armenia",
            describtion: "ASOUR HOTEL has a restaurant, bar, a shared lounge and garden in Goris. The hotel also features free WiFi and free private parking.At the hotel, rooms come with a patio. At ASOUR HOTEL rooms are fitted with a desk, a flat-screen TV and a private bathroom.The accommodation offers a continental or à la carte breakfast.Speaking Armenian, Russian, English and French at the 24-hour front desk, staff are always on hand to help. We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 15,000",
            includes: "Includes taxes and charges",
            star: zero
        },
        {
            imgUrl: url[4],
            imgText: "complex",
            hotelName: "Sofya",
            location: "165 Mashtots Street, 3201 Goris, Armenia",
            describtion: "Sofya features a restaurant, bar, a shared lounge and garden in Goris. Among the facilities at this property are a 24-hour front desk and a shared kitchen, along with free WiFi throughout the property. Private parking can be arranged at an extra charge. Guests at the hotel can enjoy a buffet or a à la carte breakfast. Sofya offers a terrace. Guests at the accommodation will be able to enjoy activities in and around Goris, like hiking. Sofya provides an ironing service, as well as business facilities like fax and photocopying.",
            night: "1 night, 2 adults",
            price: "AMD 13,500",
            includes: "Includes taxes and charges",
            star: zero
        },
        {
            imgUrl: url[5],
            imgText: "complex",
            hotelName: "Yeghevnut Hotel",
            location: "Yerevanskoe Shosse 7, 3201 Goris, Armenia",
            describtion: "Offering a 24-hour reception and rooms with flat-screen TVs, this hotel is situated in the east of Goris. Armenian specialities are served in the restaurant, and free Wi-Fi is available in public areas. The simple rooms at Egevnut Hotel feature a work desk, and a private bathroom with toiletries and slippers. Free tea and coffee is provided throughout the day. The Egevnut reception can organise tours of the area, as well as trips to the world’s longest cable car, 17 km from the hotel. A shuttle service is available to take guests to Yerevan Airport and Train Station, 240 km away.   Couples particularly like the location — they rated it 8.9 for a two-person trip. We speak your language!",
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 27,900",
            includes: "Includes taxes and charges",
            star: two
        },
        {
            imgUrl: url[6],
            imgText: "complex",
            hotelName: "Aregak B&B and Tours",
            location: "Getapny Str, 4 Bld,Apartment-16, 3201 Goris, Armenia",
            describtion: "Aregak B&B and Tours is situated in Goris and has a garden and a terrace. Among the facilities of this property are a restaurant, a 24-hour front desk and a shared kitchen, along with free WiFi. The accommodation features room service, a shared lounge and organising tours for guests.All units at the guest house are fitted with a seating area. The rooms will provide guests with a desk and a kettle. Aregak B&B and Tours offers a continental or vegetarian breakfast. The accommodation offers a children's playground. Couples particularly like the location — they rated it 9.9 for a two-person trip. We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 12,000",
            includes: "Includes taxes and charges",
            star: zero
        },


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
                                                {value.describtion}
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
