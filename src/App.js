import React, { Component } from "react";
import Marinity from "./Marinity";
import { Route, Switch } from "react-router-dom";
import { Login, Signup, ResetPassword, ResetConfirmation } from "./components";

export default class App extends Component {
  render() {
    console.log(window.location.pathname);
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact strict component={() => <Login />} />
          <Route path="/signup" exact strict component={() => <Signup />} />
          <Route path="/passwordreset" exact strict component={() => <ResetPassword />} />
          <Route path="/passwordconfirmation" exact strict component={() => <ResetConfirmation />} />
          <Marinity/>
        </Switch>
      </React.Fragment>
    );
  }
}
