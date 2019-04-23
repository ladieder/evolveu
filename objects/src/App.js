import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import calcImg from "./icons/calculator.png";
import dollarImg from "./icons/dollar.png";
import globeImg from "./icons/globe.png";
import golfImg from "./icons/golf5.png";

import MathComp from "./components/MathComp";
import AccountApp from "./components/AccountApp";

class App extends Component {
  constructor() {
    super()
    this.state = {display: ""}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({display: e.target.alt});
  }

  render() {
    let page;

    switch (this.state.display) {
      case "calculator":
        page = <MathComp />
        break;
      case "accounts":
        page = <AccountApp />
        break;
      // case "account":
      //   page = <AccountComp />
      //   break;
      default:
        break;
    } 
//what should default return be???

    return (
      <div className="App">
        <img src={calcImg} className="icons" height="64" width="64" alt="calculator" onClick={this.handleClick}/>
        <img src={dollarImg} className="icons" height="64" width="64" alt="accounts" onClick={this.handleClick}/>
        <img src={globeImg} className="icons" height="64" width="64" alt="account" onClick={this.handleClick}/>
        <img src={golfImg} className="icons" height="64" width="64" alt="placeholder" onClick={this.handleClick}/>
    
        {page}

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
