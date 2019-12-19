
import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from "../../img/circled-right-2.png";
import '../../css/bodyLink.css';
import Videos1 from './videos1';
import Videos2 from './videos2';

class BodyLink extends React.Component {
  render() {
    return (
      <div className="body">
        <p>
          Find your perfect trip, designed by
        </p>
        <p>
          insiders who know and love their cities.
        </p>
        <nav>
          <h3>Start browsing</h3>
          <br></br>
          <Link to="/cities/all"> <img src={logo2} className="body-logo2" alt="logo2" /> </Link>
          <br></br>
          <br></br>
          <p>Want to build your own Mytinerary?</p>

          <Link className="body-link-createAccount" to="/users/addUser">Create Account</Link>
          <Link to="/login">Login</Link>
          {/*
          <Link to="/cities/addItinerary">Add Itinerary</Link>
          <Link to="/cities/itineraries">Test - ItineraryList</Link>
          */}
        </nav>
        <br></br>
        <div className="videos">
          <h6>Paris</h6>
          <Videos1 />
          <h6>Buenos Aires</h6>
          <Videos2 />
        </div>
      </div>
    );
  }
}

export default BodyLink;