import React from 'react';
import { Grid, Typography, Button, Container, Box } from '@material-ui/core/';
import TourTimeLine from '../tour/TourTimeLine';
import { useParams } from 'react-router';

const TourView = () => {

    const data = [
        {
            id: "1",
            imgUrl: "http://fairytour.am/upload/nyuter/40b265.jpg",
            title: "Georgia, Armenia and Iran",
            date: "15.03.2021-22.03.2021",
            description: "This tour shows you all the treasures of these 3 amazing countries – from the legendary UNESCO World Heritage Sites, spectacular natural beauty, mountain monasteries, ancient trade route caravanseries and unique cuisines, to the hidden gems of local lives. They are the iconic witnesses of time long past, this is where Europe and the Middle East meet with Central Asia. Follow in pilgrims’ footsteps and explore the history, spirit and the diversity of this incredible region. It’s time to discover amazing countries of the Silk Road!",
            price: "300$",
            day: 1,
        },
        {
            id: "2",
            imgUrl: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            title: "asd",
            date: "dsa",
            description: "gfhgfhgfhf!",
            price: "10$",
            day: 2,
        },
    ]

    let { id } = useParams();

    return (
        <Container>
            <Box py={4}>
                {data.filter(tour => tour.id === id)
                    .map((tour) =>
                        <Grid key={tour.id} container spacing={3}>
                            <Grid item xs={5}>
                                <img style={{ width: "100%" }} src={tour.imgUrl} alt="" />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography gutterBottom variant="h4">
                                    {tour.title}
                                </Typography>
                                <Typography gutterBottom variant="body1">
                                    {tour.description}
                                </Typography>
                                <Typography gutterBottom variant="h6">
                                    Price {tour.price}
                                </Typography>
                                <Button variant="outlined" color="primary">
                                    Book Now
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TourTimeLine data={data} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default TourView;