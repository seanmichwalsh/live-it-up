import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home'; 
import Points from './Points';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/points" component={Points} />
              {/* We should add other Routes here */}
            </Switch>
            {/* <Footer /> */}
          </div>
          
        </BrowserRouter>
    );
  }
}

export default App;
