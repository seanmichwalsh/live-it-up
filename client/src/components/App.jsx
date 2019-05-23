import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'; 
import EditUser from './EditUser';
import Directory from './Directory'; 

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/directory' component={Directory} />
              <Route exact path="/edituser" component={EditUser}/>
              {/* We should add other Routes here */}
            </Switch>
          </div>
          
        </BrowserRouter>
    );
  }
}

export default App;
