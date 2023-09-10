import React, { useReducer } from 'react';


/***
 * useReducer 
 * * have all the state management logic of a componet at one place using reducer
 * * there no quirk of prev state 
 * * you get only one dispatch function to make all the state mutation
 * */ 
// deal with complex state variables 
function CounterUseReducer() {
    const intialState = 0;
    // all the possible state mutation
    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "IncrementByFive":
                return state + 5;
            case "DecrementByFive":
                return state - 5;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, intialState);
    return (
        <>
            <div  style={{color:"white"}}> {count} </div>
            <button onClick={() => { dispatch("increment") }}>Increment</button>
            <button onClick={() => { dispatch("decrement") }}>Decrement</button>
            <button onClick={() => { dispatch("IncrementByFive") }}> +five </button>
            <button onClick={() => { dispatch("DecrementByFive") }}> -five </button>
        </>
    )
}

export default CounterUseReducer;