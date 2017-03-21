import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstButton from './FirstButton';
import SecondButton from './SecondButton';
class App extends Component {

  constructor(textColor){
    super();
    this.state = {
      textColor1: 'red',
      textColor2: 'blue'
    };
  }
  changeTextColor1 = () => {
    this.setstate({ textColor1:'blue' })
  }
  changeTextColor2 = () => {
    this.setstate({ textColor2:'red' })
  }
  render() {
    var youShould = "You should";
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      {[1].map(i=>(
        <p className="App-intro" key={i}>
        {i}. To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      ))}
      <div className="Spin-button">
      <FirstButton textColor={this.state.textColor1}
      onClick={this.changeTextColor2}>
      {youShould}
      </FirstButton>
      </div>
      <SecondButton textColor={this.state.textColor2}
      onClick={this.changeTextColor1}>
      {youShould}
      </SecondButton>
      </div>
    );
  }
}

export default App;
