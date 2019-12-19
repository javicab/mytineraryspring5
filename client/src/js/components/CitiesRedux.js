import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataCities } from "../actions/index";
import SearchBarRedux from './SearchBarRedux';
import CitiesTableRedux from './CitiesTableRedux';

class citiesRedux extends Component {

componentDidMount() {
  if (this.props.remoteCities){
    this.props.dispatch(getDataCities());
  }
}

render() {
  return (
        <div>
          <SearchBarRedux />
          <CitiesTableRedux />
        </div>

);
  }
}

function mapStateToProps(state){
  return {
    remoteCities: state.remoteCities
  }
}

export default connect(mapStateToProps, null)(citiesRedux);