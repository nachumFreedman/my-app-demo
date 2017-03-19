import React, {Component} from 'react';
class SecondButton extends Component {

render(){
  return(
    <div >
    <p style={{color:this.props.textColor}}>{this.props.children}</p>
    <button>Click me</button>
    </div>
  );
}
};
export default SecondButton;
