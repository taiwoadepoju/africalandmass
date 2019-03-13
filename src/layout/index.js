import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import Header from "../components/Header/Header";
import EvaluationForm from "../views/EvaluationForm/EvaluationForm";
import Footer from "../components/Footer/Footer";

export default class Layout extends Component {

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/evaluation-form" exact component={EvaluationForm} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    )
  }
}