import React, { Component } from 'react';
import './App.css';
import Directory from "./Directory";
import Resources from "./Resources";
import Header from './Header';
import EditUser from './EditUser';
import AddUser from './AddUser';
import AddCommittee from './AddCommittee';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path='/directory' component={Directory} />
              <Route exact path='/edituser' component={EditUser}/>
              <Route exact path='/adduser' component={AddUser}/>
              <Route exact path='/addcommittee' component={AddCommittee}/>
              {/* We should add other Routes here */}
            </Switch>
          </div>
          
        </BrowserRouter>
    );
  }
}

export default App;
