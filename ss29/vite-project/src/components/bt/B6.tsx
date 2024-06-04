import React, { Component } from 'react'

export default class B6 extends Component {
    state = {
        isDisplayed: true
      };
    
      toggleDisplay = () => {
        this.setState((prevState) => ({
          isDisplayed: !prevState.isDisplayed
          
        }));
        
      };
    
  render() {
    return (
      <div>
         <button onClick={this.toggleDisplay}>
          {this.state.isDisplayed ? 'Hiển' : 'Ẩn'}
        </button>
      </div>
    )
  }
}
