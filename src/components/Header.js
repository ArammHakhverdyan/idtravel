import React from 'react';
import { AppBar, Container, createMuiTheme, ThemeProvider, Toolbar, Box } from "@material-ui/core";
import Navigation from './Navigation';
import Logo from './Logo';

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
                            <Logo />
                            <Navigation />
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header