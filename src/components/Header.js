import React from 'react';
import { AppBar, Container, createMuiTheme, makeStyles, ThemeProvider, Toolbar } from "@material-ui/core"
import Navigation from './Navigation';
import Logo from './Logo';



const useStyles = makeStyles({
    navDisplayFlex: {
        display: "flex",
        justifyContent: "space-between"
    }
});


const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: 'black',
                backgroundColor: "#82b04d",
            },
        },
    },
});



function Header() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme} >
            <AppBar position="static" >
                <Toolbar >
                    <Container className="MuiContainer-root" >
                        <Logo />
                        <Navigation />
                    </Container>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header