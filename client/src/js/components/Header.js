/* headerLogo */
import React from 'react';
import { Figure } from 'react-bootstrap';
import logo from '../../img/MYtineraryLogo.jpg';
//import '../../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <Figure>
          <Figure.Image
            width={500}
            height={200}
            alt="171x180"
            src={logo}
            rounded
        />
        </Figure>
      </>
    );
  }
}

export default Header;