import React, { Component } from 'react'

export default class B4 extends Component {
  state = {
    selectedOption: ''
  };

  handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedOption: event.target.value });
  };
  render() {
    return (
      <div>
        <h2>Tỉnh thành: {this.state.selectedOption}</h2>
        <select value={this.state.selectedOption} onChange={this.handleChange}>
          <option value="">Chọn tỉnh/thành phố</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Hồ Chí Minh">Hồ Chí Minh</option>
          <option value="Đà Nẵng">Đà Nẵng</option>
          <option value="Hải Phòng">Hải Phòng</option>
          <option value="Cần Thơ">Cần Thơ</option>
        </select>
      </div>
    )
  }
}
