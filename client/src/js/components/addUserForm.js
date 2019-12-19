import React, { Component } from "react";
import { connect } from "react-redux";
import { setDataUser } from "../actions/index";
/*
function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    setDataUser: user => dispatch(setDataUser(user))
  };
}
*/
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        profilePic: "",
        email: "",
        userName: "",
        password: "",
        password2: ""
      
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { profilePic } = this.state;
    const { email } = this.state;
    const { userName } = this.state;
    const { password } = this.state;
    const { password2 } = this.state;
    
    /*
    // TODO Hacer validaciones****
    // de password , que no exista el username e email en la base etc
    */

    const user = {
      profilePic: profilePic,
      email: email,
      userName: userName,
      password: password,
      active: '1'
      
    }
    
    console.log('user')
    console.log(user); 
    var jsonString = JSON.stringify(user)
    console.log(jsonString)
    this.props.dispatch(setDataUser(user));
    
    this.setState({ title: "" });
    this.setState({ profilePic: "" });
    this.setState({ email: "" });
    this.setState({ userName: "" });
    this.setState({ password: "" });
    this.setState({ password2: "" });
  }

  render() {
    
    const { profilePic } = this.state;
    const { email } = this.state;
    const { userName } = this.state;
    const { password } = this.state;
    const { password2 } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Account</h1>
        <div>
          <p>Enter your profilePic:</p>
          <input
            type="text"
            id="profilePic"
            value={profilePic}
            onChange={this.handleChange}
          />
          <p>Enter your email:</p>
          <input
            type="text"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          <p>Enter your UserName:</p>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={this.handleChange}
          />
          <p>Enter your password:</p>
          <input
            type="text"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          <p>Re-Enter your password:</p>
          <input
            type="text"
            id="password2"
            value={password2}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

//export default connect(null, mapDispatchToProps)(AddUserForm);
export default connect()(UserForm);
