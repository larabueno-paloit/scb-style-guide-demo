import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav/Nav.js';
import Homepage from './components/HomePage/HomePage.js';
import './resources/css/reset.css';
import './App.css';



class App extends Component {
  render() {
    return (
        <Homepage />
    );
  }
}

export default App;
