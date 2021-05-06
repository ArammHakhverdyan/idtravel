import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import { Alert, Badge, Box, Button, ButtonGroup, Snackbar, TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { db } from '../../config/config';
import addWeeks from 'date-fns/addWeeks';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import MobileDateRangePicker from '@material-ui/lab/MobileDateRangePicker';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';

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
// --------------------------
function getWeeksAfter(date, amount) {
    return date ? addWeeks(date, amount) : undefined;
  }
export default function GorisHotels() {
const [open, setOpen] = React.useState(false);
const [date, setDate] = React.useState([null, null]);
const [countPerson, setCountPerson] = React.useState(1);
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
    hotelId: "",
    startDate: "",
    endDate: "",
})

const hotelReserve = async (event) => {
    event.preventDefault();
    try {
        const hotels = await db.collection("hotels");
        hotels.doc("From: " + reserve.emailAdress).set(reserve);
    } catch (e) {
        console.error("Error: ", e);
    }
    setOpen(true);
    setReserve({
        fullName: "",
        emailAdress: "",
        phoneNumber: "",
        textMessage: "",
        hotelId: "",
        startDate: "",
        endDate: "",
    })
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
    const [two] = React.useState(2)
    const [one] = React.useState(1)
    const [zero] = React.useState(0)
    const background = "https://i.ytimg.com/vi/Xqw05yQEzGQ/maxresdefault.jpg"
    const hotels = [
        {
            hotelId: "Diana Hotel",
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/37724799.jpg?k=c460f96f37b52a7a7e9f556902aba385a3ef093c0811422e85b842d806cb4433&o=&hp=1",
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
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225022719.jpg?k=79d6529976f140424679ee9b09adb241f3d70905219a6ce1fa9c7ae555de40eb&o=&hp=1",
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
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/243146272.jpg?k=b82d0b640cafb074f26de7ca61c8dff8f7c7774ccce0743c5230c5b893092d95&o=&hp=1",
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
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/215356845.jpg?k=8e827f46b0c552fc70134abd5312c3d9cabc87d4238b6d3f5ffbbac42541d089&o=&hp=1",
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
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/202514638.jpg?k=389392258ff7818a035b3aaeec47d4f636f0232d347effff0a64aca669b63089&o=&hp=1",
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
            imgUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155258111.jpg?k=a0dc824b5f18afdc8e2f1eb65a24ccbdcd8602a36708576ac97be3af95549e29&o=&hp=1",
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

    const [ToOpen, setToOpen] = React.useState(false);

  const handleClickOpen = () => {
    setToOpen(true);
  };

  const handleClickClose = () => {
    setToOpen(false);
  };
    
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
                                    {/* ---------------------- */}
                                    <Dialog open={ToOpen} onClose={handleClickClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Order processing</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the details․
          </DialogContentText>
          <TextField fullWidth={true} id="fullName" label="Full Name" variant="outlined" onChange={handleChange} />
                    <TextField fullWidth={true} style={{marginTop: "20px"}} id="emailAdress" label="Email" variant="outlined" onChange={handleChange} />
                    <TextField fullWidth={true} style={{marginTop: "20px"}} id="phoneNumber" label="Phone Number" variant="outlined" onChange={handleChange} />
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        startText="Start"
        value={date}
        onChange={(newValue) => {
        setDate(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} style={{marginTop: "20px"}} variant="standard" fullWidth={true} id="startDate" label="Start" onChange={handleChange}/>
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} variant="standard" fullWidth={true} id="endDate" label="End" onChange={handleChange}/>
          </React.Fragment>
        )}
      />
      </LocalizationProvider>
<div style={{marginTop: "20px", display: "flex"}}>
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
      <div style={{marginLeft: "70px"}}>
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
      <TextField fullWidth={true} style={{marginTop: "20px"}} id="hotelId" label="Hotel Name" defaultValue={value.hotelId} variant="outlined" onChange={handleChange} />
                    <TextField fullWidth={true} style={{marginTop: "20px"}} id="textMessage" label="Message" variant="outlined" multiline rows={4} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button style={{backgroundColor: "#94c93d"}} fullWidth={true} variant="contained" onClick={hotelReserve}>Book</Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">Your order is successfully done.We will contact with you soon</Alert>
                    </Snackbar>
        </DialogActions>
      </Dialog>
      {/* ------------------- */}
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
                                        <Button style={{marginTop: "15px", backgroundColor: "#94c93d"}} variant="contained" onClick={handleClickOpen}>
                                         Book this hotel
                                        </Button>
                                    </Grid>
                                    {/* <Grid item style={{ marginTop: "15%" }}>
                                        <Grid item style={{ width: "70px" }}>
                                        
                                            <ButtonBase component={Link} to="/contact">
                                            <Typography variant="caption" display="block">
                                                    For details please contact with us
                                </Typography>


                                                <ArrowForwardIosIcon></ArrowForwardIosIcon>
                                                
                                            </ButtonBase>
                                        </Grid>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </div>
            </div>
        </>
    );
}

