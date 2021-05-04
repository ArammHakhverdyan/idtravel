import React, { useEffect, useState } from 'react';
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
import { storageRef } from '../../config/config';

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
  const background = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f2/42/38/caption.jpg?w=1000&h=600&s=1"
  const [url, setUrl] = useState(["", "", "", "", "", "", ""])

  useEffect(() => {
    const a = storageRef.child('Images/hotels/hotelsList-header.jpg')
    const b = storageRef.child('Images/hotels/yerevan.jpg')
    const c = storageRef.child('Images/hotels/tsaghkadzor.jpg')
    const d = storageRef.child('Images/hotels/dilijan.jpg')
    const e = storageRef.child('Images/hotels/sevan.jpg')
    const f = storageRef.child('Images/hotels/jermuk.jpg')
    const g = storageRef.child('Images/hotels/goris.jpg')

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


  return (
    <>
      <ImageHeader text="Hotels" backgroundImage={url[0]} />
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <Grid container justify="center" spacing={0} >
          {/* ---------------------------Yerevan----- */}
          <Card className={classes.root}>
            <CardActionArea component={Link} to="/yerevanHotels">
              <CardMedia
                className={classes.media}
                image={url[1]}
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
            <CardActions style={{marginLeft: "65%"}}>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
          {/* -----------------------------------Tsaghkadzor */}
          <Card className={classes.root}>
            <CardActionArea component={Link} to="/tsaghkadzorHotels">
              <CardMedia
                className={classes.media}
                image={url[2]}
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
            <CardActions style={{marginLeft: "65%"}}>

              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
          {/* ----------------------Dilijan */}
          <Card className={classes.root}>
            <CardActionArea component={Link} to="/dilijanHotels">
              <CardMedia
                className={classes.media}
                image={url[3]}
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
            <CardActions style={{marginLeft: "65%"}}>

              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
          {/* ---------------------Sevan */}
          <Card className={classes.root}>
            <CardActionArea component={Link} to="/sevanHotels">
              <CardMedia
                className={classes.media}
                image={url[4]}
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
            <CardActions style={{marginLeft: "65%"}}>

              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
          {/* ----------------------Jermuk */}
          <Card className={classes.root}>
            <CardActionArea component={Link} to="/jermukHotels">
              <CardMedia
                className={classes.media}
                image={url[5]}
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
            <CardActions style={{marginLeft: "65%"}}>

              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
          {/* ----------------------------Goris */}
          <Card className={classes.root}>
            <CardActionArea component={Link} to="/gorisHotels">
              <CardMedia
                className={classes.media}
                image={url[6]}
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
            <CardActions style={{marginLeft: "65%"}}>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </>
  );
}