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

export default function TsaghkadzorHotels() {
    const classes = useStyles();
    const [star] = React.useState(5);
    const hotels = [
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/222/222814670.jpg",
            imgText: "complex",
            hotelName: "Tsaghkadzor Marriott Hotel",
            location: "Tandzaghpyur Street 2 4/1, 2310 Tsaghkadzor, Armenia",
            describtion: <p>Located on the Armenian ski resort of Tsaghkadzor, the Marriott Hotel offers modern rooms, a fitness centre and indoor swimming pool. Guests can store their ski equipment in the hotel.
            Some rooms looks out over the Kecharis Church. All rooms come with a minibar and a flat-screen TV with satellite channels. The private bathrooms come with slippers.
            Guests can dine at one of the the restaurants and 4 bars, which serve a variety of cuisines ranging from light snacks to à-la-carte dining. There is a juice bar, as well as a bar serving brandies and cigars.
            After skiing in winter or hiking during the summer, guests can relax in the spa and wellness centre and sauna.
            The 10th-century Bjni Fortress is 22 km from Tsaghkadzor Marriott Hotel. Zvartnots International Airport is 69 km away and free private parking is available.
            Couples particularly like the location — they rated it 9.1 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 52,000",
            includes: "Includes taxes and charges"
            //[star]: React.useState(5)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/117/117775022.jpg",
            imgText: "complex",
            hotelName: "Ararat Resort Tsaghkadzor",
            location: "Nazarbekyan 25/5, 0057 Yerevan, Armenia",
            describtion: <p>Offering a fitness and spa centre with a swimming pool, Ararat Resort Tsaghkadzor is located a 5-minute drive to the centre of Tsaghkadzor. Ski lifts are 3.5 km away. Ski pass vendor is available in the hotel. 
            Free private parking and free WiFi throughout the hotel are offered.
            Every room includes a flat-screen TV with satellite channels. Some units have a seating area where you can relax. The rooms come with a private bathroom fitted with a bidet. For your comfort, you will find bathrobes and slippers.
            Ararat Restaurant serves European cuisine. You can also have a drink at the on-site bar. The hotel offers free shuttle service. Concierge service, tour desk and ATM machine are featured on site.
            The area is popular for skiing and cycling. Hrazdan Train Station is 5 km away. The nearest airport is Zvartnots International Airport, 67 km from the property.
            Couples particularly like the location — they rated it 8.2 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 32,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(5)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/284/284844661.jpg",
            imgText: "complex",
            hotelName: "Kecharis Hotel and Resort",
            location: "Orbeli Brothers Street 20, 2310 Tsaghkadzor, Armenia",
            describtion: <p>Located just 4 minutes’ walk from the 11th-century Kecharis Monastery in Tsaghkadzor town, Hotel Kecharis features bowling and free Wi-Fi. Tsakhadzor Ski Lifts are 5 minutes’ drive away.
            Every room at the hotel is decorated in brown tones and includes a flat-screen TV. A minibar is provided in all rooms, and bathrooms have a shower.
            Kecharis Restaurant serves national and European cuisine, and stylish Kavkazskaya Plennitsa and Gentlemen of Fortune restaurants offer Caucasian dishes. Guests can relax in the Lounge cafe Capuccino.
            Guests of Kecharis can use a ski storage that is available on site.
            Yerevan city is 47 km from Hotel Kecharis, and Zvartnots Airport is 68 km away.
            Couples particularly like the location — they rated it 9.6 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 30,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(5)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/105/105191938.jpg",
            imgText: "complex",
            hotelName: "Hotel Edem",
            location: "19 Tandzaghbyur Street, 2310 Tsaghkadzor, Armenia",
            describtion: <p>Hotel Edem is located in Tsaghkadzor. Among the various facilities are a garden and ski storage space. 
            The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi.
            Guests at the hotel can enjoy a continental breakfast.
            The area is popular for skiing, and ski equipment hire is available at Hotel Edem.
            The nearest airport is Zvartnots International Airport, 50 km from the accommodation.
            Couples particularly like the location — they rated it 10 for a two-person trip.</p>,
            night: "1 night, 2 adults",
            price: "AMD 13,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(0)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/283/283675555.jpg",
            imgText: "complex",
            hotelName: "Alaska Resort",
            location: "Saralanji 53/1, 2310 Tsaghkadzor, Armenia",
            describtion: <p>
                Alaska Resort features a restaurant, bar, a shared lounge and garden in Tsaghkadzor. 
            Among the facilities at this property are room service and a concierge service, along with free WiFi throughout the property. 
            The accommodation provides a 24-hour front desk, a shared kitchen and currency exchange for guests.
            All units are equipped with a flat-screen TV with satellite channels, microwave, a kettle, a shower, a hairdryer and a wardrobe. 
            With a private bathroom equipped with a bath and free toiletries, rooms at the hotel also offer a garden view. All guest rooms will provide guests with a fridge.
            A continental breakfast is available daily at Alaska Resort.
            The accommodation offers a children's playground. The area is popular for skiing and cycling, and car hire is available at Alaska Resort.
            The nearest airport is Zvartnots International, 52 km from the hotel, and the property offers a paid airport shuttle service.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 21,600",
            includes: "Includes taxes and charges",
            //[star]: React.useState(0)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/242/242596691.jpg",
            imgText: "complex",
            hotelName: "Hotel - Saya",
            location: "Grigor Magistros Street 1/1, 2310 Tsaghkadzor, Armenia",
            describtion: <p>
                Located in Tsaghkadzor, Hotel - Saya offers a bar. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi. 
            Free private parking is available and the hotel also provides ski equipment hire for guests who want to explore the surrounding area.
            All units in the hotel are equipped with a kettle. At Hotel - Saya every room comes with a wardrobe and a flat-screen TV.
            A buffet breakfast is available daily at the accommodation.
            You can play billiards and table tennis at Hotel - Saya, and the area is popular for skiing.
            Couples particularly like the location — they rated it 9.2 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 15,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(3)
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
