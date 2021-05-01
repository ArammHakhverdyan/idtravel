import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageHeader from '../shared/ImageHeader';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 1,
  },
  media: {
    width: 350,
    height: 270,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <ImageHeader text="Hotels, We cooperate with the following hotels:" backgroundImage={"https://c1.wallpaperflare.com/preview/590/449/282/forest-mountains-landscape-hotel.jpg"} />
      <Grid container justify="center" spacing={0} >
{/* ---------------------------Yerevan----- */}
        <Card className={classes.root}>
          <CardActionArea component={Link} to="/yerevanHotels">
            <CardMedia
              className={classes.media}
              image="https://wallpaperaccess.com/full/2898793.jpg"
              title="See hotels in Yerevan"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Yerevan
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Friendly locals, History, City walks
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
        {/* -----------------------------------Tsaghkadzor */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="http://rimatravel.info/wp-content/uploads/2014/01/tsaghkadzor-1.jpg"
              title="See hotels in Tsaghkadzor"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Tsaghkadzor
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Clean air, Mountains, Downhill skiing
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
        {/* ----------------------Dilijan */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://img5.goodfon.com/wallpaper/nbig/a/aa/gory-armeniia-zakat-dilijan-valley.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Dilijan
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Nature, Clean air, Mountains
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
        {/* ---------------------Sevan */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://img4.goodfon.com/wallpaper/nbig/f/8c/sevana-vanq-sevan-armenia-hayastan.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sevan
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lakes, Scenery, Nature
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
        {/* ----------------------Jermuk */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://theculturetrip.com/wp-content/uploads/2018/07/1024px-jermuk_waterfall4.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Jermuk
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Clean air, Nature, Mountains
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
        {/* ----------------------------Goris */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://img4.goodfon.com/wallpaper/nbig/2/c6/tatev-armenia-goris-hayastan-kapan.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Goris
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Nature, Mountains, Scenery
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}