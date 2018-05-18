import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class LogIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = event => {
    const { username, password } = this.state;
    axios
      .post("http://localhost:5000/api/login", { username, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(err => console.log(err))
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
        <button onClick={() => this.handleLogin()}>login</button>
      </div>
    )
  }
}

export default withRouter(LogIn);