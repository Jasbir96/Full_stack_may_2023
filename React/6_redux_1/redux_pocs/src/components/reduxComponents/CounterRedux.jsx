import React, { useState } from 'react';
import { useSelector } from "react-redux";

function Counter() {
    const count = useSelector((store) => { return store.counterState.count });
    const handleIncrement = () => {
        console.log("increment will happen");
    }
    const handleDecrement = () => {
        console.log("decrement will happen");
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


