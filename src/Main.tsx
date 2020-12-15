import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Accounts from "components/pages/Accounts";
import Home from "components/pages/Home";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accounts" component={Accounts} />
      </Switch>
    );
  }
}
