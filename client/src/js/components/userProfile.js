import React, {Component} from 'react';
//import NavBar from './NavBar.js'
//import '../styles/App.css'
import {connect} from 'react-redux';
//import {storeTokenUser, getFavs} from '../actions/usersActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { urlImages } from "../constants/action-types";
import {Image , Navbar} from 'react-bootstrap';
//import Logout from './Logout'

//let localStorage = window.localStorage;

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
        this.setState({ url: this.props.location.pathname.substring(18) });
        console.log('url', this.url);
    }

    render() { 
           console.log('token', this.props.location.pathname.substring(18))
           var token = this.props.location.pathname.substring(18);
           var decoded = jwtDecode(token);
           console.log('decode token');
           console.log(decoded);
                return (
                    <div>
                        
                        <div>
                            <h1>Profile Page</h1>
                            <h2>Token {this.state.token}</h2>
                            <div className="text-center">
                                {/*<Image src={imageToRender} roundedCircle className="mb-3 userImg img-responsive center-block"/>*/}
                                <h1>imagen profile</h1>
                            </div>
                            {/*<span> hola soy {decodedToken.username}</span> */}
                        </div>
                </div> )
           // } else {
                //return (<Redirect to='/login'/>)
            }
        }
    

/*
const mapStateToProps = (state) => { 
    return {
        //token is obtained by param, user info is obtained by decoding the token
        //favItinsInfo: state.userReducer.userFavs    
    }
} 
*/
function mapStateToProps(state){
    return {
        token: state.token,
    }
  }

export default connect(mapStateToProps)(UserProfile); // 


//clean local storage:
//const storedToken = localStorage.getItem("token");
// if (storedToken){
//     let decodedData = decode(storedToken, { header: true });
//     let expirationDate = decodedData.exp;
//      var current_time = Date.now() / 1000;
//      if(expirationDate < current_time)
//      {
//          localStorage.removeItem("token");
//      }
//   }



/*
//mapstateToProps
function mapStateToProps(state){
  return {
      token: state.token,
  }
}

export default connect(mapStateToProps)(loginForm);*/