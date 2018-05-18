import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class NewUser extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSignup = () => {
    axios
      .post("http://localhost:5000/api/users", this.state)
      .then(res => this.props.history.push('/login'))
      .catch(err => console.log(err));
    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <input 
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <button onClick={() => this.handleSignup()}>sign up</button>
      </div>
    )
  }
}

export default withRouter(NewUser);