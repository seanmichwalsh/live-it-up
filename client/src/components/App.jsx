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
        <Resources />
        <Footer />
      </div>
    );
  }
}

export default App;
