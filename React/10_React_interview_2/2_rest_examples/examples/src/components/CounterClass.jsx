import React, { useState } from "react";

class CounterClass extends React.Component {
    constructor() {
        // optional
        super(props);
        this.state = {
            count: 0
        }
    }
    // handler function 
    handleIncrement = () => {
        this.setState({ count: this.count + 1 });
    }
    handleDecrement = () => {
        this.setState({ count: this.count -1  });

    }
// ui is printed
    render() {
        return (
            <div className="container">
                <button onClick={this.handleIncrement}>+</button>
                <p>Count {this.state.count}</p>
                <button onClick={this.handleIncrement}>-</button>
                <h1>Hello</h1>
                <h2>I am atext</h2>
            </div>
        )
    }

}


export default CounterClass;