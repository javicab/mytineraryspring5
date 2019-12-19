import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataActivities , getDataActivitiesByIdItinerary } from "../actions/index";

class ActivityList extends Component {

  constructor(props){
    super(props);
    
  }
 
  componentDidMount() {
    this.props.dispatch(getDataActivitiesByIdItinerary(this.props.itineraryIdSelected));
  }



  render() {
    //TODO : cambiar imagen logo en Heather x la imagen de la ciudad 
    return (
      <>
      <h1>Activities:</h1>
      <ul className="body-link-ac">
        {this.props.remoteActivities.map(ac => (
          <li  key={ac._id}>
            {ac.name} &nbsp; {ac.address} &nbsp; {ac.activityPic} &nbsp; {ac.duration} &nbsp; {ac.price}
              &nbsp; {ac.description} &nbsp; {ac.itineraryId} 
          </li>
        ))}
      </ul>

      
      </>
    );
  }
}

export default connect((state) => ({
  remoteActivities: state.remoteActivities,
  itineraryIdSelected: state.itineraryIdSelected
}))(ActivityList);
//export default connect((state) => ({remoteActivities: state.remoteActivities})(ActivityList));