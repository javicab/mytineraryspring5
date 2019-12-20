import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setUserLogged, setToken } from "../actions/index";

//import { Redirect } from 'react-router-dom'
//import { urlImages } from "../constants/action-types";
import { Figure } from 'react-bootstrap';
//import { decode } from 'jsonwebtoken';

var jwtDecode = require('jwt-decode');

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: this.props.location.pathname.substring(18)
        }
    }
      
    componentDidMount() {
        console.log(this.props.location.pathname) // ok aca esta el token en user/userProfile/'...'
        let token = this.props.location.pathname.substring(18);
        let decoded = jwtDecode(token);
        //aca poner el dispatch del profile a redux
        // y el token post google a redux
        console.log('dispatch userProfile', decoded)
        this.props.dispatch(setUserLogged(decoded));
        console.log('dispatch token', token)
        this.props.dispatch(setToken(token));
    }

    render() { 
           console.log('token', this.props.location.pathname.substring(18))
           let token = this.props.location.pathname.substring(18);
           let decoded = jwtDecode(token);
           console.log('decode token', decoded);
           //JSON.stringify(decoded);
           console.log(decoded)
           console.log(decoded.email);
           console.log(decoded.userName);
           console.log(decoded.profilePic);
                return (
                    <div>
                        <h6>Profile Page</h6>
                        <h6>Token {this.state.token}</h6>
                        <h6>id: {decoded.email}</h6>
                        <div>
                            <Figure>
                                <Figure.Image
                                    width={75}
                                    height={75}
                                    alt="75x75"
                                    src={decoded.profilePic}
                                    roundedCircle
                                />
                                <Figure.Caption>
                                    {decoded.userName}
                                </Figure.Caption>
                            </Figure>
                        
                        
                        </div>
                    </div>
                )
           // } else {
                //return (<Redirect to='/login'/>)
            }
        }
    

function mapStateToProps(state){
    return {
        token: state.token,
    }
  }

export default connect(mapStateToProps)(UserProfile); // 


