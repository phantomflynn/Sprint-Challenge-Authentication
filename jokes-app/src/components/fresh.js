import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import glamorous from 'glamorous'; // yarn add glamorous glamor

const Container = glamorous.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '25%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
});

const Input = glamorous.input({
  margin: 'auto',
  width: '23%',
  height: '20%',
  padding: '0 1% 0 1%',
  fontSize: '1.5rem',
  border: 'none',
  borderBottom: '1px solid white',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center'
});

const ButtonContainer = glamorous.div({
  margin: 'auto',
  width: '23%',
  height: '20%',
  display: 'flex',
  justifyContent: 'space-between'
});

const Button = glamorous.button({
  width: '47%',
  borderRadius: '3px',
  backgroundColor: 'transparent',
  color: 'white',
  fontWeight: 600,
  border: '1px solide white',
  ':hover': { color: 'black', backgroundColor: 'white', cursor: 'pointer' },
  ':focus': { color: 'black', backgroundColor: 'white' }
});

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