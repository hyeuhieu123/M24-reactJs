import React from "react";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
export default function App() {
  let objs = [
    {
      name: "code",
      id: 1,
      status: false,
    },
    {
      name: "code",
      id: 1,
      status: false,
    },
  ];

  return (
    <>
      <h2>danh sách công việc</h2>
      <input type="text" />
      <button> thêm</button>
      <Jobs></Jobs>
    </>
  );
}
