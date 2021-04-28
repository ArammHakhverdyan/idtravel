import React from 'react';
import { Container, Box, } from '@material-ui/core/';
import TourLists from '../tour/TourLists';
import TourView from '../tour/TourView';

const data = [
    {
        imgUrl: "http://fairytour.am/upload/nyuter/40b265.jpg",
        title: "Georgia, Armenia and Iran",
        date: "15.03.2021-22.03.2021",
        description: "This tour shows you all the treasures of these 3 amazing countries – from the legendary UNESCO World Heritage Sites, spectacular natural beauty, mountain monasteries, ancient trade route caravanseries and unique cuisines, to the hidden gems of local lives. They are the iconic witnesses of time long past, this is where Europe and the Middle East meet with Central Asia. Follow in pilgrims’ footsteps and explore the history, spirit and the diversity of this incredible region. It’s time to discover amazing countries of the Silk Road!",
        price: "300$",
        day: 1,
    },
    {
        imgUrl: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        title: "asd",
        date: "dsa",
        description: "gfhgfhgfhf!",
        price: "10$",
        day: 2,
    },
]

function Tours() {

    return (
        <Container>
            <Box py={4}>
                <TourLists data={data} />
                <TourView data={data} />
            </Box>
        </Container>
    )
}

export default Tours