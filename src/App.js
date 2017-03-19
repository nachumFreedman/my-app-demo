import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextButtonDoes from './TextButtonDoes';
import SecondButton from './SecondButton';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      {[1].map(i=>(
        <p className="App-intro">
        {i}. To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      ))}
      <TextButtonDoes textColor="blue">
      you should
      </TextButtonDoes>
      </div>
    );
  }
}

export default App;
