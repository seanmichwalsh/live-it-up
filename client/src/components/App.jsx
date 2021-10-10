import React from "react";
import "./App.css";

import Header from "./Common/Header";
import Home from "./Home/Home";
import Points from "./Points/Points";
import AddPoints from "./Points/AddPoints";
import EditUser from "./Users/EditUser";
import AddUser from "./Users/AddUser";
import AddCommittee from "./Committee/AddCommittee";
import Directory from "./Directory/Directory";
import Resources from "./Resources/Resources";
import NotFound from "./NotFound";
import Calendar from "./Calendar/Calendar";
import AddEvent from "./Calendar/AddEvent";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/points" component={Points} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/calendar/addevent" component={AddEvent} />
          <Route exact path="/points/addpoints" component={AddPoints} />
          <Route exact path="/directory" component={Directory} />
          <Route exact path="/directory/edituser" component={EditUser} />
          <Route exact path="/directory/adduser" component={AddUser} />
          <Route exact path="/directory/addcommittee" component={AddCommittee} />
          <Route exact path="/resources" component={Resources} />
          <Route component={NotFound} />
          {/* We should add other Routes here */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;