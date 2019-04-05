import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import icon1 from './icons/golf1.png';
import icon2 from './icons/golf2.png';
import icon3 from './icons/golf3.png';
import icon4 from './icons/golf4.png';
import icon5 from './icons/golf5.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClicked: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("clicked", event.target.id);
    this.setState({
      iconClicked: event.target.id
    });
  }

  render() {
    return (
      <div className="App">
        <div id="golf1"><img src={icon1} className="icons" height="100" width="100" alt="golf1" onClick={this.handleClick} /></div>
        <div id="golf2"><img src={icon2} className="icons" height="100" width="100" alt="golf2" onClick={this.handleClick} /></div>
        <div id="golf3"><img src={icon3} className="icons" height="100" width="100" alt="golf3" onClick={this.handleClick} /></div>
        <div id="golf4"><img src={icon4} className="icons" height="100" width="100" alt="golf4" onClick={this.handleClick} /></div>
        <div id="golf5"><img src={icon5} className="icons" height="100" width="100" alt="golf5" onClick={this.handleClick} /></div>
        <h2>{this.state.iconClicked}</h2>

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
