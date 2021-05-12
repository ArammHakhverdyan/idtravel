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
import { Link, useLocation } from 'react-router-dom';
import { db, storageRef } from '../../config/config';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 1,
    textAlign: "center",
  },
  media: {
    width: 350,
    height: 270,
  },
});

export default function MediaCard() {
  const { pathname } = useLocation()
  const classes = useStyles();
  const background = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f2/42/38/caption.jpg?w=1000&h=600&s=1"
  const [headerUrl, setHeaderUrl] = useState("")
  const [hotels, setHotels] = useState([])

  useEffect(async () => {
    const hotelsRef = db.collection("hotelLocations")
    const hl = await hotelsRef.get()
    const data = []
    const imgUrls = []
    hl.forEach((element) => {
      data.push(element.data())
      imgUrls.push(element.data().imgUrl)
    })
    const urls = await Promise.all(imgUrls.map((i) => {
      return storageRef.child(i).getDownloadURL()
    }))
    data.forEach((d, index) => {
      d.url = urls[index]
    })
    setHotels(data)
  }, [])



  useEffect(() => {
    const a = storageRef.child('Images/hotels/hotelsList-header.jpg')
    a.getDownloadURL().then((downloadURL) => {
      setHeaderUrl(downloadURL);
    }).catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          break;
        default:
          return
      }
    })
  }, [])


  return (
    <>
      <ImageHeader text="Hotels" backgroundImage={headerUrl} />
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <Grid container justifyContent="center" spacing={0} >
          {hotels.map((h, i) => (
            <Card key={i} className={classes.root}>
              <CardActionArea component={Link} to={`${pathname}/${h.name}`}>
                <CardMedia title="See hotels in Yerevan">
                  <img src={h.url} className={classes.media} alt="services" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {h.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {h.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" color="primary" component={Link} to={`${pathname}/${h.name}`}>
                  See Hotels
                   </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </div>
    </>
  );
}