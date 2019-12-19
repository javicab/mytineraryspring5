import React, { Component } from "react";
import { connect } from "react-redux";
import { setDataComment } from "../actions/index";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
          texto: ""      
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
      const { texto } = this.state;
        
    /*
    // TODO Hacer validaciones****
    // campos no vacios
    */

    const comment = {
      
      texto: texto,
      date: "20191215", //TODO cambiar a fecha actual
      userId: "5df375034916bf0fcc184a7e", // id de anonymous, TODO cambiar a user logueado
      itineraryId: "5dd5d4a51c9d4400001ac966" // id de 'Up to Antics', TODO cambiar a Itinerario seleccionado      
    }
    
    console.log('comment')
    console.log(comment); 
    var jsonString = JSON.stringify(comment)
    console.log(jsonString)
    this.props.dispatch(setDataComment(comment));
    
    this.setState({ texto: "" });
  }

  render() {
    
    const { texto } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Comments</h1>
        <div>
          <p>Enter City Name:</p>
          <input
            type="text"
            id="texto"
            value={texto}
            onChange={this.handleChange}
          />
          <button type="submit">>></button>
        </div>
      </form>
    );
  }
}

export default connect()(CommentForm);
