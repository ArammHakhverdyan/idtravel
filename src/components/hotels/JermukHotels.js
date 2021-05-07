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

export default function JermukHotels() {

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
    const a = storageRef.child('Images/hotels/JermukHotels/header.jpeg')
    const d = storageRef.child('Images/hotels/JermukHotels/1.jpg')
    const b = storageRef.child('Images/hotels/JermukHotels/2.jpg')
    const c = storageRef.child('Images/hotels/JermukHotels/3.jpg')
    const e = storageRef.child('Images/hotels/JermukHotels/4.jpg')
    const f = storageRef.child('Images/hotels/JermukHotels/5.jpg')
    const g = storageRef.child('Images/hotels/JermukHotels/6.jpg')


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
  const [four] = React.useState(4)
  const [three] = React.useState(3)
  // const [two] = React.useState(2)
  const [one] = React.useState(1)
  const [zero] = React.useState(0)
  const handleClickOpen = (hotel) => {
    setToOpen(hotel);
  };

  const handleClickClose = () => {
    setToOpen(false);
  };

  const background = url[0];
  const hotels = [
    {
      imgUrl: url[1],
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
      imgUrl: url[2],
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
      imgUrl: url[3],
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
      imgUrl: url[4],
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
      imgUrl: url[5],
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
      imgUrl: url[6],
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
