import React, { Component } from "react";
import "./App.css";

import Users from "./components/Users";
import User from "./components/User";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Management</h1>
        </header>
        <User />
        <Users />
      </div>
    );
  }
}

export default App;
