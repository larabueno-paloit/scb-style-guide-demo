import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import Home from './routes/Home';
import './resources/css/reset.css';
import './App.css';



class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}

export default App;
