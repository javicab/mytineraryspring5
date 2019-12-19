import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch} from 'react-router-dom';
import '../../css/LandingPage.css';
import loginForm from './loginForm';
import logoutForm from './logoutForm';
import HeaderTitle from './HeaderTitle';
import Footer from './Footer';
import Header from './Header';
import BodyLink from './bodyLink';
import CitiesRedux from './CitiesRedux';
import ItineraryList from './ItineraryList';
import ActivityList from './ActivityList';
import AddCityForm from './addCityForm';
import AddItineraryForm from './addItineraryForm';
import AddUserForm from './addUserForm';
import UserProfile from './userProfile';

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="center">
        <HeaderTitle />
        <Header />
        <div>
          <Switch> {/* aca van las url del backend */}
            <Route path="/" exact={true} component={BodyLink} />
            <Route path="/cities/all" component={CitiesRedux} />
            <Route path="/cities/itineraries/:id" component={ItineraryList} />

            <Route path="/cities/activities/:id" exact strict component={ActivityList} />

            <Route path="/login" component={loginForm} />
            <Route path="/logout" component={logoutForm} />
            <Route path="/users/addUser/" component={AddUserForm} />

            <Route path="/cities/addCity/" component={AddCityForm} />
            <Route path="/cities/addItineraryForm" component={AddItineraryForm} />
            <Route path="/user/userProfile:token?" component={UserProfile} />
            
          </Switch>

        </div>
        <Footer />
        </Container>
      </>
    );
  }
}

export default LandingPage;