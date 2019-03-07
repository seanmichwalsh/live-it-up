import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer'; 
import Home from './Home'; 
import User from './User'; 
import Events from './Events';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/directory' component={User} />
              <Route exact path='/events' component={Events} />
              {/* We should add other Routes here */}
            </Switch>
            <Footer />
          </div>
          
        </BrowserRouter>
        
    );
  }
}

export default App;
