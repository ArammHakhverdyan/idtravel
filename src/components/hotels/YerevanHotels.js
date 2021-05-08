import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import { Badge, Box, Button, ButtonGroup, Snackbar, TextField } from '@material-ui/core';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { db, storageRef } from '../../config/config';
import addWeeks from 'date-fns/addWeeks';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import MuiAlert from '@material-ui/lab/Alert';
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

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function YerevanHotels() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([null, null]);
  const [ToOpen, setToOpen] = useState(false);
  const [countPerson, setCountPerson] = useState(2);
  const [countHotel, setCountHotel] = useState(1);
  const [invisible, setInvisible] = useState(false);
  const [hotels, setHotels] = useState([])

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  }
  const [reserve, setReserve] = useState({
    fullName: "",
    emailAdress: "",
    phoneNumber: "",
    textMessage: "",
  })

  const hotelReserve = async (event, hotel) => {
    event.preventDefault();
    try {
      const hotels = await db.collection("hotelOrders");
      hotels.doc().set({
        ...reserve,
        startDate: date[0],
        endDate: date[1],
        persons: countPerson,
        rooms: countHotel,
        hotel: ToOpen.hotelName

      });
    } catch (e) {
      console.error("Error: ", e);
    }
    setOpen(true);
    setReserve({
      fullName: "",
      emailAdress: "",
      phoneNumber: "",
      textMessage: "",
    })

    handleClickClose()
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);

  }

  const handleChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;

    setReserve(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const classes = useStyles();
  const [five] = React.useState(5)
  const [four] = React.useState(4)
  const [three] = React.useState(3)
  // const [two] = React.useState(2)
  // const [one] = React.useState(1)
  // const [zero] = React.useState(0)

  const [url, setUrl] = useState(["", "", "", "", "", "", ""])

  useEffect(() => {
    const a = storageRef.child('Images/hotels/YerevanHotels/header.jpg')
    const b = storageRef.child('Images/hotels/YerevanHotels/1.jpg')
    const d = storageRef.child('Images/hotels/YerevanHotels/2.jpg')
    const c = storageRef.child('Images/hotels/YerevanHotels/3.jpg')
    const e = storageRef.child('Images/hotels/YerevanHotels/4.jpg')
    const f = storageRef.child('Images/hotels/YerevanHotels/5.jpg')
    const g = storageRef.child('Images/hotels/YerevanHotels/6.jpg')
    const h = storageRef.child('Images/hotels/YerevanHotels/7.jpg')
    const i = storageRef.child('Images/hotels/YerevanHotels/8.jpg')

    const images = [a, b, c, d, e, f, g, h, i]

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
  // useEffect(() => {

  //   const hotelsRef = db.collection("yerevanHotels").doc();
  //   const hotelsArr = []
  //   hotelsRef.get().then((doc) => {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data());
  //       //setGetData(doc.data())
  //       doc.data().forEach(item => {
  //         hotelsArr.push(item.data())
  //       })
  //     } else {
  //       console.log("No such document!");
  //     }
  //   }).catch((error) => {
  //     console.log("Error getting document:", error);
  //   });


  // }, [])


  useEffect(() => {
    try {
      const hotelsRef = db.collection("hotels");
      hotelsRef.get().then((document) => {
        const data = [];
        console.log(data, "data")
        document.forEach((item) => {
          data.push(item.data());
        });
        setHotels(data);
      });
    } catch (e) {
      console.error("Error: ", e);
    }
  }, []);
  console.log(hotels, "hotels")

  const handleClickOpen = (hotel) => {
    setToOpen(hotel);
  };

  const handleClickClose = () => {
    setToOpen(false);
  };

  //console.log(url[8])
  const background = url[0]
  const hotelss = [
    {
      imgUrl: url[1],
      imgText: "complex",
      hotelName: "Radisson BLU Hotel Yerevan",
      location: "Azatutyan Avenue 2/2, 0037 Yerevan, Armenia",
      describtion: "Located a 10-minute walk from Victory Park, this 5-star hotel was totally renovated and offers magnificent views of park and mountain Ararat. Yerevan city center is just a 5-minute ride away. Free on-site parking and free WiFi throughout the property are provided. The spacious rooms at Radisson BLU Hotel Yerevan feature bright décor, high-quality  furnishings and cosy carpet. All rooms are air-conditioned and include satellite TV and a private bathroom. Restaurant Larder offers the experience of Armenian home cooking with a European touch. Guests are also  welcome to relax at Ad Astra Rooftop Restaurant, where international favorites, salads, sandwiches and burgers are served. Sushi Salon restaurant offers guests a unique atmosphere for the finest selection of sushi and Japanese cuisine. Reception at Radisson BLU Hotel Yerevan is open 24/7, and includes a ticket service and tour  desk. Radisson BLU Hotel Yerevan features a hi-tech gym. Couples particularly like the location — they rated it 8.8 for a two-person trip.We speak your language!",
      night: "1 night, 2 adults",
      price: "AMD 55,000",
      includes: "Includes taxes and charges",
      star: five
    },
  ]
  //   {
  //     imgUrl: url[2],
  //     imgText: "complex",
  //     hotelName: "Aghababyan's Hotel",
  //     location: "Nazarbekyan 25/5, 0057 Yerevan, Armenia",
  //     describtion: "Situated in Yerevan, 8 km from Republic Square, Aghababyan's Hotel features accommodation with a restaurant, free private parking,  a fitness centre and a bar. The hotel is excellent. Comfort and value for money.  The ladies at the front desk were friendly. It was nice to be received with a big smile.  Special thanks to all staff cause they were very professional, helpful and one of a kind. We stayed at superior apartment with pool and sauna, and it was great.  The apartment had everything you could wish for. It was very nice and clean. Pool is good.  Billiard area is really big. Rooms were fantastic. A bit far from center, but taxis are not expensive,  so no issues.",
  //     night: "1 night, 2 adults, Breakfast",
  //     price: "AMD 40,940",
  //     includes: "Includes taxes and charges",
  //     star: five
  //   },
  //   {
  //     imgUrl: url[3],
  //     imgText: "complex",
  //     hotelName: "Armenia Mariott Hotel Yerevan",
  //     location: "Amiryan Street 1, 0010 Yerevan, Armenia",
  //     describtion: "Centrally located on Republic Square, Marriott Armenia Hotel Yerevan offers soundproofed rooms with classic-style décor and fine international cuisine. A bar and an outdoor summer terrace are also available. Behind its grand façade, the Marriott Armenia Hotel Yerevan provides spacious rooms and suites with flat-screen TV, minibar and seating area. Guests enjoy views of Mount Ararat or Republic Square. A modern gym invites guests to keep fit. The seasonal, open air pool is the perfect place to relax after a hectic day. Marriott Armenia Hotel Yerevan offers 24/7 service at Cristal Bar and Lounge, delicious breakfast at the M-Club, and an amazing outdoor café with a view to the Republic Square.  There is a 24-hour front desk, and free private parking is available upon request.   This is our guests' favourite part of Yerevan, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip. We speak your language!",
  //     night: "1 night, 2 adults",
  //     price: "AMD 61,200",
  //     includes: "Includes taxes and charges",
  //     star: four
  //   },
  //   {
  //     imgUrl: url[4],
  //     imgText: "complex",
  //     hotelName: "Ramada Hotel & Suites by Wyndham Yerevan",
  //     location: "15 Pavstos Busand St, 00010 Yerevan, Armenia",
  //     describtion: "Set in Yerevan, Ramada Hotel & Suites by Wyndham Yerevan offers air-conditioned accommodation and a bar. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi.  The property is non-smoking and is situated 150 m from Republic Square. At the hotel, all rooms have a desk, a flat-screen TV and a private bathroom. Ramada Hotel & Suites by Wyndham Yerevan offers a continental or buffet breakfast. The accommodation also provides a business centre and guests can use the fax machine and photocopier at Ramada Hotel & Suites by Wyndham Yerevan. Popular points of interest near the hotel include Armenian Opera and Ballet Theatre, History Museum of Armenia and Blue Mosque. This is our guests' favourite part of Yerevan, according to independent reviews.  Couples particularly like the location — they rated it 9.7 for a two-person trip. We speak your language!",
  //     night: "1 night, 2 adults",
  //     price: "AMD 47,000",
  //     includes: "Includes taxes and charges",
  //     star: four
  //   },
  //   {
  //     imgUrl: url[5],
  //     imgText: "complex",
  //     hotelName: "Erebuni Hotel Yerevan",
  //     location: "Vazgen Sargsyan Street 26/4, 0010 Yerevan, Armenia",
  //     describtion: "In the very centre of Yerevan, near the Republic Square, Hotel Erebuni welcomes guests with traditional Armenian and European cuisine. It offers free Wi-Fi and a buffet breakfast each morning. Rooms feature a modern design. All come with air conditioning, a flat-screen TV with satellite channels, and tea and coffee making facilities. Meals can be enjoyed in the Erebuni’s stylish restaurant. A selection of drinks are served in the hotel’s trendy bar. The famous Yerevan Opera House is a 10-minute walk away. Zvartnots International Airport can be reached in just a 20-minute drive. The hotel organizes a transfer to and from the airport.  A tour desk can help visitors plan their stay in Yerevan. Guests can visit the on-site gift shop and store their luggage at the 24-hour reception. This is our guests' favourite part of Yerevan, according to independent reviews. Couples particularly like the location — they rated it 9.8 for a two-person trip. We speak your language!",
  //     night: "1 night, 2 adults",
  //     price: "AMD 26,000",
  //     includes: "Includes taxes and charges",
  //     star: four
  //   },
  //   {
  //     imgUrl: url[6],
  //     imgText: "complex",
  //     hotelName: "Paris Hotel Yerevan",
  //     location: "4/6, Amiryan Street, 0010 Yerevan, Armenia ",
  //     describtion: "Offering Montmartre Restaurant-Cafe-Bar with panoramic views of the city and Mount Ararat, Paris Hotel Yerevan is located in the centre of Yerevan, 100 m from Republic Square. Free WiFi access is available. Each room here will provide you with a SMART TV, air conditioning and a minibar. There is also an electric kettle. Featuring a hairdryer, private bathroom also comes with free toiletries and slippers. Extras include a seating area and cable channels. At Paris Hotel Yerevan you will find a 24-hour front desk, a terrace and a cocktail bar. Other facilities offered at the property include luggage storage. The property has 2 conference rooms. This is our guests' favourite part of Yerevan, according to independent reviews. Couples particularly like the location — they rated it 9.7 for a two-person trip. We speak your language!",
  //     night: "1 night, 2 adults, Breakfast",
  //     price: "AMD 44,100",
  //     includes: "Includes taxes and charges",
  //     star: four
  //   },
  //   {
  //     imgUrl: url[7],
  //     imgText: "complex",
  //     hotelName: "Ibis Yerevan Center",
  //     location: "Northern Avenue 5/1, 0001 Yerevan, Armenia",
  //     describtion: "Ideally situated in the heart of the city, ibis Yerevan Center is just a short walk away from major Yerevan attractions such as Republic Square, Armenian Opera and Ballet Theatre and Museum of History and Art.Certain units include a seating area to relax in after a busy day. The modern rooms are air conditioned and have a flat-screen TV and a private bathroom.Guests can enjoy breakfast, lunch and dinner at the ibis Kitchen restaurant and on the terrace with a view of Northern Avenue. Light snacks and drinks are available at a modern bar open 24/7.Various dining options can be found within a short walk of ibis Yerevan Center. Zvartnots International Airport is 12 km away.This is our guests' favourite part of Yerevan, according to independent reviews.Couples particularly like the location — they rated it 9.7 for a two-person trip.We speak your language!",
  //     night: "1 night, 2 adults, Breakfast",
  //     price: "AMD 39,000",
  //     includes: "Includes taxes and charges",
  //     star: three
  //   },
  //   {
  //     imgUrl: url[8],
  //     imgText: "complex",
  //     hotelName: "Elysium Gallery Hotel",
  //     location: "75/5 Yeznik Koghbatsi Str., 0002 Yerevan, Armenia",
  //     describtion: "Elysium Gallery Hotel offers accommodation in Yerevan city centre, 800 m from Republic Square Metro Station. Guests can enjoy the on-site bar.Some rooms have a seating area to relax in after a busy day. Each room has a private bathroom equipped with a shower. Extras include slippers and free toiletries.There is a 24-hour front desk and a shared lounge at the property. Guests can store their ski equipment in the ski storage.The hotel also offers bike hire and car hire. Armenian Opera and Ballet Theatre is 50 m from Elysium Gallery Hotel. The nearest airport is Zvartnots International Airport, 10 km from the property.This is our guests' favourite part of Yerevan, according to independent reviews.Couples particularly like the location — they rated it 9.5 for a two-person trip.We speak your language!",
  //     night: "1 night, 2 adults, Breakfast",
  //     price: "AMD 20,790",
  //     includes: "Includes taxes and charges",
  //     star: three
  //   },

  // ]
  //const fbId = "bAmt9CHL3o1TDK4zNVbs"

  return (
    <>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className={classes.root}>
          <h1 style={{ textAlign: "center" }}>We cooperate with the following hotels:</h1>
          {hotelss.map((value, index) => (
            // <div style={{ backgroundColor: "red" }}>
            //   {hotels && hotels[0]}
            // </div>
            <Paper key={value} className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className="hotelImg" alt={value.imgText} src={value.imgUrl} />
                  </ButtonBase>
                </Grid>

                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Box component="fieldset" borderColor="transparent">
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
                    <Button style={{ marginTop: "15px", backgroundColor: "#94c93d" }} variant="contained" onClick={() => handleClickOpen(value)}>
                      Book this hotel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">Your order is successfully done.We will contact with you soon</Alert>
      </Snackbar>
      <Dialog open={ToOpen} onClose={handleClickClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Booking {ToOpen.hotelName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the details․
          </DialogContentText>
          <TextField fullWidth={true} id="fullName" label="Full Name" variant="outlined" onChange={handleChange} />
          <TextField fullWidth={true} style={{ marginTop: "20px" }} id="emailAdress" label="Email" variant="outlined" onChange={handleChange} />
          <TextField fullWidth={true} style={{ marginTop: "20px" }} id="phoneNumber" label="Phone Number" variant="outlined" onChange={handleChange} />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateRangePicker
              startText="Start"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} style={{ marginTop: "20px" }} variant="standard" fullWidth={true} id="startDate" label="Start" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} variant="standard" fullWidth={true} id="endDate" label="End" />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <div>
              <Badge color="secondary" badgeContent={countPerson}>
                <PersonIcon />
              </Badge>
              <ButtonGroup>
                <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCountPerson(Math.max(countPerson - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCountPerson(countPerson + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </div>
            <div style={{ marginLeft: "70px" }}>
              <Badge color="secondary" badgeContent={countHotel}>
                <HotelIcon />
              </Badge>
              <ButtonGroup>
                <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCountHotel(Math.max(countHotel - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCountHotel(countHotel + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <TextField fullWidth={true} style={{ marginTop: "20px" }} id="textMessage" label="Message" variant="outlined" multiline rows={4} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button style={{ backgroundColor: "#94c93d" }} fullWidth={true} variant="contained" onClick={hotelReserve}>Book</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
