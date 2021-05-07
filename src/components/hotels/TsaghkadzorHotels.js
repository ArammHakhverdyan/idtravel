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


export default function TsaghkadzorHotels() {

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState([null, null]);
  const [ToOpen, setToOpen] = React.useState(false);
  const [countPerson, setCountPerson] = React.useState(2);
  const [countHotel, setCountHotel] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

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

  const [url, setUrl] = useState(["", "", "", "", "", "", ""])

  useEffect(() => {
    const a = storageRef.child('Images/hotels/TsaghkadzorHotels/header.jpg')
    const d = storageRef.child('Images/hotels/TsaghkadzorHotels/1.jpg')
    const b = storageRef.child('Images/hotels/TsaghkadzorHotels/2.jpg')
    const c = storageRef.child('Images/hotels/TsaghkadzorHotels/3.jpg')
    const e = storageRef.child('Images/hotels/TsaghkadzorHotels/4.jpg')
    const f = storageRef.child('Images/hotels/TsaghkadzorHotels/5.jpg')
    const g = storageRef.child('Images/hotels/TsaghkadzorHotels/6.jpg')


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
  const [five] = React.useState(5)
  const [four] = React.useState(4)
  const [three] = React.useState(3)
  // const [two] = React.useState(2)
  // const [one] = React.useState(1)
  const [zero] = React.useState(0)

  const handleClickOpen = (hotel) => {
    setToOpen(hotel);
  };

  const handleClickClose = () => {
    setToOpen(false);
  };

  const background = url[0]
  const hotels = [
    {
      imgUrl: url[1],
      imgText: "complex",
      hotelName: "Tsaghkadzor Marriott Hotel",
      location: "Tandzaghpyur Street 2 4/1, 2310 Tsaghkadzor, Armenia",
      describtion: "Located on the Armenian ski resort of Tsaghkadzor, the Marriott Hotel offers modern rooms, a fitness centre and indoor swimming pool. Guests can store their ski equipment in the hotel.Some rooms looks out over the Kecharis Church. All rooms come with a minibar and a flat-screen TV with satellite channels. The private bathrooms come with slippers. Guests can dine at one of the the restaurants and 4 bars, which serve a variety of cuisines ranging from light snacks to à-la-carte dining. There is a juice bar, as well as a bar serving brandies and cigars. After skiing in winter or hiking during the summer, guests can relax in the spa and wellness centre and sauna. The 10th-century Bjni Fortress is 22 km from Tsaghkadzor Marriott Hotel. Zvartnots International Airport is 69 km away and free private parking is available.  Couples particularly like the location — they rated it 9.1 for a two-person trip. We speak your language!",
      night: "1 night, 2 adults, Breakfast",
      price: "AMD 52,000",
      includes: "Includes taxes and charges",
      star: five
    },
    {
      imgUrl: url[2],
      imgText: "complex",
      hotelName: "Ararat Resort Tsaghkadzor",
      location: "Nazarbekyan 25/5, 0057 Yerevan, Armenia",
      describtion: "Offering a fitness and spa centre with a swimming pool, Ararat Resort Tsaghkadzor is located a 5-minute drive to the centre of Tsaghkadzor. Ski lifts are 3.5 km away. Ski pass vendor is available in the hotel.  Free private parking and free WiFi throughout the hotel are offered.  Every room includes a flat-screen TV with satellite channels. Some units have a seating area where you can relax. The rooms come with a private bathroom fitted with a bidet. For your comfort, you will find bathrobes and slippers. Ararat Restaurant serves European cuisine. You can also have a drink at the on-site bar. The hotel offers free shuttle service. Concierge service, tour desk and ATM machine are featured on site. The area is popular for skiing and cycling. Hrazdan Train Station is 5 km away. The nearest airport is Zvartnots International Airport, 67 km from the property. Couples particularly like the location — they rated it 8.2 for a two-person trip. We speak your language!",
      night: "1 night, 2 adults, Breakfast",
      price: "AMD 32,000",
      includes: "Includes taxes and charges",
      star: five
    },
    {
      imgUrl: url[3],
      imgText: "complex",
      hotelName: "Kecharis Hotel and Resort",
      location: "Orbeli Brothers Street 20, 2310 Tsaghkadzor, Armenia",
      describtion: "Located just 4 minutes’ walk from the 11th-century Kecharis Monastery in Tsaghkadzor town, Hotel Kecharis features bowling and free Wi-Fi. Tsakhadzor Ski Lifts are 5 minutes’ drive away. Every room at the hotel is decorated in brown tones and includes a flat-screen TV. A minibar is provided in all rooms, and bathrooms have a shower. Kecharis Restaurant serves national and European cuisine, and stylish Kavkazskaya Plennitsa and Gentlemen of Fortune restaurants offer Caucasian dishes. Guests can relax in the Lounge cafe Capuccino. Guests of Kecharis can use a ski storage that is available on site.  Yerevan city is 47 km from Hotel Kecharis, and Zvartnots Airport is 68 km away. Couples particularly like the location — they rated it 9.6 for a two-person trip.  We speak your language!",
      night: "1 night, 2 adults, Breakfast",
      price: "AMD 30,000",
      includes: "Includes taxes and charges",
      star: four
    },
    {
      imgUrl: url[4],
      imgText: "complex",
      hotelName: "Hotel Edem",
      location: "19 Tandzaghbyur Street, 2310 Tsaghkadzor, Armenia",
      describtion:
        "Hotel Edem is located in Tsaghkadzor. Among the various facilities are a garden and ski storage space.  The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi. Guests at the hotel can enjoy a continental breakfast. The area is popular for skiing, and ski equipment hire is available at Hotel Edem. The nearest airport is Zvartnots International Airport, 50 km from the accommodation. Couples particularly like the location — they rated it 10 for a two-person trip.",
      night: "1 night, 2 adults",
      price: "AMD 13,000",
      includes: "Includes taxes and charges",
      star: zero
    },
    {
      imgUrl: url[5],
      imgText: "complex",
      hotelName: "Alaska Resort",
      location: "Saralanji 53/1, 2310 Tsaghkadzor, Armenia",
      describtion: "Alaska Resort features a restaurant, bar, a shared lounge and garden in Tsaghkadzor.  Among the facilities at this property are room service and a concierge service, along with free WiFi throughout the property.  The accommodation provides a 24-hour front desk, a shared kitchen and currency exchange for guests. All units are equipped with a flat-screen TV with satellite channels, microwave, a kettle, a shower, a hairdryer and a wardrobe.  With a private bathroom equipped with a bath and free toiletries, rooms at the hotel also offer a garden view. All guest rooms will provide guests with a fridge. A continental breakfast is available daily at Alaska Resort. The accommodation offers a children's playground. The area is popular for skiing and cycling, and car hire is available at Alaska Resort. The nearest airport is Zvartnots International, 52 km from the hotel, and the property offers a paid airport shuttle service. We speak your language!",
      night: "1 night, 2 adults",
      price: "AMD 21,600",
      includes: "Includes taxes and charges",
      star: zero
    },
    {
      imgUrl: url[6],
      imgText: "complex",
      hotelName: "Hotel - Saya",
      location: "Grigor Magistros Street 1/1, 2310 Tsaghkadzor, Armenia",
      describtion: "Located in Tsaghkadzor, Hotel - Saya offers a bar. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi.          Free private parking is available and the hotel also provides ski equipment hire for guests who want to explore the surrounding area. All units in the hotel are equipped with a kettle. At Hotel - Saya every room comes with a wardrobe and a flat-screen TV.  A buffet breakfast is available daily at the accommodation. You can play billiards and table tennis at Hotel - Saya, and the area is popular for skiing. Couples particularly like the location — they rated it 9.2 for a two-person trip.We speak your language!",
      night: "1 night, 2 adults, Breakfast",
      price: "AMD 15,000",
      includes: "Includes taxes and charges",
      star: three
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
