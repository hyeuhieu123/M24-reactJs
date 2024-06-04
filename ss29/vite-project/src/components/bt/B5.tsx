import React, { Component } from 'react';

export default class B5 extends Component {
  state = {
    isDisplayed: true
  };

  render() {
    return (
      <div>
        <button >
          {this.state.isDisplayed ? 'Hiển' : 'Ẩn'}
          </button>
      </div>
    );
  }
}
