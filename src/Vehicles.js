import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ImageHeader from './components/shared/ImageHeader';
import { storageRef } from './config/config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "70%",
    backgroundColor: "rgba(255, 255, 255, 0.5)"

  },
  image: {
    width: "100%",
    height: 128,

  },
}));
export default function ComplexGrid() {
  const classes = useStyles();
  const [url, setUrl] = useState(["", "", "", "", "", "", ""])

  useEffect(() => {
    const a = storageRef.child('Images/vehicles/transports-back.jpg')
    const b = storageRef.child('Images/vehicles/travego.jpg')
    const c = storageRef.child('Images/vehicles/sprinter.jpg')
    const d = storageRef.child('Images/vehicles/viano.jpg')
    const e = storageRef.child('Images/vehicles/grandis.jpg')
    const f = storageRef.child('Images/vehicles/sienna.png')

    const images = [a, b, c, d, e, f]

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
        }
      })
    )
  }, [])

  return (
    <>
      <ImageHeader text="Vehicles" backgroundImage={url[0]} />
      <div className="backk">
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image} >
                  <img className="travego" alt="complex" src={url[1]} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" style={{ color: "black", fontSize: "25px" }}>
                      Mersedes Travego
                </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: "black", fontWeight: "bold" }}>
                      15 SHD 49+1 seats
                </Typography>
                    <Typography variant="body2" style={{ color: "black" }}>
                      The latest-generation Mercedes-Benz Travego is more comfortable than ever,
                      not least thanks to large monitors with a 48.2 cm screen diagonal throughout the vehicle,
                      which afford passengers an unhindered view of films or television programmes from any seat.
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonBase component={Link} to="/contact">
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </ButtonBase>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        {/* --------------------------- */}
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image} >
                  <img className="sprinter" alt="complex" src={url[2]} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" style={{ color: "black", fontSize: "25px" }}>
                      Mercedes Sprinter
                </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: "black", fontWeight: "bold" }}>
                      Comfortable new seating for up to 16+2 seats.
                </Typography>
                    <Typography variant="body2" style={{ color: "black" }}>
                      Passenger comfort is a top priority for Sprinter.
                      Passengers will find plenty of space to spread out.
                      The seats are quite comfortable, especially during long journeys.
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonBase component={Link} to="/contact">
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </ButtonBase>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        {/* --------------------------------------2 */}
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image} >
                  <img className="viano" alt="complex" src={url[3]} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" style={{ color: "black", fontSize: "25px" }}>
                      Mercedes Viano
                </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: "black", fontWeight: "bold" }}>
                      6+1 seats
                </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ color: "black" }}>
                      At the heart of the new suspension is a combination of ride comfort,
                      driving enjoyment and active safety that takes the handling safety as well as
                      the comfort of the vehicle to hitherto unknown levels.
                      Both front and rear axles have been revised in every detail and specially tuned to match each specific model.
                      As a result the Viano's handling is precise, predictable and safe,
                      while it also delivers excellent performance in terms of comfort, ride and noise.
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonBase component={Link} to="/contact">
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </ButtonBase>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        {/* ---------------------------- */}
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image} >
                  <img className="grandis" alt="complex" src={url[4]} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" style={{ color: "black", fontSize: "25px" }}>
                      Mitsubishi Grandis
                </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: "black", fontWeight: "bold" }}>
                      6+1 Seats
                </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ color: "black" }}>
                      Two issues are often raised when dealing with seven-seat MPVs;
                      Thankfully the Grandis' rearmost seats are of a useful size, and can even accommodate adults
                      - albeit for journeys of modest durations. When not in use they can be folded flat into the floor,
                      transforming the Grandis into a versatile cross between an MPV and estate car.
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonBase component={Link} to="/contact">
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </ButtonBase>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        {/* -----------------------------------------3 */}
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image} >
                  <img className="sienna" alt="complex" src={url[5]} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" style={{ color: "black", fontSize: "25px" }}>
                      Toyota Sienna
                </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: "black", fontWeight: "bold" }}>
                      The base Toyota Sienna seats 7 people
                </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ color: "black" }}>
                      The Sienna is generally comfortable and spacious. The first two rows have ample space for adults,
                      and the second-row seats can slide to allow easy access to the back row.
                      A sloping roofline intrudes on headroom for taller people in the third row.
                </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <ButtonBase component={Link} to="/contact">
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </ButtonBase>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </>
  );
}
