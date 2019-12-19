import React from 'react';
import { connect } from 'react-redux';

class CitiesTable extends React.Component {
  
  render() {
    const filterText = this.props.filterText;
    const rows = [];
    this.props.remoteCities.filter((city) => {
      if (!city.name.startsWith(filterText) === true) {
        return '';
      }
      rows.push(
        <tr key={city._id}>
          <td>{city.country}</td>
          <td>{city.name}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>City Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>  
    );
  }
}


const mapStateToProps = (state) => {
  return {
    remoteCities: state.remoteCities, // nuevo array identico al original ** 
  };
}

export default connect(mapStateToProps)(CitiesTable);