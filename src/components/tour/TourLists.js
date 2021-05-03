import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { db } from '../../config/config';


const TourLists = (props) => {
    let { url } = useRouteMatch();

    // const [tours, setTours] = useState([])

    // const fetchTours = async () => {
    //     const response = db.collection('tours');
    //     const data = await response.get();
    //     data.docs.forEach(item => {
    //         setTours([...tours, item.data()])
    //     })
    // }
    // useEffect(() => {
    //     fetchTours();
    // }, [])

    const tours = [
        {
            id: 1,
            imgUrl: "http://fairytour.am/upload/nyuter/40b265.jpg",
            title: "Georgia, Armenia and Iran",
            date: "15.03.2021-22.03.2021",
            description: "This tour shows you all the treasures of these 3 amazing countries – from the legendary UNESCO World Heritage Sites, spectacular natural beauty, mountain monasteries, ancient trade route caravanseries and unique cuisines, to the hidden gems of local lives. They are the iconic witnesses of time long past, this is where Europe and the Middle East meet with Central Asia. Follow in pilgrims’ footsteps and explore the history, spirit and the diversity of this incredible region. It’s time to discover amazing countries of the Silk Road!",
            price: "300$",
            day: 1,
        },
        {
            id: 2,
            imgUrl: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            title: "asd",
            date: "dsa",
            description: "gfhgfhgfhf!",
            price: "10$",
            day: 2,
        },
    ]

    return (
        <Grid container spacing={3}>
            {tours && tours.map((item) =>
                <Grid item xs={4} key={item.date}>
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
                                    <Typography variant="body1" color="textSecondary">
                                        {item.date}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                        <CardActions style={{ justifyContent: "center" }}>
                            <Button color="primary">
                                Book Now
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )}
        </Grid>
    )
}

export default TourLists;

