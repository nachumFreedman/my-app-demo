import React, {Component} from 'react';
class FirstButton extends Component {
  changeColor = ()=>{

  }
  render(){
    //console.log(this.props)
    return(
      <div >
      <p style={{color:this.props.textColor}}>{this.props.children}</p>
      <button onClick={this.props.onChangeColor}>Click me</button>
      </div>
    );

  }
};
export default FirstButton;
