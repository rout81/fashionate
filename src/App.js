import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={ShopPage} />
      </div>
    );
  }
}

export default App;
