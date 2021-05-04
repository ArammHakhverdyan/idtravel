import React from 'react';
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
import { ThreeSixtyTwoTone } from '@material-ui/icons';
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

export default function JermukHotels() {
    const classes = useStyles();
    const [five] = React.useState(5)
    const [four] = React.useState(4)
    const [three] = React.useState(3)
    const [two] = React.useState(2)
    const [one] = React.useState(1)
    const [zero] = React.useState(0)
    const background = "https://1.bp.blogspot.com/-MsP7KzMSIrs/X0c5y1nzD6I/AAAAAAAAgvU/n7ycyJdoUTUxEzt-hogUP0_e54mlR-8dQCNcBGAsYHQ/s1600/IMG_20171015_100443832_HDR-02.jpeg"
    const hotels = [
        {
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/210084287.jpg?k=555824d646ec630884eebc667d05572ff9887b62127dd337e09cbefb4583daea&o=&hp=1",
            imgText: "complex",
            hotelName: "Sanatory Moskva",
            location: "Melik - Adamyan Street 6, 3701 Jermuk, Armenia",
            describtion: "Surrounded by greenery, Sanatory Moskva is located in Jermuk. It features a spa centre with mineral baths and a variety of treatments. Free WiFi access is available in this resort.The classic-style rooms and suites come with a TV, a refrigerator and a balcony. Featuring a shower, private bathroom also comes with free toiletries. Extras include a desk.The on-site restaurant serves Armenian and European cuisine, and a variety of drinks is offered at the bar.At Sanatory Moskva you will find a 24-hour front desk, a garden and a terrace. Other facilities offered at the property include a ticket service, a tour desk and ski storage. An array of activities can be enjoyed on site or in the surroundings, including skiing, cycling and fishing. The property offers free parking.Jermuk Airport is 1 km away. Zvartnots International Airport is 180 km from the property.Couples particularly like the location — they rated it 8.6 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults, All Inclusive",
            price: "AMD 35,000",
            includes: "Includes taxes and charges",
            star: four
        },
        {
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155029490.jpg?k=68e8d50eebf853d90c1ed0ea99a93ae08fa4640b1f27485b5b4915c7e0864b61&o=&hp=1",
            imgText: "complex",
            hotelName: "Jermuk Verona Resort",
            location: "Shaumyan Street 9/1, 3701 Jermuk, Armenia",
            describtion: "Offering a restaurant, Jermuk Verona Resort is located in Jermuk. Free WiFi access is available. Each room here will provide you with a minibar. There is also a refrigerator. Featuring a shower, private bathroom also comes with a hairdryer and free toiletries. You can enjoy lake view and mountain view from the room. Extras include bed linen.At Jermuk Verona Resort you will find a 24-hour front desk, a garden and a terrace. Other facilities offered at the property include a shared lounge, a tour desk and ski storage. An array of activities can be enjoyed on site or in the surroundings, including skiing, fishing and hiking. The property offers free parking.Couples particularly like the location — they rated it 9.7 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 24,000",
            includes: "Includes taxes and charges",
            star: three
        },
        {
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/135742216.jpg?k=573f97b8aeda9b3220fd466cf594c6ab07b7aab1ad40e15fd6fdf737538915cc&o=&hp=1",
            imgText: "complex",
            hotelName: "Jermuk Olympia Sanatorium",
            location: "Shahumyan Street, 16, 3701 Jermuk, Armenia ",
            describtion: "Featuring a spa and wellness centre with a number of health related treatments available, Jermuk Olympia Sanatorium in Jermuk offers guests an on-site restaurant, a beauty shop, massage services, and free Wi-Fi.Rooms here offer a refrigerator, a flat-screen TV with satellite channels, and a private bathroom.Other property facilities include bicycle rentals, a games room, a library, a shared kitchen, a bar, a breakfast buffet, billiards, laundry services, meeting and banquet facilities, and a shuttle service.Jermuk Airport is 2.5 km away.Couples particularly like the location — they rated it 9.7 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 40,000",
            includes: "Includes taxes and charges",
            star: three
        },
        {
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/196771901.jpg?k=a98a31267892712f769d3530d1be98d7ee50560ff29c53daea73dc46d959e1a2&o=&hp=1",
            imgText: "complex",
            hotelName: "Grand Resort Jermuk",
            location: "7/5 Shahumyan Street, 3701 Jermuk, Armenia",
            describtion: "Grand Resort Jermuk features a sauna, indoor pool, fitness centre and hot tub. Free WiFi and free private parking are available on site.All rooms are air conditioned and offer a seating area, electric kettle, fridge and flat-screen TV. The bathrooms come with a hairdryer, bathrobes and slippers.Guests can dine in the hotel's restaurant and enjoy drinks at the bar. Other facilities include a 24-hour front desk, terrace and concierge service.Medical and spa procedures can be enjoyed at Wellness Clinic of the hotel for an additional price.Yerevan Train Station is 170 km away, and Zvartnots International Airport is 180 km from Grand Resort Jermuk.Couples particularly like the location — they rated it 9.7 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 35,000",
            includes: "Includes taxes and charges",
            star: three
        },
        {
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/80220247.jpg?k=72bfba4b2cb6246b83ed11124701a95a3572e34646e8567bb04b244467fb9d4a&o=&hp=1",
            imgText: "complex",
            hotelName: "Jermuk Villa Imperial",
            location: "Sarvorneri 5, 3702 Jermuk, Armenia",
            describtion: "Featuring free WiFi, Jermuk Villa Imperial offers accommodation in Jermuk. Free private parking is available on site. The accommodation is fitted with a flat-screen TV with cable channels. Some units include a dining area and/or balcony. There is also a kitchen, fitted with a fridge. A stovetop and kettle are also featured. Each unit is equipped with a private bathroom with slippers and free toiletries. Towels and bed linen are offered. Free use of bicycles is available at the property and the area is popular for cycling. Couples particularly like the location — they rated it 8.9 for a two-person trip. We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 20,000",
            includes: "Includes taxes and charges",
            star: one
        },
        {
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78220715.jpg?k=4c72c9d7d1d9d87303413ca2bdb745eb577865bac642daddcddb35b3e29d45e1&o=&hp=1",
            imgText: "complex",
            hotelName: "Hotel Central",
            location: "Shahumyan Street 12, 3701 Jermuk, Armenia ",
            describtion: "Hotel Central offers accommodation in Jermuk, 300 m from Lake Yotnaghbyur. Free private parking is available on site. Hotel Central features free WiFi throughout the property.Each room comes with a flat-screen TV. Some rooms include a seating area to relax in after a busy day. Extras include free toiletries and a hairdryer.There is a 24-hour front desk, hairdresser's, and gift shop at the property.Jermuk Airport is 2.5 km from Hotel Central.Couples particularly like the location — they rated it 9.2 for a two-person trip.We speak your language!",
            night: "1 night, 2 adults",
            price: "AMD 18,000",
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
