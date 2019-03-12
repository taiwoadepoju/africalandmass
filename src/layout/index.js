import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import Header from "../components/Header/Header";

export default class Layout extends Component {

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}