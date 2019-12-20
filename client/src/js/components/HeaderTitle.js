import React from 'react';
import { connect } from "react-redux";
import {Figure , Navbar, Nav, NavDropdown, Row, Col, Image } from 'react-bootstrap';
import menuIcon from '../../img/icon_menu.svg';
import { urlImages } from "../constants/action-types";

import '../../css/HeaderTitle.css';

class HeaderTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: false
        //url: this.props.location.pathname
    }
  }


  render() {
    let ultimoItenUserLoggedStore = this.props.userLogged.length;
    
    let user={
      username: "Anonymous",
      userProfilePic: "anonymous.png"
    }
    
    //let src = "{`${urlImages}images/users/${user.userProfilePic}`}"
    let datosUser = this.props.userLogged[ultimoItenUserLoggedStore - 1]

    if(datosUser.userName !== ""){
      user = {
        username: datosUser.userName,
        userProfilePic: datosUser.profilePic
      }

    
//src={`${urlImages}images/users/${user.userProfilePic}`}
    return (
        <Row>
          <Navbar bg="dark" variant="dark">
            <Col md="auto">
              <Nav className="mr-auto">
                <Navbar.Brand href="#home">
                  <NavDropdown title={<div>
                    <Figure>
                      <Figure.Image
                        width={75}
                        height={75}
                        alt="75x75"
                        src= {user.userProfilePic} // TODO usar ternary para cambiar de path si es anonymous o foto de google para evitar redundancia
                        roundedCircle
                      />
                      <Figure.Caption>
                        {user.username}
                      </Figure.Caption>
                      </Figure>
                        </div>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/users/addUser">Create Account</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                </Navbar.Brand>
              </Nav>
            </Col>
  {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
  {/*<Navbar.Collapse id="basic-navbar-nav">*/}
    {/*<Nav className="mr-auto">*/}
    <Col xs={6}>
      <Nav className="mr-auto">
        <Nav.Link href="#home"><h1>MyTinerary</h1></Nav.Link>
      </Nav>
    </Col>
    <Col md="auto">
      <Nav className="mr-auto">
        <NavDropdown title={<div className="pull-left">
                <Image className="d-inline-block align-top"
                            src={menuIcon} 
                            alt="menu"
                        />
                        </div>} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
      </Nav>
    </Col>
</Navbar>
</Row>
    );
                  } else {
                    
                    return (
                      
                      <Row>
                        <Navbar bg="dark" variant="dark">
                          <Col md="auto">
                            <Nav className="mr-auto">
                              <Navbar.Brand href="#home">
                                <NavDropdown title={<div>
                                  <Figure>
                                    <Figure.Image
                                      width={75}
                                      height={75}
                                      alt="75x75"
                                      src={`${urlImages}images/users/${user.userProfilePic}`} // TODO usar ternary para cambiar de path si es anonymous o foto de google para evitar redundancia
                                      roundedCircle
                                    />
                                    <Figure.Caption>
                                      {user.username}
                                    </Figure.Caption>
                                    </Figure>
                                      </div>} id="basic-nav-dropdown">
                                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                  <NavDropdown.Item href="/users/addUser">Create Account</NavDropdown.Item>
                                  <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                </NavDropdown>
                              </Navbar.Brand>
                            </Nav>
                          </Col>
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                  {/*<Nav className="mr-auto">*/}
                  <Col xs={6}>
                    <Nav className="mr-auto">
                      <Nav.Link href="#home"><h1>MyTinerary</h1></Nav.Link>
                    </Nav>
                  </Col>
                  <Col md="auto">
                    <Nav className="mr-auto">
                      <NavDropdown title={<div className="pull-left">
                              <Image className="d-inline-block align-top"
                                          src={menuIcon} 
                                          alt="menu"
                                      />
                                      </div>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                  </Col>
              </Navbar>
              </Row>
                  );
                  }

                 
  }
}

function mapStateToProps(state){
  return {
      userLogged: state.userLogged,
  }
}

export default connect(mapStateToProps)(HeaderTitle);