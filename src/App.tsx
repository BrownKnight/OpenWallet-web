import Main from "Main";
import React, { Component } from "react";
import "./App.css";
import OWNavbar from "./components/util/OWNavbar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <OWNavbar />
        <Main />
      </div>
    );
  }
}
