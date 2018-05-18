import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button, JokesContainer, Joke, Front, Back } from './styles';

class Jokes extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const requestOptions = { headers: { Authorization: token } };
    axios
      .get("http://localhost:5000/api/jokes", requestOptions)
      .then(res => this.setState({ jokes: res.data }))
      .catch(err => this.props.history.push('/'))
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="cardz">
        <Button onClick={() => this.handleLogout()}>Sign Out</Button>
        <JokesContainer>
          {this.state.jokes.map(joke => (
            <Joke>
              <Front>{joke.setup}</Front>
              <Back>{joke.punchline}</Back>
            </Joke>
          ))}
        </JokesContainer>
      </div>
    )
  }
}

export default withRouter(Jokes);