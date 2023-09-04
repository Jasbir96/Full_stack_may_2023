import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
// 2
 const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer
    }
})
export default store;

