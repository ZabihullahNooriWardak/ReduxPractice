import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
import "./Counter.css"; // Import your CSS file for styling

function Counter() {
    const dispatch = useDispatch();
    let total = useSelector(state => state.counter.initNumber);

    function handleIncrement() {
        dispatch(increment());
    }

    function handleDecrement() {
        dispatch(decrement());
    }

    return (
        <div className="counter-container">
            <h1 className="counter-heading">Counter App</h1>
            <div className="counter">
                <button className="counter-button" onClick={handleDecrement}>-</button>
                <p className="counter-value">Counter Value: {total}</p>
                <button className="counter-button" onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

export { Counter };
