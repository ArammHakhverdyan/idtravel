import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@material-ui/core';
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
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function DilijanHotels() {
    const classes = useStyles();
    const [star] = React.useState(5);
    const hotels = [
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/256/256913510.jpg",
            imgText: "complex",
            hotelName: "DiliJazz Hotel & Restaurant",
            location: "1/1 Teghut 2nd Street, 3902 Dilijan, Armenia",
            describtion: <p>DiliJazz Hotel & Restaurant features a restaurant, bar, a shared lounge and garden in Dilijan. With free WiFi, this 4-star hotel offers a 24-hour front desk and room service. The hotel has family rooms.
            All units in the hotel are equipped with a flat-screen TV with satellite channels. At DiliJazz Hotel & Restaurant, each room includes air conditioning and a private bathroom.
            A continental breakfast is available daily at the accommodation.
            DiliJazz Hotel & Restaurant offers a barbecue. You can play table tennis at the hotel, and the area is popular for hiking.
            Tsaghkadzor is 46 km from DiliJazz Hotel & Restaurant. The nearest airport is Zvartnots International Airport, 83 km from the accommodation.
            Couples particularly like the location — they rated it 9.7 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 52,800",
            includes: "Includes taxes and charges"
            //[star]: React.useState(4)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/563/56357201.jpg",
            imgText: "complex",
            hotelName: "Tufenkian Old Dilijan Complex",
            location: "Sharambeyan Street, 3901 Dilijan, Armenia",
            describtion: <p>With a façade featuring exposed stone and wood, this hotel is located in Sharambeyan Street, in the historic district of Dilijan. All rooms at Tufenkian feature 19th-century décor and a flat-screen satellite TV.
            Room fittings at the Tufenkian Old Dilijan Complex include hand-made wooden furniture, antique wardrobes and hand-woven carpets. Each has tiled floors, heating and a private bathroom with free toiletries. The suites also include a separate seating area and spacious terrace overlooking Dilijan.
            A buffet breakfast is provided daily. Armenian specialities are served in elegant Haykanoush restaurant, where the traditional carpets contrast with the modern furniture and chandeliers. The Armenian bakery provides outdoor seating under a canopy.
            Tufenkian Complex offers free Wi-Fi in public areas and an on-request shuttle service. Dilijan National Park, with its rich birdlife, is 8 km away.
            Couples particularly like the location — they rated it 9.0 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 30,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(3)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/113/113555275.jpg",
            imgText: "complex",
            hotelName: "Guest house Dilijan Orran",
            location: "str. Hovsepyan 26, 0010 Dilijan, Armenia",
            describtion: <p>Guest house Dilijan Orran has a restaurant, bar, a shared lounge and garden in Dilijan. Among the facilities at this property are a shared kitchen and room service, along with free WiFi throughout the property. There is free private parking and the property offers paid airport shuttle service.
            All guest rooms come with a microwave, fridge, a kettle, a hot tub, a hairdryer and a desk. At the guest house all rooms include a flat-screen TV, a private bathroom, and a patio with a garden view.
            Continental and vegetarian breakfast options are available every morning at Guest house Dilijan Orran.
            The accommodation offers a barbecue.
            The nearest airport is Zvartnots International Airport, 79 km from Guest house Dilijan Orran.
            Couples particularly like the location — they rated it 8.2 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 21,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(3)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/638/63886945.jpg",
            imgText: "complex",
            hotelName: "ECO GARDEN",
            location: "Kamo Street 146, 3741 Dilijan, Armenia",
            describtion: <p>Surrounded by the pine forest on the bank of the river, Villa Jrvezh offers accommodation in Dilijan, a 30-minute drive to Lake Sevan. The guest house has a terrace and a sun terrace, and guests can enjoy a meal at the restaurant or a drink at the bar. Lake Parz is a 20-minute drive away.
            All rooms are equipped with a flat-screen TV. Extras include free toiletries and a hair dryer. A TV is provided.
            Guests can enjoy national cuisine, made from ecological products from local villages. A free shuttle to the city centre is offered, as well as tour desk services. One of the popular activities around area is hiking across Transcaucasian Trail and feeding red deer in breeding centre.
            Couples particularly like the location — they rated it 8.8 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 16,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(0)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/265/265173007.jpg",
            imgText: "complex",
            hotelName: "Nran Hatik",
            location: "Myasnikyan St. 12/3, 3906 Dilijan, Armenia",
            describtion: <p>
                Located in Dilijan, Nran Hatik features a bar, shared lounge, garden, and free WiFi. Featuring family rooms, this property also provides guests with a barbecue.
            Private parking can be arranged at an extra charge.
            At the guest house each room includes a flat-screen TV, a private bathroom, and a balcony with a mountain view.
            Guests at Nran Hatik can enjoy a continental breakfast.
            The accommodation offers a terrace.
            The nearest airport is Zvartnots International Airport, 76 km from Nran Hatik.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 13,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(0)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/150/150923093.jpg",
            imgText: "complex",
            hotelName: "Ojakh",
            location: "Miasnikian street house number 5, 3906 Dilijan, Armenia",
            describtion: <p>
                Situated in Dilijan, Ojakh has a garden. All rooms boast a kitchenette and a shared bathroom. There is a terrace and guests can make use of free WiFi and free private parking.
            All rooms will provide guests with a fridge.
            The nearest airport is Zvartnots International Airport, 78 km from the guest house.
            Couples particularly like the location — they rated it 8.1 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 7,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(0)
        },
        

    ]
    return (
        <div className={classes.root}>
            {hotels.map((value) => (
                <Paper key={value} className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                            <a href="https://www.booking.com/hotel/am/erebuni.en-gb.html?aid=303948;label=am-tHLgdXFLQiRwatktLljN9gS393129324188%3Apl%3Ata%3Ap11020%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-186626296%3Alp9070053%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA;sid=2f4fd4b0e6850d4d4275cb9b25056e70;all_sr_blocks=32318902_298986384_0_1_0;checkin=2021-05-03;checkout=2021-05-04;dest_id=-2325645;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=10;highlighted_blocks=32318902_298986384_0_1_0;hpos=10;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=32318902_298986384_0_1_0__2600000;srepoch=1620033562;srpvid=7219418dcaad001a;type=total;ucfs=1&#hotelTmpl" target="_blank">
                                <img className={classes.img} alt={value.imgText} src={value.imgUrl} />
                                </a>
                            </ButtonBase>
                        </Grid>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Rating name="read-only" value={star} readOnly />
                                    </Box>
                                    <Typography gutterBottom style={{fontSize: "20px", color: "black"}}>
                                        {value.hotelName}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom style={{fontSize: "12px", color: "black"}}>
                                        {value.location}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <Accordion>
                                            <AccordionSummary
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className={classes.heading} style={{fontSize: "15px"}}>View describtion</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    {value.describtion}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>

                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography style={{fontSize: "12px", color: "black"}}>{value.night}</Typography>
                                <Typography style={{fontSize: "25px", color: "#94c93d"}}>{value.price}</Typography>
                                <Typography style={{fontSize: "10px", color: "black"}}>{value.includes}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
}
