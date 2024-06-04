// import React, { Component } from 'react'

// interface Props {
// }
// interface State {
//   name: string,
//   age: number,
//   count: number
// }
// export default class App extends Component<Props, State>{
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       // Chứa những dữ liệu
//       name: 'Hảo',
//       age: 20,
//       count: 0
//     }
//   }
//   // khi muốn thay đổi statew đối vs class
//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   shouldComponentUpdate(nextProps: Readonly<State>, nextState: Readonly<Props>, nextContext: any): boolean {
//     return true
//   }
//   componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
//     console.log("will update");
//   }
//   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
//     console.log("did update");
//   }
//   componentWillMount(): void {
//     console.log("will ");

//   }
//   conponentDisMount(): void {
//     console.log("dis");

//   }
//   //tạo phương thức remove khởi dpm
//   handleRemove = () => {
//     this.setState({ isActive: false })
//   }
//   render() {
//     console.log("component");

//     return (
//       <>
//         {/* {this.state.name}   */}
//         {/* 4 Giai đoạn:
//            1. Initial (khởi tạo)
//                + Khởi tạo state, props
//             2. Mounting (Gắn vào, thêm vào)
//                     + Cung cấp mặc định các phương thức có sẵn r
//                     + sau khi giai đoạn khởi tạo xong thì tiếp tục chạy vô phương thức willMount()->render-->disMount()
//                     3. Update (Thay đổi)
//                     + sảy ra lỗi khi state hoặc props thay đổi thì chạy vao giai đoạn update
//                     +cung cấp các phươnt thức
//                       1. shouldComponentUpdate
//                       ==> bắt buộc phải return true/flase
//                       ==> nếu o khai báo hàm thì mặc định là true
//                       2   componentWillMount
//                     4. Unmounting (Gỡ bỏ, xóa bỏ)
//                 */}

//         <p>{this.state.count}</p>
//         <button onClick={this.handleClick}>count</button>
//       </>
//     )
//   }
// }
import { useState } from "react";
// import Fun from './Commopet/Fun'
// import Class from './Commopet/Class'
// import Condition from './Commopet/Conditon'
import Bt1 from "./bt/Bt1";
import Bt2 from "./bt/Bt2";
import Bt3 from "./bt/Bt3";
import Bt4 from "./bt/Bt4";
import Bt5 from "./bt/Bt5";
import Bt6 from "./bt/Bt6";
import Bt7 from "./bt/Bt7";
import Bt8 from "./bt/Bt8";
import Bt9 from "./bt/Bt9";
import Bt10 from "./bt/Bt10";

function App() {
  return (
    <>
      {/* <Fun></Fun>
      <Class></Class>
      <Condition></Condition> */}
      <Bt1></Bt1>
      <Bt2></Bt2>
      <Bt3></Bt3>
      <Bt4></Bt4>
      <Bt5></Bt5>
      <Bt6></Bt6>
    </>
  );
}

export default App;
