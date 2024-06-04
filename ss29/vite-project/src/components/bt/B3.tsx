import React, { Component } from 'react'

export default class B3 extends Component {
    state = {
        dateValue: ''
      };
    
      handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ dateValue: event.target.value });
      };
    
  render() {
    return (
      <div>
        <h2>Thời gian: {this.state.dateValue}</h2>
        <input type="date" value={this.state.dateValue} onChange={this.handleChange} />
      </div>
    )
  }
}
