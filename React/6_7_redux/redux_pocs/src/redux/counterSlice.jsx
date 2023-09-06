// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
//1
const counterSlice = createSlice({
  name: "countername",
  initialState: {
    count: 5
  },
  // all the update logic 
  reducers: {
    // in that state -> intial state ,
    // that is updated
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

export default counterSlice;