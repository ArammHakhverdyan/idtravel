import React from 'react';
import { Container, Box, } from '@material-ui/core/';
import TourLists from '../tour/TourLists';

function Tours() {
    return (
        <Container>
            <Box py={4}>
                <TourLists />
            </Box>
        </Container>
    )
}

export default Tours