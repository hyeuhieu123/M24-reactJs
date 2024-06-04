import React, { Component } from 'react'

export default class B2 extends Component {
    constructor(props:any) {
        super(props);
        this.state = {
          inputValue: ''
        };
    }
    handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value });
      };
    
  render() {
    return (
      <div>
        <h2>Dữ liệu người dùng đã nhập: {this.state.inputValue}</h2>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="Nhập dữ liệu"/>
      </div>
    )
  }
}
