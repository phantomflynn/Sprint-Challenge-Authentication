import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
      <div>
        <button onClick={() => this.handleLogout()}>sign out</button>
        {this.state.jokes.map(joke => <div key={joke.id}>{joke.setup}</div>)}
      </div>
    )
  }
}

export default withRouter(Jokes);