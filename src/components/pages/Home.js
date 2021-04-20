import React from 'react';
import { Container, Box, Typography } from '@material-ui/core/';


function Home() {
    return (
        <Container>
            <Box py={4}>
                <Typography variant="h3">
                    Home page
                </Typography>
            </Box>
        </Container>
    )
}


export default Home;