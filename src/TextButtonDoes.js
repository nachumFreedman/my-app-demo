import React, {Component} from 'react';
class TextButtonDoes extends Component {
  changeColor = ()=>{

  }
  render(){
    return(
      <div >
      <p style={{color:this.props.textColor}}>{this.props.children}</p>
      <button>Click me</button>
      </div>
    );
}
};
export default TextButtonDoes;
