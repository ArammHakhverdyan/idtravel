import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

/*const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    height: 140,
    width: 100,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
    const hotels = [0, 1, 2, 3]
  return (
    <div className={classes.root}>
         {hotels.map((value) => (
      <Paper key={value} className={classes.paper}>
          {/* {value.forEach((i) => {i.img.src="https://wallpaperaccess.com/full/1382796.jpg"})} */}
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://cache.marriott.com/marriottassets/marriott/EVNMC/evnmc-exterior-0025-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*" />
            </ButtonBase>
          </Grid>
         
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      ))}
    </div>
  );
}
