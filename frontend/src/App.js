
import './App.css';

// App.js
import React, { Component } from "react";
import { connect, sendMsg } from "./api/index";

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}


export default App;
