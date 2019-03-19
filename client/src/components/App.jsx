import React, { Component } from 'react';
import './App.css';
import Directory from "./Directory";
import Resources from "./Resources";
import Header from './Header';
import Footer from './Footer'; 
import Home from './Home'; 
import AddUser from './AddUser';
import Calendar from './Calendar';


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
              <Route exact path='/resources' component={Resources} />
              <Route exact path="/adduser" component={AddUser} />
              <Route exact path="/calendar" component={Calendar} />
              {/* We should add other Routes here */}
            </Switch>
            <Footer />
          </div>
          
        </BrowserRouter>
    );
  }
}

export default App;
