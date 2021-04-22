import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import Tours from './components/pages/Tours';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/tours" component={Tours} />
            <Route path="/contact" component={Contact} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;


