import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
import Vehicles from './components/pages/Vehicles';
import User from './components/pages/User';
import YerevanHotels from './components/hotels/YerevanHotels'
import TsaghkadzorHotels from './components/hotels/TsaghkadzorHotels'
import DilijanHotels from './components/hotels/DilijanHotels'
import SevanHotels from './components/hotels/SevanHotels'
import JermukHotels from './components/hotels/JermukHotels'
import GorisHotels from './components/hotels/GorisHotels';
import TourView from './components/tour/TourView';



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
              <Route path="/tours" exact component={Tours} />
              <Route path="/tours/:id" component={TourView} />
              <Route path="/contact" component={Contact} />
              <Route path="/vehicles" component={Vehicles} />
              <Route path="/hotelsList" component={HotelsList} />
              <Route path="/yerevanHotels" component={YerevanHotels} />
              <Route path="/tsaghkadzorHotels" component={TsaghkadzorHotels} />
              <Route path="/dilijanHotels" component={DilijanHotels} />
              <Route path="/sevanHotels" component={SevanHotels} />
              <Route path="/jermukHotels" component={JermukHotels} />
              <Route path="/gorisHotels" component={GorisHotels} />
              <Route path="/carRental" component={CarRental} />
              <Route path="/user" component={User} />
              <Route path="/" exact component={Home} />
              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/services" component={Services} />
              <Route path="/tours" exact component={Tours} />
              <Route path="/tours/:id" component={TourView} />
              <Route path="/contact" component={Contact} />
              <Route path="/vehicles" component={Vehicles} />
              <Route path="/hotelsList" component={HotelsList} />
              <Route path="/yerevanHotels" component={YerevanHotels} />
              <Route path="/tsaghkadzorHotels" component={TsaghkadzorHotels} />
              <Route path="/dilijanHotels" component={DilijanHotels} />
              <Route path="/sevanHotels" component={SevanHotels} />
              <Route path="/jermukHotels" component={JermukHotels} />
              <Route path="/gorisHotels" component={GorisHotels} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path="/" exact component={Home} />
              <Redirect to="/" />
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

