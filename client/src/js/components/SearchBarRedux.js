import React from 'react';
import { connect } from "react-redux";
import { setFilterText2 } from '../actions/index';

class SearchBarRedux extends React.Component {
  constructor(props) {
    super(props);
        
  }
  render() {
    
    return (
      <>
      <h2><center>Cities List</center></h2>
      <form>
        <input 
          style={{ color: 'red' }}
          type="text"
          placeholder="Search REDUX..."
          onChange = {(e) => this.props.dispatch(setFilterText2(e.target.value))}
        />
      </form>
      
      </>
    );
  }
}

export default connect()(SearchBarRedux);