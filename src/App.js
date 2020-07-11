import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const Hatspage = () => (
  <div>
    <h1>hats lelo</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={"/"} component={Homepage} />
        <Route exact path={"/hats"} component={Hatspage} />
      </div>
    );
  }
}

export default App;
