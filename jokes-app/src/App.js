import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Jokes from './components/jokes/jokes';
import Main from './components/login/fresh';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
