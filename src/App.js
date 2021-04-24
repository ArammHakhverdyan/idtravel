import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import Tours from './components/pages/Tours';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { auth, db } from './config/config'
import { connect } from 'react-redux';
import HotelsList from './components/pages/HotelsList';
import CarRental from './components/pages/CarRental';
import Vehicles from './Vehicles';


class App extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(this.authStateChanged)
  }
  authStateChanged = async (user) => {
    const userData = user ? { email: user.email, uid: user.uid } : user;

    if (userData) {
      const docRef = db.collection('users').doc(userData.uid);
      const doc = await docRef.get()
      userData.info = doc.data()
    }
    this.props.dispatch({
      type: "SET_LOGGEDIN_USER",
      user: userData
    })
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Router>
          <Header />
          {this.props.loggedInUser ? (
            <Switch>
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/services" component={Services} />
              <Route path="/tours" component={Tours} />
              <Route path="/contact" component={Contact} />
              <Route path="/hotelsList" component={HotelsList} />
              <Route path="/carRental" component={CarRental} />
              <Route path="/vehicles" component={Vehicles} />
              <Route path="/" exact component={Home} />
              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/services" component={Services} />
              <Route path="/tours" component={Tours} />
              <Route path="/contact" component={Contact} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path="/" exact component={Home} />
            </Switch>
          )}

          <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  }
}

export default connect(mapStateToProps)(App);

