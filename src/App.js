import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/hats"} component={HatsPage} />
      </div>
    );
  }
}

export default App;
