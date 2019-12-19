import React, { Component } from "react";
import { connect } from "react-redux";
import { getToken } from "../actions/index";
import { setUserLogged } from "../actions/index";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        logged: "1"
              
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { logged } = this.state;
            
    /*
    // TODO Hacer validaciones ****
    // campo: 1 logged , 0 - not logged
    */

    const logout = {
      logged: logged     
    }
    
    console.log('logout')
    console.log(logout); 
    var jsonString = JSON.stringify(logout)
    console.log(jsonString)
    this.props.dispatch(setUserLogged(logout));
    // borrar token
    
    this.setState({ logged: "0" });
    
  }

  render() {
    
    const { logged } = this.state;
        
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Logout Form</h1>
        <div>
          <p>Enter Logged Value (0):</p>
          <input
            type="text"
            id="logged"
            value={logged}
            onChange={this.handleChange}
          />
          </div>
        <button type="submit">LOGOUT</button>
      </form>
    );
  }
}

export default connect()(Logout);