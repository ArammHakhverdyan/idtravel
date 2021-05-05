import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, Box } from '@material-ui/core/';
import TourTimeLine from '../tour/TourTimeLine';
import { useParams } from 'react-router';
import { db } from '../../config/config';
import TourBook from './TourBook';

const TourView = () => {
    let { id } = useParams();
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
        <Container>
            <Box py={4}>
                {tours.filter(tour => tour.id === id)
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
                                <TourBook />
                            </Grid>
                        </Grid>
                    )}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TourTimeLine data={tours} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default TourView;