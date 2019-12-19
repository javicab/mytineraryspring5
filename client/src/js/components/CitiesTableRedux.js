import React from 'react';
import { Figure , Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { setCityIdSelected } from '../actions/index';
import { urlImages } from "../constants/action-types";


class CitiesTableRedux extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
        //localFilterText2: '',
        //remoteCities: []
    }

    this.handleLinkOnClick = this.handleLinkOnClick.bind(this);
  }

  handleLinkOnClick(city_id, e){
    //alert(city_id, e);
    this.props.dispatch(setCityIdSelected(city_id));
    console.log("click city_id, evento", city_id, e);
  }


  render() {
    
    let ultimoIndexFilterText2 = (this.props.filterText2).length -1;
    let filter = ' ';
    filter = this.props.filterText2[ultimoIndexFilterText2];
    console.log('filter');
    console.log(filter);
        
    const rows = [];
    
    this.props.remoteCities.map((city) => {
      if (!city.name.startsWith(filter) === true) { return ""; }
      rows.push(
        <>
        <tr >{/*key={city._id}>*/}
        <td><Link to={`/cities/itineraries/${city._id}`} onClick={this.handleLinkOnClick.bind(this,city._id)}>{city.name}</Link></td>
        <td>
        <Figure>
            <Figure.Caption>
              {city.country} {/* {city.name}*/}
            </Figure.Caption>
          
          <Figure.Image
            width={500}
            height={200}
            alt="171x180"
            src={`${urlImages}images/cities/${city.name}.jpg`}
            /*src={`${urlImages}images/cities/${city.country}/${city.name}.jpg`}*/
            rounded
          />
          </Figure>
          </td>
        </tr>
        </>
      );
    });

    
    return (
      <>    
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Cities</th>
            <th>Countries</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      </>
    );
  }
}



const mapStateToProps = (state) => {
  
  return {
    remoteCities: state.remoteCities,
    //localFilterText2: state.filterText2,
    filterText2: state.filterText2
  };
}

export default connect(mapStateToProps)(CitiesTableRedux);