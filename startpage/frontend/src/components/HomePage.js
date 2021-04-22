import React from "react";
import StartPage from "./StartPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>
    </Router>
  );
}

export default HomePage
