import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstButton from './FirstButton';
import SecondButton from './SecondButton';
class App extends Component {

  constructor(){
    console.log('blah')
    super();
    this.state = {

      textColor1: 'blue',
      textColor2: 'blue',
    };
  }
  changeTextColor = (buttonIndex) => {
    if (buttonIndex === 1) {
      if (this.state.textColor1 === 'red' ){
        this.setState({ textColor1: 'blue' })
      } else {
        this.setState({ textColor1: 'red' })
      }
    } else if (buttonIndex === 2) {
      if (this.state.textColor2 === 'blue' ){
        this.setState({textColor2: 'red' })
      } else {
        this.setState({textColor2: 'blue' })
      }
    }
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
      onChangeColor={this.changeTextColor}>
      {youShould}
      </FirstButton>
      </div>
      <SecondButton textColor={this.state.textColor2}
      onChangeColor={this.changeTextColor}>
      {youShould}
      </SecondButton>
      </div>
    );
  }
}

export default App;
