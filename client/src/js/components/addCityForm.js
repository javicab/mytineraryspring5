import React, { Component } from "react";
import { connect } from "react-redux";
import { addCity, setDataCity } from "../actions/index";

class AddCityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        country: "",
        name: ""      
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { country } = this.state;
    const { name } = this.state;
        
    /*
    // TODO Hacer validaciones****
    // campos no vacios y no duplicados en la base
    */

    const city = {
      country: country,
      name: name      
    }
    
    console.log('city')
    console.log(city); 
    var jsonString = JSON.stringify(city)
    console.log(jsonString)
    this.props.dispatch(setDataCity(city));
    
    this.setState({ country: "" });
    this.setState({ name: "" });
  }

  render() {
    
    const { country } = this.state;
    const { name } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create City</h1>
        <div>
          <p>Enter City Name:</p>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <p>Enter Country:</p>
          <input
            type="text"
            id="country"
            value={country}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

export default connect()(AddCityForm);
