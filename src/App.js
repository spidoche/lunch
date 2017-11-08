import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">오늘점심머꼬?</h1>
        </header>
        <p className="App-intro">
          <Button title="My button~~" />
        </p>
      </div>
    );
  }
}

export default App;
