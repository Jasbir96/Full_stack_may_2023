// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
//1
const userslice = createSlice({
    name: "userslice",
    // intinal state value
    initialState: {
        user: null,
        error: false,
        loading: true,
        param: null
    },
    // functions to update your state 
    reducers: {
        userLoading: (state) => {
            state.error = false;
            state.loading = true
        },
        userError: (state) => {
            state.error = true;
            state.loading = false
        },
        userData: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        getParam: (state, action) => {
            state.param =action.payload;
        }
    }

});

export default userslice;