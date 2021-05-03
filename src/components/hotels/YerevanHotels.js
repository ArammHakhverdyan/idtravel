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
        maxWidth: "1000px",
        marginTop: "15px"
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

export default function YerevanHotels() {
    const classes = useStyles();
    const [star] = React.useState(5);
    const background = "https://wallpaperaccess.com/full/1382744.jpg"
    const hotels = [
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/232/232826141.jpg",
            imgText: "complex",
            hotelName: "Radisson BLU Hotel Yerevan",
            location: "Azatutyan Avenue 2/2, 0037 Yerevan, Armenia",
            describtion: <p>Located a 10-minute walk from Victory Park, this 5-star hotel was totally renovated and offers magnificent views of park and mountain Ararat. Yerevan city center is just a 5-minute ride away.
            Free on-site parking and free WiFi throughout the property are provided.
            The spacious rooms at Radisson BLU Hotel Yerevan feature bright décor, high-quality 
            furnishings and cosy carpet. All rooms are air-conditioned and include satellite TV and a private bathroom.
            Restaurant Larder offers the experience of Armenian home cooking with a European touch. Guests are also
            welcome to relax at Ad Astra Rooftop Restaurant, where international favorites, salads, sandwiches and burgers are served.
            Sushi Salon restaurant offers guests a unique atmosphere for the finest selection of sushi and Japanese
            cuisine. Reception at Radisson BLU Hotel Yerevan is open 24/7, and includes a ticket service and tour 
            desk. Radisson BLU Hotel Yerevan features a hi-tech gym.
            Couples particularly like the location — they rated it 8.8 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 55,000",
            includes: "Includes taxes and charges"
            //[star]: React.useState(5)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/186/186015338.jpg",
            imgText: "complex",
            hotelName: "Aghababyan's Hotel",
            location: "Nazarbekyan 25/5, 0057 Yerevan, Armenia",
            describtion: <p>Situated in Yerevan, 8 km from Republic Square, Aghababyan's Hotel features accommodation with a restaurant, free private parking, 
            a fitness centre and a bar.
            The hotel is excellent. Comfort and value for money. 
            The ladies at the front desk were friendly. It was nice to be received with a big smile. 
            Special thanks to all staff cause they were very professional, helpful and one of a kind.
            We stayed at superior apartment with pool and sauna, and it was great. 
            The apartment had everything you could wish for. It was very nice and clean. Pool is good. 
            Billiard area is really big. Rooms were fantastic. A bit far from center, but taxis are not expensive,
             so no issues."</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 40,940",
            includes: "Includes taxes and charges",
            //[star]: React.useState(5)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/283/283816843.jpg",
            imgText: "complex",
            hotelName: "Armenia Mariott Hotel Yerevan",
            location: "Amiryan Street 1, 0010 Yerevan, Armenia",
            describtion: <p>Centrally located on Republic Square, Marriott Armenia Hotel Yerevan offers soundproofed rooms with classic-style décor and fine international cuisine. A bar and an outdoor summer terrace are also available.
            Behind its grand façade, the Marriott Armenia Hotel Yerevan provides spacious rooms and suites with flat-screen TV, minibar and seating area. Guests enjoy views of Mount Ararat or Republic Square.
            A modern gym invites guests to keep fit. The seasonal, open air pool is the perfect place to relax after a hectic day.
            Marriott Armenia Hotel Yerevan offers 24/7 service at Cristal Bar and Lounge, delicious breakfast at the M-Club, and an amazing outdoor café with a view to the Republic Square. 
            There is a 24-hour front desk, and free private parking is available upon request.  
            This is our guests' favourite part of Yerevan, according to independent reviews.
            Couples particularly like the location — they rated it 9.6 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 61,200",
            includes: "Includes taxes and charges",
            //[star]: React.useState(4)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/208/208662419.jpg",
            imgText: "complex",
            hotelName: "Ramada Hotel & Suites by Wyndham Yerevan",
            location: "15 Pavstos Busand St, 00010 Yerevan, Armenia",
            describtion: <p>Set in Yerevan, Ramada Hotel & Suites by Wyndham Yerevan offers air-conditioned accommodation and a
            bar. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi. 
            The property is non-smoking and is situated 150 m from Republic Square.
            At the hotel, all rooms have a desk, a flat-screen TV and a private bathroom.
            Ramada Hotel & Suites by Wyndham Yerevan offers a continental or buffet breakfast.
            The accommodation also provides a business centre and guests can use the fax machine and photocopier at Ramada Hotel & Suites by Wyndham Yerevan.
            Popular points of interest near the hotel include Armenian Opera and Ballet Theatre, History Museum of Armenia and Blue Mosque.
            This is our guests' favourite part of Yerevan, according to independent reviews.
            Couples particularly like the location — they rated it 9.7 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 47,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(4)
        },
        {
            imgUrl: "https://m02.tury.ru/hotel/91/91322/2210362_1600.jpg",
            imgText: "complex",
            hotelName: "Erebuni Hotel Yerevan",
            location: "Vazgen Sargsyan Street 26/4, 0010 Yerevan, Armenia",
            describtion: <p>
                In the very centre of Yerevan, near the Republic Square, Hotel Erebuni welcomes guests with traditional Armenian and European cuisine. It offers free Wi-Fi and a buffet breakfast each morning.
            Rooms feature a modern design. All come with air conditioning, a flat-screen TV with satellite channels, and tea and coffee making facilities.
            Meals can be enjoyed in the Erebuni’s stylish restaurant. A selection of drinks are served in the hotel’s trendy bar.
            The famous Yerevan Opera House is a 10-minute walk away. Zvartnots International Airport can be reached in just a 20-minute drive. The hotel organizes a transfer to and from the airport.
            A tour desk can help visitors plan their stay in Yerevan. Guests can visit the on-site gift shop and store their luggage at the 24-hour reception.
            This is our guests' favourite part of Yerevan, according to independent reviews.
            Couples particularly like the location — they rated it 9.8 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults",
            price: "AMD 26,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(4)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/350/35052276.jpg",
            imgText: "complex",
            hotelName: "Paris Hotel Yerevan",
            location: "4/6, Amiryan Street, 0010 Yerevan, Armenia ",
            describtion: <p>
                Offering Montmartre Restaurant-Cafe-Bar with panoramic views of the city and Mount Ararat, Paris Hotel Yerevan is located in the centre of Yerevan, 100 m from Republic Square. Free WiFi access is available.
            Each room here will provide you with a SMART TV, air conditioning and a minibar. There is also an electric kettle. Featuring a hairdryer, private bathroom also comes with free toiletries and slippers. Extras include a seating area and cable channels.
            At Paris Hotel Yerevan you will find a 24-hour front desk, a terrace and a cocktail bar. Other facilities offered at the property include luggage storage. The property has 2 conference rooms.
            This is our guests' favourite part of Yerevan, according to independent reviews.
            Couples particularly like the location — they rated it 9.7 for a two-person trip.
            We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 44,100",
            includes: "Includes taxes and charges",
            //[star]: React.useState(4)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/115/115058136.jpg",
            imgText: "complex",
            hotelName: "Ibis Yerevan Center",
            location: "Northern Avenue 5/1, 0001 Yerevan, Armenia",
            describtion: <p>
            Ideally situated in the heart of the city, ibis Yerevan Center is just a short walk away from major Yerevan attractions such as Republic Square, Armenian Opera and Ballet Theatre and Museum of History and Art.
Certain units include a seating area to relax in after a busy day. The modern rooms are air conditioned and have a flat-screen TV and a private bathroom.
Guests can enjoy breakfast, lunch and dinner at the ibis Kitchen restaurant and on the terrace with a view of Northern Avenue. Light snacks and drinks are available at a modern bar open 24/7.
Various dining options can be found within a short walk of ibis Yerevan Center. Zvartnots International Airport is 12 km away.
This is our guests' favourite part of Yerevan, according to independent reviews.
Couples particularly like the location — they rated it 9.7 for a two-person trip.
We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 39,000",
            includes: "Includes taxes and charges",
            //[star]: React.useState(3)
        },
        {
            imgUrl: "https://cf.bstatic.com/images/hotel/max1024x768/508/50853241.jpg",
            imgText: "complex",
            hotelName: "Elysium Gallery Hotel",
            location: "75/5 Yeznik Koghbatsi Str., 0002 Yerevan, Armenia",
            describtion: <p>
            Elysium Gallery Hotel offers accommodation in Yerevan city centre, 800 m from Republic Square Metro Station. Guests can enjoy the on-site bar.
Some rooms have a seating area to relax in after a busy day. Each room has a private bathroom equipped with a shower. Extras include slippers and free toiletries.
There is a 24-hour front desk and a shared lounge at the property. Guests can store their ski equipment in the ski storage.
The hotel also offers bike hire and car hire. Armenian Opera and Ballet Theatre is 50 m from Elysium Gallery Hotel. The nearest airport is Zvartnots International Airport, 10 km from the property.
This is our guests' favourite part of Yerevan, according to independent reviews.
Couples particularly like the location — they rated it 9.5 for a two-person trip.
We speak your language!</p>,
            night: "1 night, 2 adults, Breakfast",
            price: "AMD 20,790",
            includes: "Includes taxes and charges",
            //[star]: React.useState(3)
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
        <h1 style={{textAlign: "center"}}>We cooperate with the following hotels:</h1>
            {hotels.map((value) => (
                <Paper key={value} className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt={value.imgText} src={value.imgUrl} />
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
    </div>
</>
    );
}
