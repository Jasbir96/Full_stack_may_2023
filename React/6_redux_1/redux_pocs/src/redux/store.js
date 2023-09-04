import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import TodoSlice from './TodoSlice';
// 2
const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState:TodoSlice.reducer
    }
})
export default store;

