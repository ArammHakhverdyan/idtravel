import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core/';
import TourTimeLine from '../tour/TourTimeLine';

const TourView = (props) => {
    const data = props.data;

    return (
        <div>
            <Grid container spacing={3}>
                {data.map((tour) =>
                    <>
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
                    </>
                )}
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TourTimeLine data={data} />
                </Grid>
            </Grid>
        </div>
    )
}

export default TourView;