import React, { useEffect } from "react";
import axios from "axios";
export default function App() {
  useEffect(() => {
    axios
      // đi thêm mới bản ghi trong bảng users
      .get("")
      .then((res) => console.log("giá trị data", res))
      .catch((err) => console.log(err));
  });
  return <div></div>;
}
