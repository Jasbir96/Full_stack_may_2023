import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../../redux/counterSlice";

const actions = counterSlice.actions;
function Counter() {
    // get inital state 
    const count = useSelector
    ((store) => { 
        return store.counterState.count });

// is used to call any method from the reducer
    const dispatch = useDispatch();
    const handleIncrement = () => {
        console.log("increment will happen");
        // here it is used 
        dispatch(actions.increment());
    }
    const handleDecrement = () => {
        console.log("decrement will happen");
        dispatch(actions.decrement());
    }
    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter;


