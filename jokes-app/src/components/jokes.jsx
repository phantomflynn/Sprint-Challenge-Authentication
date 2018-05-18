import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import glamorous from 'glamorous';

const Button = glamorous.button({
  width: '7%',
  height: '2rem',
  margin: '1% auto 3%',
  borderRadius: '3px',
  backgroundColor: 'transparent',
  color: 'white',
  fontWeight: 600,
  border: '1px solide white',
  ':hover': { color: 'black', backgroundColor: 'white', cursor: 'pointer' },
  ':focus': { color: 'black', backgroundColor: 'white' }
});

const Joke = glamorous.div({
  color: 'white',
  margin: '1.5% auto'
})

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
        <div className="flipContainer">
          {this.state.jokes.map(joke => (
            // <Joke key={joke.id}>
            //   <div>{joke.setup}</div>
            //   <li>{joke.punchline}</li>
            // </Joke>
              <div class="flipper">
                <div class="front">{joke.setup}</div>
                <div class="back">{joke.punchline}</div>
              </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Jokes);