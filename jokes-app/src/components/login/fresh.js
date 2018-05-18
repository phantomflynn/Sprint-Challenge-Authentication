import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Container, Input, ButtonContainer, Button } from './styles';

class Main extends Component {
  state = {
    username: "",
    password: ""
  }

  handleLogin = event => {
    axios
      .post("http://localhost:5000/api/login", this.state)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/jokes');
      })
      .catch(err => console.log(err))
    this.setState({ username: "", password: "" });
  }

  handleSignup = () => {
    axios
      .post("http://localhost:5000/api/users", this.state)
      .then(res => this.props.history.push('/jokes'))
      .catch(err => console.log(err));
    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <Container>
        <Input 
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <Input 
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <ButtonContainer>
          <Button onClick={() => this.handleLogin()}>Existing User</Button>
          <Button onClick={() => this.handleSignup()}>New User</Button>
        </ButtonContainer>
      </Container>
    )
  }
}

export default withRouter(Main);