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
    // ??? is this considered modifying state directly???
    this.setState({
      iconClicked: event.target.alt
    });
  }

  render() {
    return (
      <div className="App">
        <div id="icons">
          <img src={icon1} className="icons" id="golf1" height="100" width="100" alt="golf1" onClick={this.handleClick} />
          <img src={icon2} className="icons" height="100" width="100" alt="golf2" onClick={this.handleClick} />
          <img src={icon3} className="icons" height="100" width="100" alt="golf3" onClick={this.handleClick} />
          <img src={icon4} className="icons" height="100" width="100" alt="golf4" onClick={this.handleClick} />
          <img src={icon5} className="icons" height="100" width="100" alt="golf5" onClick={this.handleClick} />
          <h2>Clicked: {this.state.iconClicked}</h2>
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
