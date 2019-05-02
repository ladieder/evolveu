import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import calcImg from "./icons/calculator.png";
import dollarImg from "./icons/dollar.png";
import globeImg from "./icons/globe.png";
import linkImg from "./icons/link.png";
import golfImg from "./icons/golf5.png";

import MathComp from "./components/calculator/MathComp";
import AccountApp from "./components/account/AccountApp";
import WorldApp from "./components/community/WorldApp";
import LinkApp from "./components/linkedLists/LinkApp";

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
      case "world":
        page = <WorldApp />
        break;
      case "link":
        page = <LinkApp />
        break;
      case "golf":
        page = null;
        break;
      default:
        break;
    } 
// what should default return be??? blank page ok???

    return (
      <div className="App">
        <img src={calcImg} className="icons" height="64" width="64" alt="calculator" onClick={this.handleClick}/>
        <img src={dollarImg} className="icons" height="64" width="64" alt="accounts" onClick={this.handleClick}/>
        <img src={globeImg} className="icons" height="64" width="64" alt="world" onClick={this.handleClick}/>
        <img src={linkImg} className="icons" height="64" width="64" alt="link" onClick={this.handleClick}/>
        <img src={golfImg} className="icons" height="64" width="64" alt="golf" onClick={this.handleClick}/>

        {page}

        <br /><br />
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
