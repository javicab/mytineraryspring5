/* footer */
import React from 'react';
import { Figure , Grid, Row, Col, Container, Image } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import logo3 from '../../img/homeIcon.png';
//import '../../css/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <>
      <Row className="justify-content-center">
    <Col xs={12} sm={4} md={4}> 
        <nav>
          <Link to="/">
            {/*<img src={logo3} className="footer-logo3" alt="logo3" />*/}
            
        <Figure>
          <Figure.Image
            width={50}
            height={5}
            alt="171x180"
            src={logo3}
            rounded
        />
        </Figure>
       
          </Link>
        </nav>
        <div>
          <Route exact={true} path="/" />
        </div>
        </Col>
</Row>
      </>
    );
  }
}

export default Footer;