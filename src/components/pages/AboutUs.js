import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid } from '@material-ui/core/';
import ImageHeader from '../shared/ImageHeader';
import { LoyaltyOutlined, ExploreOutlined, CardTravelOutlined } from '@material-ui/icons';
import { storageRef } from '../../config/config';




function AboutUs() {
    const [url, setUrl] = useState(["", ""])
    useEffect(() => {
        const a = storageRef.child('Images/aboutUs/garni.jpg')
        const b = storageRef.child('Images/aboutUs/aboutUs.jpg')
        const images = [a, b]
        images.map(function (item, index) {
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
                    default: {
                        return
                    }
                }
            })
        })
    }, [])

    return (
        <>
            <ImageHeader text="About Us" backgroundImage={url[0]} />
            <Container>
                <Grid style={{ padding: "60px 0" }} container spacing={3}>
                    <Grid item sm={6}>
                        <img style={{ maxWidth: "100%" }} src={url[1]} alt="" />
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant="h4" gutterBottom>
                            What is Lorem Ipsum?
                        </Typography>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Box bgcolor="#f4f6fa" textAlign="center">
                <Container>
                    <Grid style={{ padding: "60px 0" }} container spacing={6}>
                        <Grid item sm={4}>
                            <ExploreOutlined style={{ fontSize: 60, color: "#009688" }} />
                            <Typography variant="h5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <LoyaltyOutlined style={{ fontSize: 60, color: "#009688" }} />
                            <Typography variant="h5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Typography>
                        </Grid>
                        <Grid item sm={4}>
                            <CardTravelOutlined style={{ fontSize: 60, color: "#009688" }} />
                            <Typography variant="h5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}


export default AboutUs;