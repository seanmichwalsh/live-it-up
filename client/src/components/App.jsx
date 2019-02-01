import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer'; 
import Home from './Home'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
