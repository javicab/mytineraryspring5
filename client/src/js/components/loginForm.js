import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getToken } from "../actions/index";
import logoGoogleNormal from "../../img/btn_google_signin_dark_normal_web@2x.png";

const handleCheckbox = e => {
  console.log('click checkbox')
};

class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        logged: false
         
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    event.preventDefault();
    console.log('The link was clicked.');
    this.setState({ logged: true });
  }

  
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    const { password } = this.state;
        
    /*
    // TODO Hacer validaciones minimas****
    // campos no vacios 
    */

    const login = {
      email: email,
      password: password      
    }
    
    console.log('login')
    console.log(login); 
    var jsonString = JSON.stringify(login)
    console.log(jsonString)
    this.props.dispatch(getToken(login));
    let newDate = new Date();
    console.log("tokenredux", this.props.token)

    this.setState({ logged: true });

       // validar que haya token y sea valido (no expirado)
       if(this.props.token!=="" && this.props.token < newDate ){
        return ( <Redirect to="/cities/all"></Redirect>)
      } else { return (<Redirect to="/cities/all"></Redirect>)}
    
    //this.setState({ email: "" });
    //this.setState({ password: "" });
    

    }

  render() {

    let newDate = new Date;
    if (this.state.logged) {
      return (<Redirect to="/cities/all" />);
    }
    if(this.props.token.token!=="" && this.props.token.expira < newDate ){
      return ( <Redirect to="/cities/all"></Redirect>)
    }

    const { email } = this.state;
    const { password } = this.state;
        
        return (
          <>
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <div>
              <p>Enter email:</p>
              <input
                type="text"
                placeholder='anonymous@mytinerary.com'
                id="email"
                value={email}
                onChange={this.handleChange}
              />
              <p>Enter Password:</p>
              <input
                type="text"
                placeholder='1234'
                id="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
            <input type='checkbox' name='remember' onChange={this.handleCheckbox} />
            <p>Remember me</p>
            </div>
            <button type="submit">OK</button>
            </form>
            <p>{ ' ' }</p>
            
            <a href="http://localhost:5000/auth/google"><img src={logoGoogleNormal} alt="Google" /></a>

          <p>Don't have a Mytinerary account yet?</p>
          <p>You should create one! It's totally free</p>
          <p>and only takes a minute.</p>
          <p>{ ' ' }</p>
          <Link to="/users/addUser">Create Account</Link>
          </>
        );
    }
  }


//mapstateToProps
function mapStateToProps(state){
  return {
      token: state.token,
  }
}

export default connect(mapStateToProps)(loginForm);
