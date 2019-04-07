import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ??? images work this but can't can't put link directly in src???

import plusImg from './icons/plus.png';
import minusImg from './icons/minus.png';
import multImg from './icons/multiply.png';
import divImg from './icons/divide.png';
import MathComp from "./components/MathComp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      input1: null,
      input2: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearFunc = this.clearFunc.bind(this);
  }

  handleChange(event) {
    // ??? is this considered modifying state directly???
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(event) {
    this.setState({
      operator: event.target.alt,
    });

    // ??? get error if put MathComp here ???
    // <MathComp data={this.state} />
  }

  // {can you get rid of state/this for clearFunc cause it doesn't need it ???}

  clearFunc() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
  }

  // ??? should make img icons buttons???

  render() {
    return (
      <div className="App">

        <div id="calculator">
          <h1>Calculator</h1>
          <h4>Input 1: </h4><input name="input1" id="input1" type="number" onChange={this.handleChange} />
          <h4>Input 2: </h4><input name="input2" id="input2" type="number" onChange={this.handleChange} />
          <h4>Choose Operator: </h4>

          <img src={plusImg} className="mathIcons" id="plus" height="64" width="64" alt="+" onClick={this.handleClick} />
          <img src={minusImg} className="mathIcons" id="minus" height="64" width="64" alt="-" onClick={this.handleClick} />
          <img src={multImg} className="mathIcons" id="multiply" height="64" width="64" alt="*" onClick={this.handleClick} />
          <img src={divImg} className="mathIcons" id="divide" height="64" width="64" alt="/" onClick={this.handleClick} />
         
          {/* ??? it works but should it use onClick??? ok to pass state??? */}

          <MathComp data={this.state} />

          <button type="button" id="clear" onClick={this.clearFunc}> Clear Calculator! </button><br /><br />
        </div>



        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
