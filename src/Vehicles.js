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
}));
export default function ComplexGrid() {
  const classes = useStyles();
  return (
    <>
    <ImageHeader text="Vehicles" backgroundImage={"https://w.wallha.com/ws/5/l0HjNQqD.jpg"} />
    <div className="backk">
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} >
              <img className="travego"  alt="complex" src="https://artourbus.com/img/cars/16.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{color: "black",fontSize: "25px"}}>
                Mersedes Travego 
                </Typography>
                <Typography variant="body1" gutterBottom style={{color: "black",fontWeight: "bold"}}>
                15 SHD 49+1 seats
                </Typography>
                <Typography variant="body2" style={{color: "black"}}>
                The latest-generation Mercedes-Benz Travego is more comfortable than ever, 
                not least thanks to large monitors with a 48.2 cm screen diagonal throughout the vehicle, 
                which afford passengers an unhindered view of films or television programmes from any seat.
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid item>
                <ButtonBase component={Link} to="/contact">
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </ButtonBase>
            </Grid> */}
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
              <img className="sprinter"  alt="complex" src="https://artourbus.com/img/cars/8/2.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{color: "black",fontSize: "25px"}}>
                  Mercedes Sprinter
                </Typography>
                <Typography variant="body1" gutterBottom style={{color: "black",fontWeight: "bold"}}>
                Comfortable new seating for up to 16+2 seats.
                </Typography>
                <Typography variant="body2" style={{color: "black"}}>
                Passenger comfort is a top priority for Sprinter.
                 Passengers will find plenty of space to spread out.
                  The seats are quite comfortable, especially during long journeys. 
                </Typography>
              </Grid>
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
              <img className="viano"  alt="complex" src="https://artourbus.com/img/cars/9/1.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{color: "black",fontSize: "25px"}}>
                  Mercedes Viano
                </Typography>
                <Typography variant="body1" gutterBottom style={{color: "black",fontWeight: "bold"}}> 
                6+1 seats
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{color: "black"}}>
                At the heart of the new suspension is a combination of ride comfort, 
                driving enjoyment and active safety that takes the handling safety as well as 
                the comfort of the vehicle to hitherto unknown levels. 
                Both front and rear axles have been revised in every detail and specially tuned to match each specific model. 
                As a result the Viano's handling is precise, predictable and safe,
                 while it also delivers excellent performance in terms of comfort, ride and noise.
                </Typography>
              </Grid>
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
              <img className="grandis"  alt="complex" src="https://autocart.biz/wp-content/uploads/imgp/Mitsubishi-grandis-7-6152.jpg"/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{color: "black",fontSize: "25px"}}>
                  Mitsubishi Grandis
                </Typography>
                <Typography variant="body1" gutterBottom style={{color: "black",fontWeight: "bold"}}>
                6+1 Seats
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{color: "black"}}>
                Two issues are often raised when dealing with seven-seat MPVs; 
                Thankfully the Grandis' rearmost seats are of a useful size, and can even accommodate adults
                 - albeit for journeys of modest durations. When not in use they can be folded flat into the floor,
                  transforming the Grandis into a versatile cross between an MPV and estate car.
                </Typography>
              </Grid>
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
                <Typography gutterBottom variant="subtitle1" style={{color: "black",fontSize: "25px"}}>
                  Toyota Sienna
                </Typography>
                <Typography variant="body1" gutterBottom style={{color: "black",fontWeight: "bold"}}> 
                The base Toyota Sienna seats 7 people
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{color: "black"}}>
                The Sienna is generally comfortable and spacious. The first two rows have ample space for adults, 
                and the second-row seats can slide to allow easy access to the back row.
                 A sloping roofline intrudes on headroom for taller people in the third row.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>          
    </div>    
    </div>
    </>
  );
}
