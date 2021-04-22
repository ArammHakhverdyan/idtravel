import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Container, createMuiTheme, ThemeProvider, Toolbar, Box, Typography } from "@material-ui/core";
import Navbar from '../layout/navBar';


const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: 'black',
                backgroundColor: "#fff",
            },
        },
    },
});

function Header() {
    return (
        <ThemeProvider theme={theme} >
            <AppBar position="static" >
                <Toolbar>
                    <Container>
                        <Box display="flex" justifyContent="space-between" alignItems="center" py={1}>
                            <Link to="/">
                                <Typography variant="h3">IDTRavel</Typography>
                            </Link>
                            <Navbar />
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header