import React, { Component } from 'react'

export default class B1 extends Component {
    handleClick = () => {
        console.log('Clicked');
      };
    
  render() {
    return (
      <div>
         <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}
