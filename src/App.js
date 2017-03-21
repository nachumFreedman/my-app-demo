import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstButton from './FirstButton';
import SecondButton from './SecondButton';
function isOdd(button1Click) {
  return math.abs(number1 % 2) === 1;
}
class App extends Component {

  constructor(textColor){
    super();
    this.state = {
      textColor1: 'red',
      textColor2: 'blue'
      button1Click: '0'
    };
  }
  n = () => {
    this.setState({n: '1' })
  }
  n1= () => {
    this.setstate({n1: '1'})
  }
  if (n = isOdd) {
    changeTextColor1 = () => {
      this.setState({ textColor1: 'red' })
    }
  } else {
    changeTextColor1 = () => {
      this.setState({ textColor1: 'blue' })
    } else if (n1 === odd) {
      changeTextColor2 = () => {
        this.setState({textColor2: 'blue'})
      } else {
        changeTextColor2 = () => {
          this.setState){textColor2: 'red'}
        }
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
      onChangeColor={this.changeTextColor2}>
      {youShould}
      </FirstButton>
      </div>
      <SecondButton textColor={this.state.textColor2}
      onChangeColor={this.changeTextColor1}>
      {youShould}
      </SecondButton>
      </div>
    );
  }
}

export default App;
