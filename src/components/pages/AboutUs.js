import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid, makeStyles } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
import { CardTravelOutlined, DirectionsBus } from '@material-ui/icons';
import PublicIcon from '@material-ui/icons/Public';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { storageRef } from '../../config/config';




function AboutUs() {
  const classes = useStyles();
  const [url, setUrl] = useState(["", "", "", "", "", ""])
  useEffect(() => {
    const a = storageRef.child('Images/aboutUs/garni.jpg')
    const b = storageRef.child('Images/aboutUs/aboutUs.jpg')
    const c = storageRef.child('Images/aboutUs/yerevan.jpg')
    const d = storageRef.child('Images/aboutUs/1 .png')
    const e = storageRef.child('Images/aboutUs/2.png')
    const f = storageRef.child('Images/aboutUs/3.png')
    const images = [a, b, c, d, e, f]
    images.map(function (item, index) {
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
          default: {
            return
          }
        }
      })
    })
  }, [])
  console.log(url[2])
  return (
    <>
      <ImageHeader backgroundImage={url[0]} />
      <Container>
        <Grid className={classes.gridAboutUs} container spacing={3}>
          <Grid item sm={6}>
            <img style={{ maxWidth: "100%" }} src={url[1]} alt="" />
          </Grid>
          <Grid item sm={6}>
            <Typography className={classes.title} variant="h4" gutterBottom>
              The Story About Us
                        </Typography>
            <Typography>
              Travel ID is is one of the leading travel agencies in Armenia.We have an extensive experience in tourism business. We do have special rates as for hotels all over Armenia.Our services include Hotel Reservation,Qualified Guide Service, Transportation Service, Transfers from/to Airport/Hotel, Car Rental with/without Driver.Your guest is our guest and your problem is our problem! Organize your trip with professionals…
              Organize your trips with ID Travel.
                        </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor="#f4f6fa" textAlign="center">
        <Container>
          <Grid className={classes.gridAboutUs} container spacing={6}>
            <Grid item sm={4}>
              <DirectionsBus className={classes.icons} />
              <Typography variant="h5" className={classes.text}>
                Private transport
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Typography>
            </Grid>
            <Grid item sm={4}>
              <PublicIcon className={classes.icons} />
              <Typography variant="h5" className={classes.text}>
                Diverse Destinations
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Typography>
            </Grid>
            <Grid item sm={4}>
              <HomeWorkIcon className={classes.icons} />
              <Typography variant="h5" className={classes.text}>
                Great Hotels
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div>
        <img src={url[2]} alt='' className={classes.imgCity} />
        <Box >
          {/* <h1 style={{
            position: "relative", textAlign: "center", color: "white", top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}>The best place in the world</h1> */}
        </Box>
        <Grid className={classes.imgContainer}>
          <img className={classes.imgStyle} src={url[3]} />
          <img className={classes.imgStyle} src={url[4]} />
          <img className={classes.imgStyle} src={url[5]} />
        </Grid>
      </div>
    </>
  )
}


export default AboutUs;


const useStyles = makeStyles({
  gridAboutUs: {
    padding: "60px 0"
  },
  title: {
    textAlign: "center",
  },
  icons: {
    fontSize: "80px",
    color: "#94c93d",

  },
  imgCity: {
    minHeight: "30vh",
    width: "100%",
    position: "relative"
  },
  imgContainer: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "rgb(64 64 64)"
  },
  imgStyle: {
    padding: "50px",
    color: "#94c93d"
  },
  text: {
    color: "#878ca8"
  }
})