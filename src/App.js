import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import {HashRouter} from 'react-router-dom'
import routeslol from './routeslol'
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Nav />
        {routeslol}
      </div>
      </HashRouter>
    );
  }
}

export default App;
