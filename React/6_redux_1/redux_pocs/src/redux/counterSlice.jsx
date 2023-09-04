// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
//1
  const counterSlice = createSlice({
    name:"counterslice",
    initialState:{
        count:10
    }
});
export default counterSlice;