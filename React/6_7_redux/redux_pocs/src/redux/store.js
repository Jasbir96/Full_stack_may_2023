import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import TodoSlice from './TodoSlice';
import userslice from './UserSlice';

import thunkMiddleWare from "redux-thunk";
// 2
const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: userslice.reducer
    },
    middleware:[thunkMiddleWare]
})
export default store;

