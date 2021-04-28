import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';



const TourLists = (props) => {

    const data = props.data;

    return (
        <Grid container spacing={3}>
            {data.map((item) =>
                <Grid item xs={4} key={item.date}>
                    <Card>
                        <CardActionArea>
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

