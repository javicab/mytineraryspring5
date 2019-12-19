import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataCities } from "../actions/index";
import FilterableCitiesTable from './FilterableCitiesTable';

class Post extends Component {
    
  componentDidMount() {
    this.props.getDataCities();
  }

  render() {
    return (
      <>
      {/*
      <ul>
        {this.props.articles.map(el => (
          <li key={el._id}>{el.country} &nbsp; {el.name}</li>
        ))}
      </ul>
        */}
     <FilterableCitiesTable /> {/*remoteCities = {this.props.remoteCities} */} 
     </>
    );
  }
}

/*
const mapStateToProps = (state) => {
  return {
    //articles: state.remoteArticles.slice(0, 10) // 10 cantidad de cities listadas
    //remoteCities: state.remoteCities.slice() // nuevo array identico al original
  };
}
*/

export default connect(null, { getDataCities })(Post);
