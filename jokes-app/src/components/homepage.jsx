import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push('/register')}>new user</button>
        <button onClick={() => this.props.history.push('/login')}>existing user</button>
      </div>
    )
  }
}

export default withRouter(Homepage);