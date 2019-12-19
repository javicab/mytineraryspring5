import React, { Component } from "react";
import { connect } from "react-redux";
import { setDataItinerary} from "../actions/index";
/*
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}
*/
class ItineraryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: "",
      duration: "",
      price:"",
      hashtag: [""],
      cityId:"",
      userId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { rating } = this.state;
    const { duration } = this.state;
    const { price } = this.state;
    const { hashtag } = this.state;
    const { cityId } = this.state;
    const { userId } = this.state;

    const itinerary = {
      title: title,
      rating: rating,
      duration: duration,
      price: price,
      hashtag: hashtag,
      cityId: cityId,
      userId: userId
    }

    console.log('itinerary')
    console.log(itinerary); 
    var jsonString = JSON.stringify(itinerary)
    console.log(jsonString)
    this.props.dispatch(setDataItinerary(itinerary));




    this.props.addArticle({ title });
    this.setState({ title: "" });
    this.setState({ rating: "" });
    this.setState({ duration: "" });
    this.setState({ price: "" });
    this.setState({ hashtag: "" });
    this.setState({ cityId: "" });
    this.setState({ userId: "" });
  }
  render() {
    const { title } = this.state;
    const { rating } = this.state;
    const { duration } = this.state;
    const { price } = this.state;
    const { hashtag } = this.state;
    const { cityId } = this.state;
    const { userId } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Itinerary</h1>
        <div>
        <p>Enter Itinerary Name:</p>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <p>Enter Rating:</p>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={this.handleChange}
          />
          <p>Enter Duration:</p>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={this.handleChange}
          />
          <p>Price:</p>
          <input
            type="text"
            id="price"
            value={price}
            onChange={this.handleChange}
          />
          <p>Hashtags:</p>
          <input
            type="text"
            id="hashtag"
            value={hashtag}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default connect()(ItineraryForm);
//export default connect(null, mapDispatchToProps)(ItineraryForm);
