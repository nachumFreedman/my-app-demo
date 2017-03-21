import React, {Component} from 'react';
class FirstButton extends Component {
  changeColor = ()=>{

  }
  render(){
    return(
      <div >
      <p style={{color:this.props.textColor2}}>{this.props.children}</p>
      <button>Click me</button>
      </div>
    );
}
};
export default FirstButton;
