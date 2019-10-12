import React from 'react';
import './App.css';

import Header from './Common/Header';
import Home from './Home/Home';
import Points from './Points/Points';
import AddPoints from './Points/AddPoints';
import EditUser from './Users/EditUser';
import AddUser from './Users/AddUser';
import AddCommittee from './Committee/AddCommittee';
import Directory from './Directory/Directory';
import Resources from './Resources/Resources';
import NotFound from './NotFound';
import Calendar from './Calendar/Calendar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/points" component={Points} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/addpoints" component={AddPoints} />
          <Route exact path="/directory" component={Directory} />
          <Route exact path="/edituser" component={EditUser} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/addcommittee" component={AddCommittee} />
          <Route exact path="/resources" component={Resources} />
          <Route component={NotFound} />
          {/* We should add other Routes here */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
