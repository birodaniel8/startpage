import React from "react";
import StartPage from "./StartPage";
import GridPage from "./GridPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/grid" component={GridPage} />
      </Switch>
    </Router>
  );
}

export default HomePage
