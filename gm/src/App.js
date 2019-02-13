import React, { Component } from 'react';
import logo from './logo.svg';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import PoliticalPartyTail from './PoliticalPartyTail'

import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <PoliticalPartyTail></PoliticalPartyTail>
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <p>DUPA</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
