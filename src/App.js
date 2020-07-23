import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>homepage</h1>
    </div>
  );
};

const TopicsPage = () => {
  return (
    <div>
      <h1>Topics Page</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path={"/"} component={Homepage} /> */}
        <Route exact path={"/homepage"} component={HomePage} />
        <Route exact path={"/topics"} component={TopicsPage} />
      </div>
    );
  }
}

export default App;
