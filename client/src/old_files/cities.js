/* cities */
import React from 'react';
import '../../css/cities.css';
import Videos from './videos';

class Cities extends React.Component {
  render() {
    return (
      <div className="cities">
        <h1>Cities</h1>
        <ul>
          <li>*********</li>
          <li>Amsterdam</li>
          <li>Buenos Aires</li>
          <li>New York</li>
          <li>Paris</li>
        </ul>
        <Videos />
      </div>
    );
  }
}

export default Cities