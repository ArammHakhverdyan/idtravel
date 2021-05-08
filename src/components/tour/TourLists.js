import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { db } from '../../config/config';

const TourLists = () => {
  let { url } = useRouteMatch();

  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    const response = db.collection('tours');
    const data = await response.get();
    const dataArr = [];
    data.docs.forEach(item => {
      dataArr.push(item.data())
    })
    setTours(dataArr)
  }
  useEffect(() => {
    fetchTours();
  }, [])


  return (
    <Grid container spacing={3}>
      {tours && tours.map((item) =>
        <Grid item xs={4} key={item.id}>
          <Card>
            <CardActionArea>
              <Link to={`${url}/${item.id}`} style={{ textDecoration: "none" }}>
                <CardMedia component="img" alt="" height="240"
                  image={item.imgUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography align="center" variant="body1" color="textSecondary">
                    {item.date}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default TourLists;

