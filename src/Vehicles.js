import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ImageHeader from './components/shared/ImageHeader';

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
  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // },
}));
export default function ComplexGrid() {
  const classes = useStyles();
  return (
    <>
    <ImageHeader text="Vehicles" backgroundImage={"https://roadsup.com/wp-content/uploads/2019/01/Armenia_11_Mountains_RoadsUp.jpg"} />
    <div className="backk">
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} >
              <img className="sprinter"  alt="complex" src="https://i.ytimg.com/vi/T6w6dShuBLQ/maxresdefault.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Mercedes Sprinter
                </Typography>
                <Typography variant="body1" gutterBottom>
                With spacious storage, USB-C ports, and comfortable new seating for up to 15 people.
                </Typography>
                <Typography variant="body2" style={{color: "red"}}>
                Passenger comfort is a top priority for Sprinter. Passengers will find plenty of space to spread out. The seats are quite comfortable, especially during long journeys. The ride quality improves as the occupant headcount increases.
Long road trips or 8-hour days spent in the driver's seat are no problem in this van. If you're a shorter driver, the front of the seat bottoms may dig into the back of your legs a bit, but there's lots of lateral support and comfy seat padding.
The climate control is user-friendly, with three large knobs and new buttons. The icons on these buttons are a bit small, but their commonsense arrangement makes them easy to get used to.
Cooling such a large 'box' might be challenging on a hot day, but even in 100-degree heat, the Mercedes remains relatively cool.
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
              <img className="grandis"  alt="complex" src="https://autocart.biz/wp-content/uploads/imgp/Mitsubishi-grandis-7-6152.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Mitsubishi Grandis
                </Typography>
                <Typography variant="body1" gutterBottom>
                Boasting a supple ride and supportive seats, the Grandis is a car that will please anyone looking for a practical, easy to life with people carrier.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Two issues are often raised when dealing with seven-seat MPVs; 
                are the rearmost seats actually useable, and what do you do with them when they're not in use? 
                Thankfully the Grandis' rearmost seats are of a useful size, and can even accommodate adults
                 - albeit for journeys of modest durations. When not in use they can be folded flat into the floor,
                  transforming the Grandis into a versatile cross between an MPV and estate car. Fold down the middle 
                  row and you've got the makings of a posh, removals van. Elsewhere in the cabin there's the 
                usual spread of drinks holders and cubbyholes plus a storage compartment under the third row of seats.
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
              <img className="sienna"  alt="complex" src="https://www.kindpng.com/picc/m/278-2784874_minivan-toyota-sienna-2020-xle-hd-png-download.png"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Toyota Sienna
                </Typography>
                <Typography variant="body1" gutterBottom>
                The base Toyota Sienna seats 7 people
                </Typography>
                <Typography variant="body2" color="textSecondary">
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