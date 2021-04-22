import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";  // wrap this around everything for redux
import store from "../store";

import HomePage from "./HomePage";

const Apps = () => {
  return (
    <Provider store={store}>
      <div className="center">
        <HomePage />
        {/* <h1>afasdfd</h1> */}
      </div>
    </Provider>
  );
}

// Render the App component to the "app" div inside the index.html:
render(<Apps />, document.getElementById("app"));
