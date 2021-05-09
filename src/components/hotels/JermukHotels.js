import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Paper, Typography, ButtonBase, DialogTitle, DialogContent, Dialog, DialogActions, Rating } from '@material-ui/core';
import { Badge, Box, Button, ButtonGroup, Snackbar, TextField } from '@material-ui/core';
import ReactReadMoreReadLess from "react-read-more-read-less";
import DialogContentText from '@material-ui/core/DialogContentText';
import { db, storageRef } from '../../config/config';
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
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function YerevanHotels() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([null, null]);
  const [ToOpen, setToOpen] = useState(false);
  const [countPerson, setCountPerson] = useState(2);
  const [countHotel, setCountHotel] = useState(1);
  const [hotel, setHotels] = useState([])

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
  const [star] = React.useState(5)
  // const [four] = React.useState(4)
  // const [three] = React.useState(3)
  // const [two] = React.useState(2)
  // const [one] = React.useState(1)
  // const [zero] = React.useState(0)

  const fetchHotels = async () => {
    const response = db.collection('jermukHotels');
    const data = await response.get();
    const dataArr = [];
    data.docs.forEach(item => {
      dataArr.push(item.data())
    })
    setHotels(dataArr);
  }
  useEffect(() => {
    fetchHotels();
  }, [])



  const handleClickOpen = (hotel) => {
    setToOpen(hotel);
  };

  const handleClickClose = () => {
    setToOpen(false);
  };

  const background = url[0]

  return (
    <>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className={classes.root}>
          <h1 style={{ textAlign: "center" }}>We cooperate with the following hotels:</h1>
          {hotel && hotel.map((value, index) => (
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
                      <Box component="fieldset" borderColor="transparent">
                        <Rating name="read-only" value={star} readOnly />
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