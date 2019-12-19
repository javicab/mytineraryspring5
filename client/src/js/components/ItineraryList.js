import React, { Component } from "react";
import {Accordion, Card, Figure } from 'react-bootstrap';
import { connect } from "react-redux";
import { getDataItinerariesByIdCity, setItineraryIdSelected } from "../actions/index";
import '../../css/bodyLink.css';

import { urlImages } from "../constants/action-types";

class ItineraryList extends Component {

  constructor(props){
    super(props);

    this.state = {
      //localFilterText2: '',
      //remoteCities: []
    }

    this.handleLinkOnClick = this.handleLinkOnClick.bind(this);
  }

  handleLinkOnClick(itinerary_id, e){
    this.props.dispatch(setItineraryIdSelected(itinerary_id));
    console.log("click itinerary_id, evento", itinerary_id, e);
  }
 
  componentDidMount() {
    this.props.dispatch(getDataItinerariesByIdCity(this.props.cityIdSelected));
  }
  
  

  render() {
	
    let ultimoIndexSelectedCityId = (this.props.cityIdSelected).length -1;
    let city_id = this.props.cityIdSelected[ultimoIndexSelectedCityId];
    console.log('index city_id');
    console.log(ultimoIndexSelectedCityId,city_id);
    const rows = [];
    this.props.remoteItineraries.map((it) => {
        if (it.cityId.startsWith(city_id) === false) { return ""; }
          rows.push(
            <>         
              <tr key={it._id}>
                <td>
                  <Figure>
                    <Figure.Image
                      width={100}
                      height={100}
                      alt="100x100"
                      src={`${urlImages}images/users/${it.creatorId}.png`}
                      roundedCircle
                    />
                    <Figure.Caption>
                      {it.creatorId}
                    </Figure.Caption>
                  </Figure>
                </td>
                <td>
                  <Accordion>
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>{it.title}</Card.Header>
                    <Card.Body>
                      <Card.Title>Likes: 50 {' '} {it.duration} Hours {' '} $ {it.price}</Card.Title>
                      <Card.Text>
                        {it.hashtag}
                      </Card.Text>
                  </Card.Body>
                  <Accordion.Toggle as={Card.Footer} eventKey="0">
                    ++ View All ++
                  </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>TODO Carrousel Imagenes Activities</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    </Accordion>
                  </td>
                </tr>
            </>
    );
  });
    return (
      <>
      <table>
        <thead>
          <tr>
            <th>Available MYtineraries:</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </>
    );
  }
}

export default connect((state) => ({
  remoteItineraries: state.remoteItineraries,
  cityIdSelected: state.cityIdSelected
}))(ItineraryList);
//export default connect((state) => ({remoteItineraries: state.remoteItineraries}))(ItineraryList);
