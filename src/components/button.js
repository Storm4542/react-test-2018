/*涟漪效果的Button*/
import React, { Component } from 'react';
import './button.css';
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:false,
      deltaX:0,
      deltaY:0,
    };
    this.myRef = React.createRef();
  }
  render() {
    return (
      <button ref={this.myRef}  className="btn" onClick={this.x.bind(this)}>
          <span className="value">{this.props.value}</span>
          {this.state.active === true ? 
            ( <span onAnimationEnd={this.y.bind(this)} style={{left:this.state.deltaX, top:this.state.deltaY}}  className='circle'></span>):('')}
      </button>
    );
    
  }
  x(event){
      let {x ,y} = this.myRef.current.getBoundingClientRect();
      let {clientX ,clientY} = event;
      let deltaX = clientX - x - 5;
      let deltaY = clientY - y - 5   ;
      this.setState({
        active:true,
        deltaX:deltaX,
        deltaY:deltaY
      })
      
  }
  y(){
    this.setState({
      active:false
    })
  }
}

export default Button;
