import React, { Component } from "react";

interface Props {
  id: number;
  name: string;
  birthDate: string[];
  address: string[];
}
export default class Exercises01 extends Component<any, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100000),
      name: "Phạm Minh Sơn",
      birthDate: ["06", "09", "2012"],
      address: ["Thanh Xuân", "Hà Nội"],
    };
  }
  render() {
    return (
      <>
        <p>ID: {this.state.id}</p>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.birthDate}</p>
        <p>Địa chỉ: {this.state.address.join(",")}</p>
      </>
    );
  }
}
