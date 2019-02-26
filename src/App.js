import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="App">
        <Button variant="contained" color="primary">Hello</Button>
        <Button variant="contained" color="secondary">Hello</Button>
      </div>
    );
  }
}

export default withTheme()(App);
