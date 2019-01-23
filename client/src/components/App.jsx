import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Resources from "./Resources";
import Header from './Header';
import Footer from './Footer'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Resources />
        <Footer />
      </div>
    );
  }
}

export default App;
