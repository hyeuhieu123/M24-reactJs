import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../store/reducers/CountountReducer";

export default function Count() {
  const state: any = useSelector((state) => state);

  console.log(111, state);

  const dispatch = useDispatch();

  return (
    <div>
      Count
      <p>Giá trị count: {state.count}</p>
      <button onClick={() => dispatch(increase())}>Tăng</button>
      <button onClick={() => dispatch(decrease())}> Giảm</button>
    </div>
  );
}
