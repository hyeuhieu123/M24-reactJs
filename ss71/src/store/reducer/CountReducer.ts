import { createSlice } from "@reduxjs/toolkit";
const countState: number = 0;
const countState = createSlice({
  name: "countCeducer",
  initialState: countState,
  reducers: {
    increase: (state) => (state += 1),
    decrease: (state) => state - 1,
  },
});
