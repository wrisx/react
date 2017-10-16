import React, { Component } from "react";
import "./App.css";

import Wrisxs from "./components/Wrisxs";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Wrisx</h1>
        <div className="header-bar" />
        <app-wrisxs />
        <Wrisxs />
      </div>
    );
  }
}

export default App;
