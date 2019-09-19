import React, { Component } from 'react';
import './App.css';
import Header from './Common/Header';
import Home from './Home/Home'; 
import Points from './Points/Points';
import EditUser from './Users/EditUser';
import AddUser from './Users/AddUser';
import AddCommittee from './Committee/AddCommittee';
import Directory from './Directory/Directory';
import Resources from './Resources/Resources'; 
import PageNotFound from './PageNotFound';

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
                <Route exact path='/edituser'o component={EditUser}/>
                <Route exact path='/adduser' component={AddUser}/>
                <Route exact path='/addcommittee' component={AddCommittee}/>
                <Route exact path='/resources' component={Resources}/>
                <Route component={PageNotFound} />
                {/* We should add other Routes here */}
              </Switch>
            
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
