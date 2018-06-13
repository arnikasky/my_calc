import React, { Component } from 'react';
import './App.css';
import Output from "./Output";
import Button from "./Button";
import Panel from "./Panel";
import calculate from "./calculate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

} 
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

   render() {
    return (
      <div className="App">
      <Output value={this.state.total || this.state.next || "0"} /> 
      <Panel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
