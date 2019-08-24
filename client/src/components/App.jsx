import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home'; 
import Points from './Points';
import EditUser from './EditUser';
import AddUser from './AddUser';
import AddCommittee from './AddCommittee';
import Directory from './Directory';
import Resources from './Resources'; 

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
              <Route exact path='/directory' component={Directory} />
              <Route exact path='/edituser' component={EditUser}/>
              <Route exact path='/adduser' component={AddUser}/>
              <Route exact path='/addcommittee' component={AddCommittee}/>
              <Route exact path='/resources' component={Resources}/>
              {/* We should add other Routes here */}
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
