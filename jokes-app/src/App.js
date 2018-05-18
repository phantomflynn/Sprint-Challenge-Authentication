import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Link } from 'react-router-dom';
import LogIn from './components/login';
import Jokes from './components/jokes';
import NewUser from './components/register';
import Homepage from './components/homepage';
import Main from './components/fresh';
// import glamorous from 'glamorous';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Link to="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </Link>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={NewUser} /> */}
        <Route exact path="/" component={Main} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
