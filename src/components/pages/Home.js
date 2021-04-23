import React from 'react';
import { Container, Box, Typography, Paper, Button } from '@material-ui/core/';
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../CarouselItems'
import img from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'



// function Home() {
//     return (
//         <Container>
//             {/* <Box py={4}>
//                 <Typography variant="h3">

//                 </Typography>
//             </Box> */}
//             <Carousel>
//                 {
//                     items.map((src, i) => <CarouselItem key={i} src={img} />)
//                 }
//             </Carousel>
//         </Container>
//     )
// }


export default Home;


function Home(props) {
    const items = [
        {
            img: img
        },
        {
            img: img2,
        },
        {
            img: img3,
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <div>
            <img className="carouselItemImg" alt="photo" src={props.item.img} />
            <p>{props.item.description}</p>
        </div>
    )
}